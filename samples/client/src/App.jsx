import { useEffect, useMemo, useState } from "react";
import { apiRequest } from "./api";

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || "http://localhost:4100/api";

const DEFAULT_STATUSES = ["RECEIVED", "REJECTED"];
const DEFAULT_CHECK_VALUES = ["YES", "NO", "PENDING"];
const MIN_MONTHS_BEFORE_EXPIRY = 6;
const DAY_IN_MS = 24 * 60 * 60 * 1000;
const GUIDE_CUSTOM_SIZE_VALUE = "__custom_size__";
const AUTO_QUANTITY_FIELD_CODE = "number_of_products";
const GUIDE_RISK_OPTIONS = [
  { value: "HIGH", label: "High Risk (Use Total Quantity)" },
  { value: "LOW", label: "Low Risk (Use Retention Quantity)" },
];

const ADMIN_ROUTE = "/admin";
const ADMIN_TOKEN_STORAGE_KEY = "samples_admin_token";

const TEMPLATE_LABELS = {
  new_registration: "New Registration",
  renewal: "Renewal",
  variation: "Variation",
};

function normalizeSamplingGuide(guide) {
  const products = Array.isArray(guide?.products) ? guide.products : [];

  return products
    .map((product) => {
      const productType = `${product?.productType || ""}`.trim();
      const sizes = Array.isArray(product?.sizes)
        ? product.sizes
            .map((entry, index) => ({
              id: `${index}`,
              size: `${entry?.size || ""}`.trim(),
              retention: Number(entry?.retention),
              total: Number(entry?.total),
            }))
            .filter(
              (entry) =>
                entry.size &&
                Number.isFinite(entry.retention) &&
                entry.retention > 0 &&
                Number.isFinite(entry.total) &&
                entry.total > 0
            )
        : [];

      return {
        productType,
        sizes,
      };
    })
    .filter((product) => product.productType && product.sizes.length);
}

function detectRawSizeUnit(sizeLabel) {
  const value = `${sizeLabel || ""}`.toLowerCase();

  if (/\bkg\b/.test(value)) {
    return "kg";
  }
  if (/\bml\b/.test(value)) {
    return "ml";
  }
  if (/\bl\b/.test(value)) {
    return "l";
  }
  if (/\bg\b/.test(value)) {
    return "g";
  }
  if (/(tabs?|caps?(?:ules)?|sachets?|actuations?|ampoules?|vials?|patches?)/.test(value)) {
    return "count";
  }

  return "";
}

function parseComparableSize(sizeLabel) {
  const raw = `${sizeLabel || ""}`.trim();
  if (!raw) {
    return null;
  }

  const multiplierMatch = raw.match(/(\d+(?:\.\d+)?)\s*x\s*(\d+(?:\.\d+)?)(?:\s*([a-zA-Z]+))?/i);
  const rangeMatch = raw.match(/[<>]/) || raw.includes("–") || raw.includes("-");
  const numericMatches = [...raw.matchAll(/\d+(?:\.\d+)?/g)].map((item) => Number(item[0]));

  let value;
  let unit = "";

  if (multiplierMatch) {
    value = Number(multiplierMatch[2]);
    unit = detectRawSizeUnit(multiplierMatch[0]) || detectRawSizeUnit(raw);
  } else {
    if (!numericMatches.length) {
      return null;
    }

    if (rangeMatch && numericMatches.length > 1) {
      return null;
    }

    value = numericMatches[numericMatches.length - 1];
    unit = detectRawSizeUnit(raw);
  }

  if (!Number.isFinite(value) || value <= 0) {
    return null;
  }

  if (unit === "kg") {
    return { value: value * 1000, unit: "g" };
  }

  if (unit === "l") {
    return { value: value * 1000, unit: "ml" };
  }

  if (unit === "g" || unit === "ml" || unit === "count") {
    return { value, unit };
  }

  return { value, unit: "" };
}

function isIntegerish(value) {
  return Math.abs(value - Math.round(value)) < 0.000001;
}

function findCustomSizeFactorMatch(product, customSizeInput) {
  const parsedCustom = parseComparableSize(customSizeInput);

  if (!parsedCustom) {
    return {
      error: 'Enter custom size using a format like "1 x 20 tabs" or "20 ml".',
    };
  }

  const candidates = (product?.sizes || [])
    .map((entry) => ({
      entry,
      comparable: parseComparableSize(entry.size),
    }))
    .filter((item) => item.comparable);

  const compatibleCandidates = candidates.filter((item) => {
    if (!parsedCustom.unit || !item.comparable.unit) {
      return true;
    }
    return parsedCustom.unit === item.comparable.unit;
  });

  if (!compatibleCandidates.length) {
    return {
      error: "Custom size cannot be compared with the available guide sizes for this product type.",
    };
  }

  let bestMatch = null;

  for (const candidate of compatibleCandidates) {
    const candidateValue = candidate.comparable.value;
    const ratioForward = parsedCustom.value / candidateValue;
    const ratioBackward = candidateValue / parsedCustom.value;
    const equalSize = Math.abs(parsedCustom.value - candidateValue) < 0.000001;
    const factorRelationship = isIntegerish(ratioForward) || isIntegerish(ratioBackward);

    if (!equalSize && !factorRelationship) {
      continue;
    }

    const closeness = Math.abs(Math.log(candidateValue / parsedCustom.value));

    if (!bestMatch || closeness < bestMatch.closeness) {
      bestMatch = {
        ...candidate,
        closeness,
      };
    }
  }

  if (!bestMatch) {
    return {
      error: "Custom size is not a factor or multiple of any listed size for this product type.",
    };
  }

  return {
    parsedCustom,
    referenceEntry: bestMatch.entry,
    referenceComparable: bestMatch.comparable,
  };
}

function normalizePath(pathname) {
  const value = `${pathname || "/"}`;
  if (value === "/") {
    return "/";
  }
  return value.replace(/\/+$/, "") || "/";
}

function getTemplateDisplayName(template) {
  const templateKey = `${template?.templateId || template?.id || ""}`;
  return TEMPLATE_LABELS[templateKey] || template?.title || templateKey;
}

function parseDateInput(value) {
  const cleanValue = `${value || ""}`.trim();
  if (!/^\d{4}-\d{2}-\d{2}$/.test(cleanValue)) {
    return null;
  }

  const [year, month, day] = cleanValue.split("-").map((part) => Number(part));
  const parsed = new Date(Date.UTC(year, month - 1, day));

  if (
    Number.isNaN(parsed.getTime()) ||
    parsed.getUTCFullYear() !== year ||
    parsed.getUTCMonth() !== month - 1 ||
    parsed.getUTCDate() !== day
  ) {
    return null;
  }

  return parsed;
}

function toUtcDateOnly(date) {
  return new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate()));
}

function addUtcMonths(date, months) {
  const day = date.getUTCDate();
  const shifted = new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), 1));
  shifted.setUTCMonth(shifted.getUTCMonth() + months);

  const lastDayOfTargetMonth = new Date(
    Date.UTC(shifted.getUTCFullYear(), shifted.getUTCMonth() + 1, 0)
  ).getUTCDate();

  shifted.setUTCDate(Math.min(day, lastDayOfTargetMonth));
  return shifted;
}

function getRemainingMonthsAndDays(fromDate, toDate) {
  let months =
    (toDate.getUTCFullYear() - fromDate.getUTCFullYear()) * 12 +
    (toDate.getUTCMonth() - fromDate.getUTCMonth());
  let anchor = addUtcMonths(fromDate, months);

  if (anchor > toDate) {
    months -= 1;
    anchor = addUtcMonths(fromDate, months);
  }

  const days = Math.max(0, Math.floor((toDate - anchor) / DAY_IN_MS));
  return { months: Math.max(0, months), days };
}

function formatMonthsAndDays(months, days) {
  const monthPart = `${months} month${months === 1 ? "" : "s"}`;
  const dayPart = `${days} day${days === 1 ? "" : "s"}`;
  return `${monthPart} ${dayPart}`;
}

function getExpiryAssessment(answers) {
  const manufacturingRaw = `${answers.product_manufacturing_date || ""}`.trim();
  const expiryRaw = `${answers.product_expiration_date || ""}`.trim();

  if (!manufacturingRaw || !expiryRaw) {
    return {
      status: "pending",
      message: "Enter manufacturing and expiration dates to calculate remaining shelf life.",
      remainingLabel: "",
    };
  }

  const manufacturingDate = parseDateInput(manufacturingRaw);
  if (!manufacturingDate) {
    return {
      status: "error",
      message: "Manufacturing date is invalid.",
      remainingLabel: "",
    };
  }

  const expiryDate = parseDateInput(expiryRaw);
  if (!expiryDate) {
    return {
      status: "error",
      message: "Expiration date is invalid.",
      remainingLabel: "",
    };
  }

  if (manufacturingDate >= expiryDate) {
    return {
      status: "error",
      message: "Expiration date must be after manufacturing date.",
      remainingLabel: "",
    };
  }

  const today = toUtcDateOnly(new Date());
  if (expiryDate < today) {
    return {
      status: "error",
      message: "Product has already expired.",
      remainingLabel: "",
    };
  }

  const minimumAllowedExpiry = addUtcMonths(today, MIN_MONTHS_BEFORE_EXPIRY);
  const { months, days } = getRemainingMonthsAndDays(today, expiryDate);
  const remainingLabel = formatMonthsAndDays(months, days);

  if (expiryDate < minimumAllowedExpiry) {
    return {
      status: "error",
      message: `Time remaining is ${remainingLabel}. Minimum required is 6 months from today.`,
      remainingLabel,
    };
  }

  return {
    status: "ok",
    message: `Time remaining is ${remainingLabel}. Meets the 6-month minimum requirement.`,
    remainingLabel,
  };
}

function normalizeTemplate(template) {
  if (!template) {
    return null;
  }

  const id = template.id || template.templateId || template._id?.toString?.() || "";
  return {
    ...template,
    id,
    templateId: template.templateId || id,
    documentsRequired: Array.isArray(template.documentsRequired) ? template.documentsRequired : [],
    productSample: Array.isArray(template.productSample) ? template.productSample : [],
  };
}

function normalizeSubmission(submission) {
  if (!submission) {
    return null;
  }

  const id = submission.id || submission._id?.toString?.() || "";
  const templateSnapshot = normalizeTemplate(submission.templateSnapshot);

  return {
    ...submission,
    id,
    templateId: submission.templateId || templateSnapshot?.templateId || "",
    templateSnapshot,
    documentsChecklist: Array.isArray(submission.documentsChecklist)
      ? submission.documentsChecklist
      : [],
    productSampleAnswers: submission.productSampleAnswers || {},
  };
}

function buildDefaultSampleAnswers(template, previous = {}) {
  const next = {};

  if (!template) {
    return next;
  }

  for (const item of template.productSample) {
    next[item.code] = previous[item.code] || "";
  }

  return next;
}

function toStatusLabel(status) {
  if (!status) {
    return "";
  }

  return status
    .split("_")
    .map((part) => part.charAt(0) + part.slice(1).toLowerCase())
    .join(" ");
}

function formatDate(isoString) {
  if (!isoString) {
    return "";
  }

  const date = new Date(isoString);
  if (Number.isNaN(date.getTime())) {
    return isoString;
  }

  return date.toLocaleString();
}

function escapeHtml(value) {
  return `${value || ""}`
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function buildPrintHtml(template, submission) {
  const docsRows = template.documentsRequired
    .map((item) => {
      const entry =
        submission.documentsChecklist.find((doc) => doc.code === item.code) ||
        ({ status: "PENDING", remark: "" });

      return `
        <tr>
          <td>${item.serialNumber}</td>
          <td>${escapeHtml(item.label)}</td>
          <td>${entry.status === "YES" ? "X" : ""}</td>
          <td>${entry.status === "NO" ? "X" : ""}</td>
          <td>${escapeHtml(entry.remark || "")}</td>
        </tr>
      `;
    })
    .join("");

  const productRows = template.productSample
    .map((item) => {
      const value = submission.productSampleAnswers[item.code] || "";
      return `
        <tr>
          <td>${item.serialNumber}</td>
          <td>${escapeHtml(item.label)}</td>
          <td></td>
          <td></td>
          <td>${escapeHtml(value)}</td>
        </tr>
      `;
    })
    .join("");

  return `
    <!doctype html>
    <html>
      <head>
        <meta charset="UTF-8" />
        <title>${escapeHtml(submission.trackingNumber)}</title>
        <style>
          * { box-sizing: border-box; }
          body { margin: 0; font-family: "Times New Roman", serif; color: #111; }
          .page { width: 210mm; min-height: 297mm; margin: 0 auto; padding: 12mm 10mm; }
          table { width: 100%; border-collapse: collapse; }
          th, td { border: 1px solid #1a1a1a; padding: 6px 8px; font-size: 12px; vertical-align: top; }
          .header-cell { font-weight: 700; }
          .directorate { text-align: center; margin: 10px 0 12px; font-size: 20px; font-weight: 600; }
          .section-row td { font-weight: 700; font-size: 13px; }
          .fields-row td { font-weight: 700; }
          .meta { margin-top: 10px; font-size: 11px; }
          @media print {
            .page { margin: 0; padding: 10mm 8mm; }
          }
        </style>
      </head>
      <body>
        <div class="page">
          <table>
            <tr>
              <td class="header-cell" style="width:20%">${escapeHtml(template.annexure)}</td>
              <td class="header-cell" style="width:23%">SOP Ref.No.: ${escapeHtml(template.sopRef)}</td>
              <td class="header-cell">${escapeHtml(template.title)}</td>
            </tr>
          </table>

          <div class="directorate">${escapeHtml(template.directorate)}</div>

          <table>
            <thead>
              <tr>
                <th style="width:7%">S/N</th>
                <th style="width:54%">DESCRIPTION</th>
                <th style="width:10%">YES</th>
                <th style="width:10%">NO</th>
                <th style="width:19%">REMARK</th>
              </tr>
            </thead>
            <tbody>
              <tr class="fields-row">
                <td></td>
                <td>NAME OF APPLICANT</td>
                <td></td>
                <td></td>
                <td>${escapeHtml(submission.applicantName)}</td>
              </tr>
              <tr class="fields-row">
                <td></td>
                <td>APPLICANT PHONE NUMBER</td>
                <td></td>
                <td></td>
                <td>${escapeHtml(submission.applicantPhone || "")}</td>
              </tr>
              <tr class="fields-row">
                <td></td>
                <td>NAME OF PRODUCT</td>
                <td></td>
                <td></td>
                <td>${escapeHtml(submission.productName)}</td>
              </tr>
              <tr class="section-row">
                <td></td>
                <td colspan="4">DOCUMENTS REQUIRED</td>
              </tr>
              ${docsRows}
              <tr class="section-row">
                <td></td>
                <td colspan="4">PRODUCT SAMPLE</td>
              </tr>
              ${productRows}
            </tbody>
          </table>

          <div class="meta">
            <div><strong>Tracking No:</strong> ${escapeHtml(submission.trackingNumber)}</div>
            <div><strong>Status:</strong> ${escapeHtml(toStatusLabel(submission.status))}</div>
            <div><strong>Received By:</strong> ${escapeHtml(submission.reviewedBy || "")}</div>
            <div><strong>Exported At:</strong> ${escapeHtml(formatDate(new Date().toISOString()))}</div>
          </div>
        </div>
      </body>
    </html>
  `;
}

function openPrintWindow(template, submission) {
  const printWindow = window.open("", "_blank", "width=980,height=760");
  if (!printWindow) {
    window.alert("Popup blocked. Allow popups to print/export this form.");
    return;
  }

  printWindow.document.open();
  printWindow.document.write(buildPrintHtml(template, submission));
  printWindow.document.close();
  printWindow.focus();
  printWindow.print();
}

function isAuthErrorMessage(message) {
  return /(auth|token|unauthori)/i.test(`${message || ""}`);
}

export default function App() {
  const isAdminRoute = normalizePath(window.location.pathname) === ADMIN_ROUTE;

  const [templates, setTemplates] = useState([]);
  const [validStatuses, setValidStatuses] = useState(DEFAULT_STATUSES);
  const [validChecklistValues, setValidChecklistValues] = useState(DEFAULT_CHECK_VALUES);
  const [selectedTemplateId, setSelectedTemplateId] = useState("");

  const [applicantName, setApplicantName] = useState("");
  const [applicantPhone, setApplicantPhone] = useState("");
  const [productName, setProductName] = useState("");
  const [samplingGuideProducts, setSamplingGuideProducts] = useState([]);
  const [samplingProductType, setSamplingProductType] = useState("");
  const [samplingRiskLevel, setSamplingRiskLevel] = useState("HIGH");
  const [samplingSizeId, setSamplingSizeId] = useState("");
  const [samplingCustomSize, setSamplingCustomSize] = useState("");
  const [productSampleAnswers, setProductSampleAnswers] = useState({});
  const [clientFeedback, setClientFeedback] = useState({ type: "", message: "" });

  const [adminToken, setAdminToken] = useState(
    () => window.localStorage.getItem(ADMIN_TOKEN_STORAGE_KEY) || ""
  );
  const [adminPassword, setAdminPassword] = useState("");
  const [adminAuthFeedback, setAdminAuthFeedback] = useState({ type: "", message: "" });

  const [adminTemplateFilter, setAdminTemplateFilter] = useState("");
  const [adminStatusFilter, setAdminStatusFilter] = useState("");
  const [submissions, setSubmissions] = useState([]);
  const [selectedSubmissionId, setSelectedSubmissionId] = useState("");
  const [selectedSubmission, setSelectedSubmission] = useState(null);
  const [adminFeedback, setAdminFeedback] = useState({ type: "", message: "" });
  const [isRefreshing, setIsRefreshing] = useState(false);

  const [adminReceivedBy, setAdminReceivedBy] = useState("");
  const [adminQuickStatus, setAdminQuickStatus] = useState("RECEIVED");
  const [adminRejectionReason, setAdminRejectionReason] = useState("");
  const [checklistDraft, setChecklistDraft] = useState({});

  const selectedTemplate = useMemo(
    () => templates.find((template) => template.id === selectedTemplateId) || null,
    [templates, selectedTemplateId]
  );

  const selectedSamplingGuideProduct = useMemo(
    () =>
      samplingGuideProducts.find((product) => product.productType === samplingProductType) || null,
    [samplingGuideProducts, samplingProductType]
  );

  const shelfLifeAssessment = useMemo(
    () => getExpiryAssessment(productSampleAnswers),
    [productSampleAnswers]
  );

  const samplingQuantityAssessment = useMemo(() => {
    if (!samplingGuideProducts.length) {
      return {
        status: "pending",
        message: "Sampling guide is not available yet.",
        quantity: "",
      };
    }

    if (!selectedSamplingGuideProduct) {
      return {
        status: "pending",
        message: "Select a product type to calculate quantity.",
        quantity: "",
      };
    }

    if (!GUIDE_RISK_OPTIONS.some((item) => item.value === samplingRiskLevel)) {
      return {
        status: "pending",
        message: "Select a risk category.",
        quantity: "",
      };
    }

    const sourceLabel = samplingRiskLevel === "HIGH" ? "total quantity" : "retention quantity";

    if (samplingSizeId === GUIDE_CUSTOM_SIZE_VALUE) {
      const match = findCustomSizeFactorMatch(selectedSamplingGuideProduct, samplingCustomSize);

      if (match.error) {
        return {
          status: "error",
          message: match.error,
          quantity: "",
        };
      }

      const baseQuantity =
        samplingRiskLevel === "HIGH" ? match.referenceEntry.total : match.referenceEntry.retention;
      const scaledQuantity = Math.ceil(
        (baseQuantity * match.referenceComparable.value) / match.parsedCustom.value
      );

      return {
        status: "ok",
        message: `Calculated from "${match.referenceEntry.size}" using ${sourceLabel}.`,
        quantity: Math.max(1, scaledQuantity),
      };
    }

    const sizeEntry = selectedSamplingGuideProduct.sizes.find((size) => size.id === samplingSizeId);
    if (!sizeEntry) {
      return {
        status: "pending",
        message: "Select a size from the guide.",
        quantity: "",
      };
    }

    return {
      status: "ok",
      message: `Using ${sourceLabel} for "${sizeEntry.size}".`,
      quantity: samplingRiskLevel === "HIGH" ? sizeEntry.total : sizeEntry.retention,
    };
  }, [
    selectedSamplingGuideProduct,
    samplingCustomSize,
    samplingGuideProducts,
    samplingRiskLevel,
    samplingSizeId,
  ]);

  useEffect(() => {
    let ignore = false;

    async function bootstrap() {
      try {
        const response = await apiRequest("/templates");
        if (ignore) {
          return;
        }

        const normalizedTemplates = Array.isArray(response.templates)
          ? response.templates.map(normalizeTemplate).filter(Boolean)
          : [];

        setTemplates(normalizedTemplates);
        setValidStatuses(
          Array.isArray(response.validStatuses) && response.validStatuses.length
            ? response.validStatuses
            : DEFAULT_STATUSES
        );
        setValidChecklistValues(
          Array.isArray(response.validChecklistValues) && response.validChecklistValues.length
            ? response.validChecklistValues
            : DEFAULT_CHECK_VALUES
        );
        setSamplingGuideProducts(normalizeSamplingGuide(response.samplingGuide));

        if (!normalizedTemplates.length) {
          setClientFeedback({ type: "error", message: "No templates available." });
          return;
        }

        setSelectedTemplateId((current) => current || normalizedTemplates[0].id);
      } catch (error) {
        if (!ignore) {
          setClientFeedback({ type: "error", message: error.message });
        }
      }
    }

    void bootstrap();

    return () => {
      ignore = true;
    };
  }, []);

  useEffect(() => {
    setProductSampleAnswers((current) => buildDefaultSampleAnswers(selectedTemplate, current));
  }, [selectedTemplate]);

  useEffect(() => {
    if (!samplingGuideProducts.length) {
      setSamplingProductType("");
      setSamplingSizeId("");
      setSamplingCustomSize("");
      return;
    }

    setSamplingProductType((current) => {
      if (samplingGuideProducts.some((product) => product.productType === current)) {
        return current;
      }

      return samplingGuideProducts[0].productType;
    });
  }, [samplingGuideProducts]);

  useEffect(() => {
    if (!selectedSamplingGuideProduct) {
      setSamplingSizeId("");
      setSamplingCustomSize("");
      return;
    }

    setSamplingSizeId((current) => {
      if (
        current !== GUIDE_CUSTOM_SIZE_VALUE &&
        selectedSamplingGuideProduct.sizes.some((size) => size.id === current)
      ) {
        return current;
      }

      return selectedSamplingGuideProduct.sizes[0]?.id || "";
    });
    setSamplingCustomSize("");
  }, [selectedSamplingGuideProduct]);

  useEffect(() => {
    setProductSampleAnswers((current) => {
      if (!Object.prototype.hasOwnProperty.call(current, AUTO_QUANTITY_FIELD_CODE)) {
        return current;
      }

      const nextValue =
        samplingQuantityAssessment.status === "ok" ? `${samplingQuantityAssessment.quantity}` : "";

      if (`${current[AUTO_QUANTITY_FIELD_CODE] || ""}` === nextValue) {
        return current;
      }

      return {
        ...current,
        [AUTO_QUANTITY_FIELD_CODE]: nextValue,
      };
    });
  }, [samplingQuantityAssessment.quantity, samplingQuantityAssessment.status]);

  useEffect(() => {
    if (!selectedSubmission) {
      setChecklistDraft({});
      setAdminReceivedBy("");
      setAdminQuickStatus("RECEIVED");
      setAdminRejectionReason("");
      return;
    }

    const nextDraft = {};
    for (const item of selectedSubmission.documentsChecklist) {
      nextDraft[item.code] = {
        status: item.status || "PENDING",
        remark: item.remark || "",
      };
    }

    setChecklistDraft(nextDraft);
    setAdminReceivedBy(selectedSubmission.reviewedBy || "");
    setAdminQuickStatus(
      DEFAULT_STATUSES.includes(selectedSubmission.status) ? selectedSubmission.status : "RECEIVED"
    );
    setAdminRejectionReason(selectedSubmission.decisionRemark || "");
  }, [selectedSubmission]);

  useEffect(() => {
    if (!isAdminRoute || !adminToken) {
      return;
    }

    void refreshSubmissions(selectedSubmissionId);
  }, [isAdminRoute, adminToken, adminTemplateFilter, adminStatusFilter]);

  function clearAdminSession(message = "") {
    window.localStorage.removeItem(ADMIN_TOKEN_STORAGE_KEY);
    setAdminToken("");
    setSubmissions([]);
    setSelectedSubmissionId("");
    setSelectedSubmission(null);
    setAdminReceivedBy("");
    setAdminQuickStatus("RECEIVED");
    setAdminRejectionReason("");
    setChecklistDraft({});

    if (message) {
      setAdminAuthFeedback({ type: "error", message });
    }
  }

  async function adminApiRequest(path, options = {}) {
    if (!adminToken) {
      throw new Error("Admin session is not active.");
    }

    try {
      return await apiRequest(path, {
        ...options,
        headers: {
          ...(options.headers || {}),
          Authorization: `Bearer ${adminToken}`,
        },
      });
    } catch (error) {
      if (isAuthErrorMessage(error.message)) {
        clearAdminSession("Session expired. Please sign in again.");
      }
      throw error;
    }
  }

  async function refreshSubmissions(preferredSelectionId = selectedSubmissionId) {
    if (!adminToken) {
      return;
    }

    try {
      setIsRefreshing(true);

      const params = new URLSearchParams();
      if (adminTemplateFilter) {
        params.set("templateId", adminTemplateFilter);
      }
      if (adminStatusFilter) {
        params.set("status", adminStatusFilter);
      }

      const path = params.toString() ? `/submissions?${params.toString()}` : "/submissions";
      const response = await adminApiRequest(path);
      const rows = Array.isArray(response.submissions)
        ? response.submissions.map(normalizeSubmission).filter(Boolean)
        : [];

      setSubmissions(rows);

      if (preferredSelectionId && rows.some((row) => row.id === preferredSelectionId)) {
        await loadSubmissionDetail(preferredSelectionId);
      } else {
        setSelectedSubmissionId("");
        setSelectedSubmission(null);
      }
    } catch (error) {
      setAdminFeedback({ type: "error", message: error.message });
    } finally {
      setIsRefreshing(false);
    }
  }

  async function loadSubmissionDetail(id) {
    try {
      const response = await adminApiRequest(`/submissions/${id}`);
      const submission = normalizeSubmission(response.submission);
      setSelectedSubmissionId(submission?.id || "");
      setSelectedSubmission(submission);
    } catch (error) {
      setSelectedSubmission(null);
      setAdminFeedback({ type: "error", message: error.message });
    }
  }

  async function handleClientSubmit(event) {
    event.preventDefault();

    if (!selectedTemplate) {
      setClientFeedback({ type: "error", message: "Template not found." });
      return;
    }

    const payloadAnswers = {};
    for (const item of selectedTemplate.productSample) {
      payloadAnswers[item.code] = `${productSampleAnswers[item.code] || ""}`.trim();
    }

    const submissionShelfLifeAssessment = getExpiryAssessment(payloadAnswers);
    if (submissionShelfLifeAssessment.status !== "ok") {
      setClientFeedback({ type: "error", message: submissionShelfLifeAssessment.message });
      return;
    }

    if (samplingQuantityAssessment.status !== "ok") {
      setClientFeedback({
        type: "error",
        message:
          samplingQuantityAssessment.message ||
          "Complete risk categorization to calculate quantity to be submitted.",
      });
      return;
    }

    const payload = {
      templateId: selectedTemplate.templateId || selectedTemplate.id,
      applicantName: applicantName.trim(),
      applicantPhone: applicantPhone.trim(),
      productName: productName.trim(),
      productSampleAnswers: payloadAnswers,
    };

    try {
      setClientFeedback({ type: "", message: "Submitting form..." });
      const response = await apiRequest("/submissions", {
        method: "POST",
        body: JSON.stringify(payload),
      });

      setClientFeedback({
        type: "ok",
        message: `Submitted successfully. Tracking ID: ${response.submission.trackingNumber}`,
      });
      setApplicantName("");
      setApplicantPhone("");
      setProductName("");
      setProductSampleAnswers(buildDefaultSampleAnswers(selectedTemplate));
    } catch (error) {
      setClientFeedback({ type: "error", message: error.message });
    }
  }

  function handleSampleAnswerChange(code, value) {
    setProductSampleAnswers((current) => ({
      ...current,
      [code]: value,
    }));
  }

  async function handleAdminLogin(event) {
    event.preventDefault();

    const password = adminPassword.trim();
    if (!password) {
      setAdminAuthFeedback({ type: "error", message: "Admin password is required." });
      return;
    }

    try {
      setAdminAuthFeedback({ type: "", message: "Signing in..." });
      const response = await apiRequest("/admin/login", {
        method: "POST",
        body: JSON.stringify({ password }),
      });

      if (!response.token) {
        throw new Error("Admin login response did not include a token");
      }

      window.localStorage.setItem(ADMIN_TOKEN_STORAGE_KEY, response.token);
      setAdminToken(response.token);
      setAdminPassword("");
      setAdminAuthFeedback({ type: "ok", message: "Signed in." });
      setAdminFeedback({ type: "", message: "" });
      await refreshSubmissions("");
    } catch (error) {
      setAdminAuthFeedback({ type: "error", message: error.message });
    }
  }

  function handleAdminLogout() {
    clearAdminSession();
    setAdminAuthFeedback({ type: "", message: "" });
  }

  async function handleChecklistSave() {
    if (!selectedSubmission || !selectedSubmission.templateSnapshot) {
      return;
    }

    const normalizedStatus = DEFAULT_STATUSES.includes(adminQuickStatus)
      ? adminQuickStatus
      : "RECEIVED";
    const rejectionReason = adminRejectionReason.trim();

    if (normalizedStatus === "REJECTED" && !rejectionReason) {
      setAdminFeedback({
        type: "error",
        message: "Rejection reason is required when status is Rejected.",
      });
      return;
    }

    const checklist = selectedSubmission.templateSnapshot.documentsRequired.map((item) => ({
      code: item.code,
      status: checklistDraft[item.code]?.status || "PENDING",
      remark: `${checklistDraft[item.code]?.remark || ""}`.trim(),
    }));

    try {
      setAdminFeedback({ type: "", message: "Saving checklist..." });
      await adminApiRequest(`/submissions/${selectedSubmission.id}/documents`, {
        method: "PATCH",
        body: JSON.stringify({
          checklist,
          reviewedBy: adminReceivedBy.trim(),
          status: normalizedStatus,
          decisionRemark: normalizedStatus === "REJECTED" ? rejectionReason : "",
        }),
      });

      setAdminFeedback({ type: "ok", message: "Checklist saved." });
      await refreshSubmissions(selectedSubmission.id);
    } catch (error) {
      setAdminFeedback({ type: "error", message: error.message });
    }
  }

  async function handlePrintExport() {
    if (!selectedSubmission) {
      return;
    }

    try {
      const response = await adminApiRequest(`/submissions/${selectedSubmission.id}/export`);
      const template = normalizeTemplate(response.template);
      const submission = normalizeSubmission(response.submission);

      if (!template || !submission) {
        throw new Error("Invalid export payload");
      }

      openPrintWindow(template, submission);
    } catch (error) {
      setAdminFeedback({ type: "error", message: error.message });
    }
  }

  async function handleExportAllExcel() {
    if (!adminToken) {
      setAdminFeedback({ type: "error", message: "Admin session is not active." });
      return;
    }

    try {
      setAdminFeedback({ type: "", message: "Preparing Excel export..." });

      const response = await fetch(`${API_BASE_URL}/submissions/export/all.xlsx`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${adminToken}`,
        },
      });

      if (!response.ok) {
        let errorMessage = `Export failed (${response.status})`;

        try {
          const payload = await response.json();
          if (payload?.error) {
            errorMessage = payload.error;
          }
        } catch (error) {
          errorMessage = `Export failed (${response.status})`;
        }

        if (response.status === 401) {
          clearAdminSession("Session expired. Please sign in again.");
        }

        throw new Error(errorMessage);
      }

      const blob = await response.blob();
      const disposition = response.headers.get("content-disposition") || "";
      const filenameMatch = disposition.match(/filename="?([^\"]+)"?/i);
      const filename = filenameMatch?.[1] || "samples-submissions.xlsx";

      const objectUrl = window.URL.createObjectURL(blob);
      const anchor = document.createElement("a");
      anchor.href = objectUrl;
      anchor.download = filename;
      document.body.appendChild(anchor);
      anchor.click();
      anchor.remove();
      window.URL.revokeObjectURL(objectUrl);

      setAdminFeedback({ type: "ok", message: "Excel export downloaded." });
    } catch (error) {
      setAdminFeedback({ type: "error", message: error.message });
    }
  }

  function renderPublicContent() {
    return (
      <section className="mode-panel">
        <div className="panel-card">
          <div className="panel-head">
            <h2>Client Submission</h2>
            <label className="inline-label" htmlFor="template-select">
              Form Type
              <select
                id="template-select"
                value={selectedTemplateId}
                onChange={(event) => setSelectedTemplateId(event.target.value)}
              >
                {templates.map((template) => (
                  <option key={template.id} value={template.id}>
                    {getTemplateDisplayName(template)}
                  </option>
                ))}
              </select>
            </label>
          </div>

          <div className="notice-banner" role="note">
            <strong>Submission Notice:</strong> Dossiers must be submitted in flash, not CD.
          </div>

          {selectedTemplate ? (
            <>
              <div className="template-preview">
                <p>
                  <strong>{selectedTemplate.annexure}</strong>
                </p>
                <p>
                  <strong>SOP Ref.No.:</strong> {selectedTemplate.sopRef}
                </p>
                <p>
                  <strong>Title:</strong> {selectedTemplate.title}
                </p>
                <p>
                  <strong>Directorate:</strong> {selectedTemplate.directorate}
                </p>
              </div>

              <form className="form-grid" onSubmit={handleClientSubmit}>
                <label>
                  Name of Applicant
                  <input
                    name="applicantName"
                    type="text"
                    required
                    value={applicantName}
                    onChange={(event) => setApplicantName(event.target.value)}
                  />
                </label>
                <label>
                  Name of Product
                  <input
                    name="productName"
                    type="text"
                    required
                    value={productName}
                    onChange={(event) => setProductName(event.target.value)}
                  />
                </label>
                <label>
                  Applicant Phone Number
                  <input
                    name="applicantPhone"
                    type="tel"
                    inputMode="tel"
                    required
                    placeholder="+234..."
                    value={applicantPhone}
                    onChange={(event) => setApplicantPhone(event.target.value)}
                  />
                </label>

                <section className="checklist-block sampling-guide-block">
                  <h3>Risk Categorization</h3>
                  <p className="muted-text">
                    Select product type, risk level, and size to auto-calculate quantity to be
                    submitted.
                  </p>

                  <div className="sampling-grid">
                    <label>
                      Product Type
                      <select
                        value={samplingProductType}
                        onChange={(event) => setSamplingProductType(event.target.value)}
                        disabled={!samplingGuideProducts.length}
                      >
                        {samplingGuideProducts.length ? null : <option value="">No options</option>}
                        {samplingGuideProducts.map((product) => (
                          <option key={product.productType} value={product.productType}>
                            {product.productType}
                          </option>
                        ))}
                      </select>
                    </label>

                    <label>
                      Risk Category
                      <select
                        value={samplingRiskLevel}
                        onChange={(event) => setSamplingRiskLevel(event.target.value)}
                      >
                        {GUIDE_RISK_OPTIONS.map((option) => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </select>
                    </label>

                    <label>
                      Pack / Size
                      <select
                        value={samplingSizeId}
                        onChange={(event) => setSamplingSizeId(event.target.value)}
                        disabled={!selectedSamplingGuideProduct}
                      >
                        {(selectedSamplingGuideProduct?.sizes || []).map((size) => (
                          <option key={size.id} value={size.id}>
                            {size.size}
                          </option>
                        ))}
                        {selectedSamplingGuideProduct ? (
                          <option value={GUIDE_CUSTOM_SIZE_VALUE}>Custom size (not listed)</option>
                        ) : null}
                      </select>
                    </label>
                  </div>

                  {samplingSizeId === GUIDE_CUSTOM_SIZE_VALUE ? (
                    <label className="sampling-custom-input">
                      Custom Size
                      <input
                        type="text"
                        value={samplingCustomSize}
                        onChange={(event) => setSamplingCustomSize(event.target.value)}
                        placeholder='Example: "1 x 20 tabs" or "20 ml"'
                        required
                      />
                    </label>
                  ) : null}

                  <div
                    className={`sampling-result sampling-${samplingQuantityAssessment.status}`}
                    aria-live="polite"
                  >
                    <p>
                      <strong>Quantity to Submit:</strong>{" "}
                      {samplingQuantityAssessment.quantity
                        ? samplingQuantityAssessment.quantity
                        : "Not calculated yet"}
                    </p>
                    <p>{samplingQuantityAssessment.message}</p>
                  </div>
                </section>

                <section className="checklist-block">
                  <h3>Documents Required (Admin Checklist)</h3>
                  <p className="muted-text">
                    Clients do not fill this section. Admin verifies after submission.
                  </p>
                  <div className="table-scroll">
                    <table className="data-table">
                      <thead>
                        <tr>
                          <th style={{ width: "70px" }}>S/N</th>
                          <th>Description</th>
                          <th style={{ width: "140px" }}>Owner</th>
                        </tr>
                      </thead>
                      <tbody>
                        {selectedTemplate.documentsRequired.map((item) => (
                          <tr key={item.code}>
                            <td>{item.serialNumber}</td>
                            <td>{item.label}</td>
                            <td>Admin Only</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <div className="data-table-mobile">
                    {selectedTemplate.documentsRequired.map((item) => (
                      <div key={item.code} className="mobile-table-card">
                        <div className="mobile-table-row">
                          <div>
                            <div className="mobile-table-label">S/N</div>
                            <div className="mobile-table-value">{item.serialNumber}</div>
                          </div>
                        </div>
                        <div className="mobile-table-row">
                          <div>
                            <div className="mobile-table-label">Description</div>
                            <div className="mobile-table-value">{item.label}</div>
                          </div>
                        </div>
                        <div className="mobile-table-row">
                          <div>
                            <div className="mobile-table-label">Owner</div>
                            <div className="mobile-table-value">Admin Only</div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                <section className="checklist-block">
                  <h3>Product Sample (Client Section)</h3>
                  <div className="table-scroll">
                    <table className="data-table">
                      <thead>
                        <tr>
                          <th style={{ width: "70px" }}>S/N</th>
                          <th>Description</th>
                          <th style={{ width: "300px" }}>Client Input</th>
                        </tr>
                      </thead>
                      <tbody>
                        {selectedTemplate.productSample.map((item) => (
                          <tr key={item.code}>
                          <td>{item.serialNumber}</td>
                          <td>{item.label}</td>
                          <td>
                            {item.code === AUTO_QUANTITY_FIELD_CODE ? (
                              <div className="auto-quantity-field">
                                <input
                                  required={Boolean(item.required)}
                                  type="number"
                                  min="1"
                                  readOnly
                                  value={productSampleAnswers[item.code] || ""}
                                />
                                <span className="field-hint">
                                  Auto-calculated from Risk Categorization.
                                </span>
                              </div>
                            ) : item.inputType === "textarea" ? (
                              <textarea
                                required={Boolean(item.required)}
                                value={productSampleAnswers[item.code] || ""}
                                onChange={(event) =>
                                  handleSampleAnswerChange(item.code, event.target.value)
                                  }
                                />
                              ) : (
                                <input
                                  required={Boolean(item.required)}
                                  type={item.inputType === "number" ? "number" : item.inputType || "text"}
                                  value={productSampleAnswers[item.code] || ""}
                                  onChange={(event) =>
                                    handleSampleAnswerChange(item.code, event.target.value)
                                  }
                                />
                              )}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <div className="data-table-mobile">
                    {selectedTemplate.productSample.map((item) => (
                      <div key={item.code} className="mobile-table-card">
                        <div className="mobile-table-row">
                          <div>
                            <div className="mobile-table-label">S/N</div>
                            <div className="mobile-table-value">{item.serialNumber}</div>
                          </div>
                        </div>
                        <div className="mobile-table-row">
                          <div>
                            <div className="mobile-table-label">Description</div>
                            <div className="mobile-table-value">{item.label}</div>
                          </div>
                        </div>
                        <div className="mobile-table-row">
                          <div>
                            <div className="mobile-table-label">Client Input</div>
                            <div className="mobile-table-value">
                              {item.code === AUTO_QUANTITY_FIELD_CODE ? (
                                <div className="auto-quantity-field">
                                  <input
                                    required={Boolean(item.required)}
                                    type="number"
                                    min="1"
                                    readOnly
                                    value={productSampleAnswers[item.code] || ""}
                                  />
                                  <span className="field-hint">
                                    Auto-calculated from Risk Categorization.
                                  </span>
                                </div>
                              ) : item.inputType === "textarea" ? (
                                <textarea
                                  required={Boolean(item.required)}
                                  value={productSampleAnswers[item.code] || ""}
                                  onChange={(event) =>
                                    handleSampleAnswerChange(item.code, event.target.value)
                                  }
                                />
                              ) : (
                                <input
                                  required={Boolean(item.required)}
                                  type={item.inputType === "number" ? "number" : item.inputType || "text"}
                                  value={productSampleAnswers[item.code] || ""}
                                  onChange={(event) =>
                                    handleSampleAnswerChange(item.code, event.target.value)
                                  }
                                />
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div
                    className={`expiry-calculation expiry-${shelfLifeAssessment.status}`}
                    aria-live="polite"
                  >
                    <p>
                      <strong>Expiry Check:</strong> {shelfLifeAssessment.message}
                    </p>
                    {shelfLifeAssessment.remainingLabel ? (
                      <p>
                        <strong>Time Remaining:</strong> {shelfLifeAssessment.remainingLabel}
                      </p>
                    ) : null}
                  </div>
                </section>

                <button className="primary-button" type="submit">
                  Submit Sample Form
                </button>
                <p className={`feedback ${clientFeedback.type || ""}`.trim()} aria-live="polite">
                  {clientFeedback.message}
                </p>
              </form>
            </>
          ) : (
            <div className="empty-state">No templates available.</div>
          )}
        </div>
      </section>
    );
  }

  function renderAdminLogin() {
    return (
      <section className="mode-panel">
        <div className="panel-card admin-login-card">
          <div className="panel-head">
            <h2>Admin Sign In</h2>
          </div>

          <p className="muted-text">
            This is a private admin URL. Enter admin password to access submissions and exports.
          </p>

          <form className="admin-login-form" onSubmit={handleAdminLogin}>
            <label>
              Admin Password
              <input
                type="password"
                value={adminPassword}
                onChange={(event) => setAdminPassword(event.target.value)}
                autoComplete="current-password"
                required
              />
            </label>
            <button className="primary-button" type="submit">
              Sign In
            </button>
            <p className={`feedback ${adminAuthFeedback.type || ""}`.trim()} aria-live="polite">
              {adminAuthFeedback.message}
            </p>
          </form>
        </div>
      </section>
    );
  }

  function renderAdminConsole() {
    return (
      <section className="mode-panel">
        <div className="panel-card admin-console-card">
          <div className="panel-head admin-head">
            <h2>Admin Review Console</h2>
            <div className="admin-toolbar">
              <button className="secondary-button" type="button" onClick={handleExportAllExcel}>
                Export All (Excel)
              </button>
              <button className="ghost-button" type="button" onClick={handleAdminLogout}>
                Sign Out
              </button>
            </div>
          </div>
          <p className="admin-subtitle">
            Review incoming submissions, complete checklists, and mark each as Received or Rejected.
          </p>

          <div className="admin-filters">
            <label>
              Template
              <select
                value={adminTemplateFilter}
                onChange={(event) => setAdminTemplateFilter(event.target.value)}
              >
                <option value="">All</option>
                {templates.map((template) => (
                  <option key={template.id} value={template.templateId || template.id}>
                    {getTemplateDisplayName(template)}
                  </option>
                ))}
              </select>
            </label>
            <label>
              Status
              <select
                value={adminStatusFilter}
                onChange={(event) => setAdminStatusFilter(event.target.value)}
              >
                <option value="">All</option>
                {validStatuses.map((status) => (
                  <option key={status} value={status}>
                    {toStatusLabel(status)}
                  </option>
                ))}
              </select>
            </label>
            <button
              className="secondary-button"
              type="button"
              onClick={() => refreshSubmissions(selectedSubmissionId)}
            >
              {isRefreshing ? "Refreshing..." : "Refresh"}
            </button>
          </div>

          <p className={`feedback ${adminFeedback.type || ""}`.trim()} aria-live="polite">
            {adminFeedback.message}
          </p>

          <div className="admin-layout">
            <aside>
              <h3>Submissions</h3>
              <ul className="submission-list">
                {submissions.length ? (
                  submissions.map((submission) => {
                    const statusClass = `status-pill status-${(submission.status || "").toLowerCase()}`;
                    const isActive = submission.id === selectedSubmissionId;

                    return (
                      <li key={submission.id}>
                        <button
                          className={`submission-button ${isActive ? "is-active" : ""}`.trim()}
                          type="button"
                          onClick={() => loadSubmissionDetail(submission.id)}
                        >
                          <h4>{submission.trackingNumber}</h4>
                          <p>
                            {submission.applicantName} • {submission.productName}
                          </p>
                          <p>Phone: {submission.applicantPhone || "Not provided"}</p>
                          <p>
                            {formatDate(submission.createdAt)} •{" "}
                            <span className={statusClass}>{toStatusLabel(submission.status)}</span>
                          </p>
                        </button>
                      </li>
                    );
                  })
                ) : (
                  <li>
                    <div className="empty-state empty-state-admin">
                      <h4>No submissions found</h4>
                      <p>No client entries match the current filters.</p>
                      <p>Set Template and Status to "All", then click Refresh.</p>
                    </div>
                  </li>
                )}
              </ul>
            </aside>

            <section>
              {!selectedSubmission ? (
                <div className="empty-state empty-state-admin empty-state-admin-detail">
                  <h4>Pick a submission to start review</h4>
                  {submissions.length ? (
                    <p>Select any tracking number from the list to open the checklist and decision form.</p>
                  ) : (
                    <p>The review panel will populate after a client submits a form.</p>
                  )}
                  <p>Use Export All (Excel) any time you need a full register download.</p>
                </div>
              ) : (
                <div className="admin-detail">
                  <div className="template-preview">
                    <p>
                      <strong>{selectedSubmission.templateSnapshot?.annexure}</strong>
                    </p>
                    <p>
                      <strong>SOP Ref.No.:</strong> {selectedSubmission.templateSnapshot?.sopRef}
                    </p>
                    <p>
                      <strong>Title:</strong> {selectedSubmission.templateSnapshot?.title}
                    </p>
                    <p>
                      <strong>Status:</strong>{" "}
                      <span
                        className={`status-pill status-${(selectedSubmission.status || "").toLowerCase()}`}
                      >
                        {toStatusLabel(selectedSubmission.status)}
                      </span>
                    </p>
                  </div>

                  <div className="summary-grid">
                    <div>
                      <strong>Tracking Number</strong>
                      <span>{selectedSubmission.trackingNumber}</span>
                    </div>
                    <div>
                      <strong>Created</strong>
                      <span>{formatDate(selectedSubmission.createdAt)}</span>
                    </div>
                    <div>
                      <strong>Name of Applicant</strong>
                      <span>{selectedSubmission.applicantName}</span>
                    </div>
                    <div>
                      <strong>Applicant Phone Number</strong>
                      <span>{selectedSubmission.applicantPhone || "Not provided"}</span>
                    </div>
                    <div>
                      <strong>Name of Product</strong>
                      <span>{selectedSubmission.productName}</span>
                    </div>
                  </div>

                  <section className="checklist-block">
                    <h3>Product Sample (Client Filled)</h3>
                    <div className="table-scroll">
                      <table className="data-table">
                        <thead>
                          <tr>
                            <th style={{ width: "70px" }}>S/N</th>
                            <th>Description</th>
                            <th style={{ width: "280px" }}>Client Value</th>
                          </tr>
                        </thead>
                        <tbody>
                          {(selectedSubmission.templateSnapshot?.productSample || []).map((item) => (
                            <tr key={item.code}>
                              <td>{item.serialNumber}</td>
                              <td>{item.label}</td>
                              <td>{selectedSubmission.productSampleAnswers[item.code] || ""}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                    <div className="data-table-mobile">
                      {(selectedSubmission.templateSnapshot?.productSample || []).map((item) => (
                        <div key={item.code} className="mobile-table-card">
                          <div className="mobile-table-row">
                            <div>
                              <div className="mobile-table-label">S/N</div>
                              <div className="mobile-table-value">{item.serialNumber}</div>
                            </div>
                          </div>
                          <div className="mobile-table-row">
                            <div>
                              <div className="mobile-table-label">Description</div>
                              <div className="mobile-table-value">{item.label}</div>
                            </div>
                          </div>
                          <div className="mobile-table-row">
                            <div>
                              <div className="mobile-table-label">Client Value</div>
                              <div className="mobile-table-value">{selectedSubmission.productSampleAnswers[item.code] || ""}</div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </section>

                  <section className="checklist-block">
                    <h3>Documents Required (Admin Checklist)</h3>
                    <div className="table-scroll">
                      <table className="data-table">
                        <thead>
                          <tr>
                            <th style={{ width: "70px" }}>S/N</th>
                            <th>Description</th>
                            <th style={{ width: "150px" }}>YES / NO / PENDING</th>
                            <th style={{ width: "260px" }}>Remark</th>
                          </tr>
                        </thead>
                        <tbody>
                          {(selectedSubmission.templateSnapshot?.documentsRequired || []).map((item) => (
                            <tr key={item.code}>
                              <td>{item.serialNumber}</td>
                              <td>{item.label}</td>
                              <td>
                                <select
                                  value={checklistDraft[item.code]?.status || "PENDING"}
                                  onChange={(event) => {
                                    const status = event.target.value;
                                    setChecklistDraft((current) => ({
                                      ...current,
                                      [item.code]: {
                                        status,
                                        remark: current[item.code]?.remark || "",
                                      },
                                    }));
                                  }}
                                >
                                  {validChecklistValues.map((value) => (
                                    <option key={value} value={value}>
                                      {value}
                                    </option>
                                  ))}
                                </select>
                              </td>
                              <td>
                                <input
                                  type="text"
                                  value={checklistDraft[item.code]?.remark || ""}
                                  onChange={(event) => {
                                    const remark = event.target.value;
                                    setChecklistDraft((current) => ({
                                      ...current,
                                      [item.code]: {
                                        status: current[item.code]?.status || "PENDING",
                                        remark,
                                      },
                                    }));
                                  }}
                                />
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                    <div className="data-table-mobile">
                      {(selectedSubmission.templateSnapshot?.documentsRequired || []).map((item) => (
                        <div key={item.code} className="mobile-table-card">
                          <div className="mobile-table-row">
                            <div>
                              <div className="mobile-table-label">S/N</div>
                              <div className="mobile-table-value">{item.serialNumber}</div>
                            </div>
                          </div>
                          <div className="mobile-table-row">
                            <div>
                              <div className="mobile-table-label">Description</div>
                              <div className="mobile-table-value">{item.label}</div>
                            </div>
                          </div>
                          <div className="mobile-table-row">
                            <div>
                              <div className="mobile-table-label">YES / NO / PENDING</div>
                              <div className="mobile-table-value">
                                <select
                                  value={checklistDraft[item.code]?.status || "PENDING"}
                                  onChange={(event) => {
                                    const status = event.target.value;
                                    setChecklistDraft((current) => ({
                                      ...current,
                                      [item.code]: {
                                        status,
                                        remark: current[item.code]?.remark || "",
                                      },
                                    }));
                                  }}
                                >
                                  {validChecklistValues.map((value) => (
                                    <option key={value} value={value}>
                                      {value}
                                    </option>
                                  ))}
                                </select>
                              </div>
                            </div>
                          </div>
                          <div className="mobile-table-row">
                            <div>
                              <div className="mobile-table-label">Remark</div>
                              <div className="mobile-table-value">
                                <input
                                  type="text"
                                  value={checklistDraft[item.code]?.remark || ""}
                                  onChange={(event) => {
                                    const remark = event.target.value;
                                    setChecklistDraft((current) => ({
                                      ...current,
                                      [item.code]: {
                                        status: current[item.code]?.status || "PENDING",
                                        remark,
                                      },
                                    }));
                                  }}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </section>

                  <section className="checklist-block">
                    <h3>Submission Actions</h3>
                    <div className="action-row">
                      <label>
                        Received By
                        <input
                          type="text"
                          value={adminReceivedBy}
                          onChange={(event) => setAdminReceivedBy(event.target.value)}
                        />
                      </label>
                      <label>
                        Submission Status
                        <select
                          value={adminQuickStatus}
                          onChange={(event) => {
                            const status = event.target.value;
                            setAdminQuickStatus(status);
                            if (status !== "REJECTED") {
                              setAdminRejectionReason("");
                            }
                          }}
                        >
                          {validStatuses.map((status) => (
                            <option key={status} value={status}>
                              {toStatusLabel(status)}
                            </option>
                          ))}
                        </select>
                      </label>
                      {adminQuickStatus === "REJECTED" ? (
                        <label className="action-wide">
                          Rejection Reason
                          <input
                            type="text"
                            value={adminRejectionReason}
                            onChange={(event) => setAdminRejectionReason(event.target.value)}
                            placeholder="Enter reason for rejection"
                            required
                          />
                        </label>
                      ) : null}
                      <button className="primary-button" type="button" onClick={handleChecklistSave}>
                        Save Checklist
                      </button>
                      <button className="ghost-button" type="button" onClick={handlePrintExport}>
                        Print / Export PDF
                      </button>
                    </div>
                  </section>
                </div>
              )}
            </section>
          </div>
        </div>
      </section>
    );
  }

  return (
    <>
      <div className="background-shape background-shape-a" />
      <div className="background-shape background-shape-b" />

      <header className="app-header">
        <div className="app-brand">
          <img className="app-logo" src="/logo.png" alt="ProgrammoCeuticals logo" />
          <div>
            <h1>{isAdminRoute ? "Samples Admin" : "Samples"}</h1>
            <p>
              {isAdminRoute
                ? "Private admin portal for checklist review and exports"
                : "Digital checklist workflow for laboratory sample receiving"}
            </p>
          </div>
        </div>
        <div className="header-meta">
          <span className="pill">NAFDAC</span>
          <span className="pill pill-muted">DR&amp;RA Templates</span>
        </div>
      </header>

      <main className="app-main">{isAdminRoute ? (adminToken ? renderAdminConsole() : renderAdminLogin()) : renderPublicContent()}</main>
    </>
  );
}
