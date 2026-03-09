import React, { useEffect, useMemo, useRef, useState } from 'react';
import { NAFDAC_CEILING_LIST } from '../utils/nafdacCeilingList';
import { FIVE_PLUS_FIVE_PRODUCTS } from '../utils/fivePlusFivePolicy';
import { IMPORT_PROHIBITION_LIST } from '../utils/importProhibitionList';
import { FDC_REGULATORY_DIRECTIVE_LIST } from '../utils/fdcRegulatoryDirective';
import { getMatchedNTIDrugs, NTI_DRUG_LIST } from '../utils/narrowTherapeuticIndex';
import { loadAutoTableLibrary, loadJSPDFLibrary } from '../utils/lazyImports';
import './ProductChecker.css';

const SOURCE_LINKS = {
  ceiling: {
    label: 'NAFDAC Ceiling List',
    url: 'https://nafdac.gov.ng/wp-content/uploads/Files/Resources/Note_To_Industry_2024/Updated-NAFDAC-Ceiling-List.pdf',
  },
  prohibition: {
    label: 'Import Prohibition List',
    url: 'https://trade.gov.ng/en/custom-pages/prohibited-items-list-during-import',
  },
  fivePlusFive: {
    label: '5+5 Policy List',
    url: 'https://nafdac.gov.ng/wp-content/uploads/Files/Resources/Note_To_Industry_2024/PRODUCTS-FOR-55-VALIDITY-POLICY.pdf',
  },
  fdc: {
    label: 'Regulatory Directives',
    url: 'https://nafdac.gov.ng/regulatory-resources/regulatory-directive/',
  },
  nti: {
    label: 'NTI Reference List',
  },
};

const CHECK_STYLES = {
  pass: { label: 'CLEAR' },
  warn: { label: 'REVIEW' },
  fail: { label: 'FLAGGED' },
};

const DOSAGE_FORM_PATTERN =
  /\b(tablet|tablets|capsule|capsules|syrup|suspension|injection|cream|ointment|drops|solution|powder|gel|suppository|ampoule|vial|dosage|strength|mg|mcg|g|ml|iu|%|release)\b/i;
const INVALID_CHAR_PATTERN = /[^a-z0-9,\s+\-\/()]/i;
const COMBINATION_PATTERN = /(\+|\/|&|\bcombination\b|\bcontaining\b|\bfixed dose\b|\bwith\b)/i;
const INPUT_COMBINATION_PATTERN = /(\+|\/|&|\bwith\b|\bplus\b)/i;
const STOP_WORDS = new Set([
  'all',
  'and',
  'for',
  'forms',
  'list',
  'only',
  'dose',
  'fixed',
  'containing',
  'pharmaceutical',
  'products',
  'local',
  'manufacturing',
]);

const normalizeText = (value = '') => value.toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();

const tokenize = (value) =>
  normalizeText(value)
    .split(/\s+/)
    .filter((token) => token.length > 2 && !STOP_WORDS.has(token));

const parseGenericNames = (input) =>
  input
    .split(',')
    .map((item) => item.trim().toLowerCase())
    .filter(Boolean)
    .filter((item, index, list) => list.indexOf(item) === index);

const classifyMatchType = (entryText) => (COMBINATION_PATTERN.test(entryText) ? 'combination' : 'standalone');
const isCombinationInput = (value = '') => INPUT_COMBINATION_PATTERN.test(value);

const isEntryMatch = (entryText, genericName) => {
  const normalizedEntry = normalizeText(entryText);
  const normalizedGeneric = normalizeText(genericName);

  if (!normalizedEntry || !normalizedGeneric) {
    return false;
  }

  if (normalizedEntry.includes(normalizedGeneric) || normalizedGeneric.includes(normalizedEntry)) {
    return true;
  }

  const genericTokens = tokenize(genericName);
  const entryTokens = new Set(tokenize(entryText));

  if (genericTokens.length === 0) {
    return false;
  }

  const overlapCount = genericTokens.filter((token) => entryTokens.has(token)).length;
  if (genericTokens.length === 1) {
    return overlapCount >= 1;
  }

  return overlapCount >= Math.min(2, genericTokens.length);
};

const getMatchedByForEntry = (entryText, genericNames) => {
  const entryType = classifyMatchType(entryText);
  const matchedBy = genericNames.filter((genericName) => isEntryMatch(entryText, genericName));
  const explicitCombinationInput = genericNames.some((genericName) => isCombinationInput(genericName));

  // If checking a standalone product, suppress combination-only matches to avoid false positives.
  if (entryType === 'combination') {
    if (matchedBy.length >= 2) {
      return matchedBy;
    }

    if (matchedBy.length === 1 && genericNames.length === 1 && explicitCombinationInput) {
      return matchedBy;
    }

    return [];
  }

  return matchedBy;
};

const findMatches = (entries, getText, genericNames, getExtraFields = () => []) =>
  entries
    .map((entry) => {
      const entryText = getText(entry);
      const matchedBy = getMatchedByForEntry(entryText, genericNames);
      if (!matchedBy.length) {
        return null;
      }

      return {
        entryText,
        matchedBy,
        entryType: classifyMatchType(entryText),
        extraFields: getExtraFields(entry).filter(Boolean),
      };
    })
    .filter(Boolean);

const ProductChecker = () => {
  const [genericInput, setGenericInput] = useState('');
  const [results, setResults] = useState(null);
  const [validationError, setValidationError] = useState('');
  const [isChecking, setIsChecking] = useState(false);
  const [activeListId, setActiveListId] = useState(null);
  const [isNtiModalOpen, setIsNtiModalOpen] = useState(false);
  const [ntiPdfUrl, setNtiPdfUrl] = useState('');
  const [isNtiPdfLoading, setIsNtiPdfLoading] = useState(false);
  const [ntiPdfError, setNtiPdfError] = useState('');
  const listResultsSectionRef = useRef(null);
  const listResultBodyRef = useRef(null);

  const normalizedNtiList = useMemo(
    () =>
      NTI_DRUG_LIST.map((entry) => {
        if (typeof entry === 'string') {
          return entry;
        }

        if (entry?.name) {
          return entry.name;
        }

        if (entry?.activeIngredient) {
          return entry.activeIngredient;
        }

        return '';
      }).filter(Boolean),
    []
  );

  useEffect(() => {
    if (!isNtiModalOpen) {
      return undefined;
    }

    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsNtiModalOpen(false);
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [isNtiModalOpen]);

  useEffect(
    () => () => {
      if (ntiPdfUrl) {
        URL.revokeObjectURL(ntiPdfUrl);
      }
    },
    [ntiPdfUrl]
  );

  const generateNtiPdf = async () => {
    if (ntiPdfUrl || isNtiPdfLoading) {
      return;
    }

    setIsNtiPdfLoading(true);
    setNtiPdfError('');

    try {
      const [{ default: jsPDF }] = await Promise.all([loadJSPDFLibrary(), loadAutoTableLibrary()]);
      const doc = new jsPDF();

      doc.setFontSize(15);
      doc.setFont(undefined, 'bold');
      doc.text('NAFDAC Narrow Therapeutic Index (NTI) List', 14, 16);
      doc.setFontSize(10);
      doc.setFont(undefined, 'normal');
      doc.text(`Generated: ${new Date().toLocaleString()}`, 14, 23);

      doc.autoTable({
        startY: 30,
        head: [['#', 'Drug Name']],
        body: normalizedNtiList.map((item, index) => [index + 1, item]),
        styles: {
          fontSize: 9,
          cellPadding: 2.2,
          lineColor: [220, 220, 220],
          lineWidth: 0.4,
        },
        headStyles: {
          fillColor: [25, 52, 65],
          textColor: [255, 255, 255],
          fontStyle: 'bold',
          fontSize: 9,
        },
        columnStyles: {
          0: { cellWidth: 14, halign: 'right' },
          1: { cellWidth: 'auto' },
        },
        margin: { left: 14, right: 14 },
      });

      const nextUrl = URL.createObjectURL(doc.output('blob'));
      setNtiPdfUrl((previousUrl) => {
        if (previousUrl) {
          URL.revokeObjectURL(previousUrl);
        }
        return nextUrl;
      });
    } catch (error) {
      setNtiPdfError('Could not generate NTI PDF. Please try again.');
    } finally {
      setIsNtiPdfLoading(false);
    }
  };

  const openNtiModal = async () => {
    setIsNtiModalOpen(true);
    await generateNtiPdf();
  };

  const validateInput = (rawInput) => {
    const trimmedInput = rawInput.trim();
    if (!trimmedInput) {
      return { valid: false, error: 'Enter at least one generic name.' };
    }

    if (INVALID_CHAR_PATTERN.test(trimmedInput)) {
      return { valid: false, error: 'Use letters, numbers, commas, spaces, +, -, /, and parentheses only.' };
    }

    if (DOSAGE_FORM_PATTERN.test(trimmedInput)) {
      return { valid: false, error: 'Only generic names are allowed. Remove dosage form or strength terms.' };
    }

    const genericNames = parseGenericNames(trimmedInput);
    if (!genericNames.length) {
      return { valid: false, error: 'No valid generic names detected.' };
    }

    return { valid: true, genericNames };
  };

  const checkProduct = async () => {
    const validation = validateInput(genericInput);
    if (!validation.valid) {
      setValidationError(validation.error);
      setResults(null);
      return;
    }

    const genericNames = validation.genericNames;
    setValidationError('');
    setIsChecking(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 250));

      const ceilingMatches = findMatches(
        NAFDAC_CEILING_LIST,
        (entry) => entry.activeIngredient,
        genericNames,
        (entry) => [
          entry.strength ? `Strength: ${entry.strength}` : null,
          entry.dosageForm ? `Dosage form: ${entry.dosageForm}` : null,
        ]
      );

      const importProhibitionMatches = findMatches(
        IMPORT_PROHIBITION_LIST,
        (entry) => entry.item,
        genericNames,
        (entry) => [
          entry.category ? `Category: ${entry.category}` : null,
          entry.hsCode ? `HS code: ${entry.hsCode}` : null,
        ]
      );

      const fivePlusFiveMatches = findMatches(
        FIVE_PLUS_FIVE_PRODUCTS,
        (entry) => entry.activeIngredient,
        genericNames,
        (entry) => [entry.dosageForm ? `Policy dosage form: ${entry.dosageForm}` : null]
      );

      const fdcMatches = findMatches(
        FDC_REGULATORY_DIRECTIVE_LIST,
        (entry) => entry.combination,
        genericNames,
        () => ['Directive type: Fixed-dose combination']
      );

      const matchedNTIDrugs = getMatchedNTIDrugs(genericNames[0], genericNames.slice(1));
      const ntiMatches = matchedNTIDrugs.map((drug) => ({
        entryText: drug,
        matchedBy: genericNames.filter((genericName) => isEntryMatch(drug, genericName)),
        entryType: 'standalone',
        extraFields: ['NTI class: Bioequivalence planning required'],
      }));

      const nextResults = {
        query: genericNames,
        checkedAt: new Date().toISOString(),
        ceilingList: { matches: ceilingMatches, source: SOURCE_LINKS.ceiling },
        importProhibition: { matches: importProhibitionMatches, source: SOURCE_LINKS.prohibition },
        fivePlusFive: { matches: fivePlusFiveMatches, source: SOURCE_LINKS.fivePlusFive },
        fdcDirective: { matches: fdcMatches, source: SOURCE_LINKS.fdc },
        nti: { matches: ntiMatches, source: SOURCE_LINKS.nti },
      };

      const defaultActiveList =
        [
          { id: 'ceiling', matches: ceilingMatches },
          { id: 'prohibition', matches: importProhibitionMatches },
          { id: 'fiveplusfive', matches: fivePlusFiveMatches },
          { id: 'fdc', matches: fdcMatches },
          { id: 'nti', matches: ntiMatches },
        ].find((list) => list.matches.length > 0)?.id || 'ceiling';

      setResults(nextResults);
      setActiveListId(defaultActiveList);
    } finally {
      setIsChecking(false);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      checkProduct();
    }
  };

  const selectList = (listId, shouldScrollToResults = false) => {
    setActiveListId(listId);

    requestAnimationFrame(() => {
      if (shouldScrollToResults && listResultsSectionRef.current) {
        listResultsSectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }

      if (listResultBodyRef.current) {
        listResultBodyRef.current.scrollTop = 0;
      }
    });
  };

  const checkCards = useMemo(() => {
    if (!results) {
      return [];
    }

    const buildCard = (id, title, checkData, severityIfMatch) => ({
      id,
      title,
      severity: checkData.matches.length > 0 ? severityIfMatch : 'pass',
      source: checkData.source,
      matches: checkData.matches,
    });

    return [
      buildCard('ceiling', 'NAFDAC Ceiling List', results.ceilingList, 'fail'),
      buildCard('prohibition', 'Import Prohibition List', results.importProhibition, 'fail'),
      buildCard('fiveplusfive', '5+5 Local Manufacturing Policy', results.fivePlusFive, 'warn'),
      buildCard('fdc', 'FDC Regulatory Directive', results.fdcDirective, 'fail'),
      buildCard('nti', 'Narrow Therapeutic Index (NTI)', results.nti, 'warn'),
    ];
  }, [results]);

  const activeCheck = useMemo(() => {
    if (checkCards.length === 0) {
      return null;
    }

    return checkCards.find((check) => check.id === activeListId) || checkCards[0];
  }, [checkCards, activeListId]);

  return (
    <div className="pc-page">
      <div className="pc-shell">
        <section className="pc-card pc-hero pc-enter">
          <p className="pc-eyebrow">Enterprise Regulatory Workspace</p>
          <h1 className="pc-title">Generic Name Regulatory Checker</h1>
          <p className="pc-subtitle">
            Screen generic names against official regulatory lists with structured, auditable results.
          </p>
        </section>

        <section className="pc-card pc-input-card pc-enter">
          <div className="pc-section-head">
            <h2 className="pc-section-title">Run Screening</h2>
            <p className="pc-section-caption">Generic names only. No strengths, dosage forms, or brand names.</p>
          </div>

          <label className="pc-label" htmlFor="pc-generic-input">
            Generic Name(s)
          </label>
          <input
            id="pc-generic-input"
            type="text"
            placeholder="e.g. paracetamol, caffeine"
            value={genericInput}
            onChange={(event) => {
              setGenericInput(event.target.value);
              if (validationError) {
                setValidationError('');
              }
            }}
            onKeyDown={handleKeyDown}
            className={`pc-input ${validationError ? 'is-error' : ''}`}
          />

          <div className="pc-hint-row">
            <span className="pc-pill">comma-separated</span>
            <span className="pc-pill">generic names only</span>
            <span className="pc-pill">supports multi-name checks</span>
          </div>

          {validationError && <p className="pc-error">{validationError}</p>}

          <button
            type="button"
            onClick={checkProduct}
            disabled={!genericInput.trim() || isChecking}
            className={`pc-primary-btn ${!genericInput.trim() || isChecking ? 'is-disabled' : ''}`}
          >
            {isChecking ? 'Checking Generic Names...' : 'Run Regulatory Check'}
          </button>
        </section>

        {results && (
          <>
            <section className="pc-card pc-meta-card pc-enter">
              <p className="pc-meta-text">
                Checked: <strong>{results.query.join(', ')}</strong>
              </p>
              <p className="pc-meta-text">{new Date(results.checkedAt).toLocaleString()}</p>
            </section>

            <section className="pc-list-grid">
              {checkCards.map((check, index) => (
                <article
                  key={check.id}
                  className={`pc-list-card pc-tone-${check.severity}`}
                  style={{ animationDelay: `${index * 60}ms` }}
                >
                  <div className="pc-list-card-head">
                    <h3 className="pc-list-title">{check.title}</h3>
                    <span className="pc-status-chip">{CHECK_STYLES[check.severity].label}</span>
                  </div>

                  <p className="pc-match-count">
                    {check.matches.length} match{check.matches.length === 1 ? '' : 'es'} found
                  </p>

                  <button type="button" onClick={() => selectList(check.id, true)} className="pc-secondary-btn">
                    View Results
                  </button>
                </article>
              ))}
            </section>

            {activeCheck && (
              <section ref={listResultsSectionRef} className="pc-card pc-explorer pc-enter">
                <div className="pc-explorer-head">
                  <h3 className="pc-section-title">Result Explorer</h3>
                  <p className="pc-section-caption">Select a list on the left to inspect detailed matches.</p>
                </div>

                <div className="pc-explorer-body">
                  <aside className="pc-explorer-nav">
                    {checkCards.map((check) => {
                      const isActive = check.id === activeCheck.id;

                      return (
                        <button
                          key={`nav-${check.id}`}
                          type="button"
                          onClick={() => selectList(check.id)}
                          className={`pc-nav-btn pc-tone-${check.severity} ${isActive ? 'is-active' : ''}`}
                        >
                          <span className="pc-nav-title">{check.title}</span>
                          <span className="pc-nav-meta">
                            {check.matches.length} match{check.matches.length === 1 ? '' : 'es'}
                          </span>
                        </button>
                      );
                    })}
                  </aside>

                  <div ref={listResultBodyRef} className="pc-explorer-panel">
                    <div className="pc-panel-head">
                      <h4 className="pc-panel-title">{activeCheck.title}</h4>
                      <span className={`pc-status-chip pc-tone-${activeCheck.severity}`}>
                        {CHECK_STYLES[activeCheck.severity].label}
                      </span>
                    </div>

                    {activeCheck.matches.length === 0 && (
                      <p className="pc-empty">No matching entries found in this list.</p>
                    )}

                    {activeCheck.matches.length > 0 && (
                      <>
                        <p className="pc-panel-meta">
                          Match count: <strong>{activeCheck.matches.length}</strong>
                        </p>
                        <ol className="pc-result-list">
                          {activeCheck.matches.map((match) => (
                            <li key={`${activeCheck.id}-${match.entryText}`} className="pc-result-item">
                              <div className="pc-result-top">
                                <p className="pc-result-entry">{match.entryText}</p>
                                <span className={`pc-entry-type ${match.entryType === 'combination' ? 'is-combo' : 'is-standalone'}`}>
                                  {match.entryType === 'combination' ? 'Combination' : 'Standalone'}
                                </span>
                              </div>
                              <p className="pc-result-meta">
                                <strong>Matched by:</strong> {match.matchedBy.join(', ')}
                              </p>
                              {match.extraFields.map((extraField) => (
                                <p key={`${match.entryText}-${extraField}`} className="pc-result-meta">
                                  {extraField}
                                </p>
                              ))}
                            </li>
                          ))}
                        </ol>
                      </>
                    )}

                    {activeCheck.id === 'nti' ? (
                      <button type="button" onClick={openNtiModal} className="pc-link-btn">
                        View NTI List (PDF)
                      </button>
                    ) : (
                      <a href={activeCheck.source.url} target="_blank" rel="noopener noreferrer" className="pc-link-btn">
                        View Actual List
                      </a>
                    )}
                  </div>
                </div>
              </section>
            )}
          </>
        )}

        {isNtiModalOpen && (
          <div className="pc-modal-backdrop" onClick={() => setIsNtiModalOpen(false)}>
            <div className="pc-modal" onClick={(event) => event.stopPropagation()}>
              <header className="pc-modal-head">
                <h4 className="pc-modal-title">Narrow Therapeutic Index (NTI) List</h4>
                <button type="button" onClick={() => setIsNtiModalOpen(false)} className="pc-close-btn">
                  Close
                </button>
              </header>

              <div className="pc-modal-body">
                {isNtiPdfLoading && <p className="pc-empty">Generating NTI PDF...</p>}
                {ntiPdfError && <p className="pc-error">{ntiPdfError}</p>}

                {ntiPdfUrl && !isNtiPdfLoading && !ntiPdfError && (
                  <iframe title="NTI List PDF" src={ntiPdfUrl} className="pc-nti-frame" />
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductChecker;
