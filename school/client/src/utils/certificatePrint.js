const escapeHtml = (value) =>
  String(value || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');

export const printCertificate = ({
  certificateNumber,
  studentName,
  courseTitle,
  cohortName,
  issuedAt
}) => {
  const issueDate = new Date(issuedAt || Date.now()).toLocaleDateString();
  const rawNumber = String(certificateNumber || 'N/A');
  const safeNumber = escapeHtml(rawNumber);
  const safeStudent = escapeHtml(studentName || 'Student');
  const safeCourse = escapeHtml(courseTitle || 'Course');
  const safeCohort = escapeHtml(cohortName || 'Cohort');
  const safeDate = escapeHtml(issueDate);

  const printWindow = window.open('', '_blank', 'noopener,noreferrer');
  if (!printWindow) {
    return false;
  }

  printWindow.document.write(`
    <!doctype html>
    <html>
      <head>
        <meta charset="utf-8" />
        <title>Certificate ${safeNumber}</title>
        <style>
          body {
            margin: 0;
            padding: 28px;
            background: #f8fafc;
            font-family: "Times New Roman", Georgia, serif;
          }
          .certificate {
            max-width: 980px;
            margin: 0 auto;
            background: #ffffff;
            border: 10px solid #0b5ed7;
            border-radius: 12px;
            padding: 48px 56px;
            box-shadow: 0 20px 60px rgba(15, 23, 42, 0.2);
            color: #0f172a;
          }
          .brand {
            text-transform: uppercase;
            letter-spacing: 0.2em;
            font-size: 12px;
            color: #0b5ed7;
            text-align: center;
            margin-bottom: 12px;
          }
          h1 {
            margin: 0;
            text-align: center;
            font-size: 52px;
            letter-spacing: 0.03em;
          }
          .subtitle {
            text-align: center;
            margin: 12px 0 28px;
            color: #334155;
            font-size: 18px;
          }
          .student {
            text-align: center;
            font-size: 42px;
            font-weight: 700;
            margin: 22px 0;
          }
          .details {
            max-width: 620px;
            margin: 28px auto 0;
            display: grid;
            gap: 10px;
            font-size: 16px;
          }
          .detail-row {
            display: grid;
            grid-template-columns: 180px 1fr;
            gap: 12px;
          }
          .label {
            color: #475569;
            font-weight: 700;
          }
          .value {
            color: #0f172a;
          }
          .number {
            margin-top: 30px;
            text-align: center;
            color: #1e3a8a;
            font-weight: 700;
            letter-spacing: 0.04em;
          }
          .footer {
            margin-top: 38px;
            text-align: center;
            color: #64748b;
            font-size: 14px;
          }
          @media print {
            body {
              padding: 0;
              background: #fff;
            }
            .certificate {
              box-shadow: none;
              border-radius: 0;
              margin: 0;
              min-height: 100vh;
            }
          }
        </style>
      </head>
      <body>
        <article class="certificate">
          <div class="brand">ProgrammoCeuticals</div>
          <h1>Certificate</h1>
          <p class="subtitle">This certifies that</p>
          <div class="student">${safeStudent}</div>
          <p class="subtitle">has successfully completed the program requirements.</p>
          <div class="details">
            <div class="detail-row"><div class="label">Course</div><div class="value">${safeCourse}</div></div>
            <div class="detail-row"><div class="label">Cohort</div><div class="value">${safeCohort}</div></div>
            <div class="detail-row"><div class="label">Date Issued</div><div class="value">${safeDate}</div></div>
          </div>
          <div class="number">Certificate No: ${safeNumber}</div>
          <div class="footer">Verify at #/certificate-verify/${encodeURIComponent(
            rawNumber
          )}</div>
        </article>
        <script>
          window.focus();
          setTimeout(() => window.print(), 200);
        </script>
      </body>
    </html>
  `);
  printWindow.document.close();
  return true;
};
