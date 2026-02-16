import React from "react";
import { Link } from "react-router-dom";

const accessTiers = [
  {
    tier: "Open Access (No Sign-in)",
    scope: "Module 1 sections 1.0, 1.1, 1.2, and 1.3",
    setup: "Not available",
    longPdfSplit: "Up to 1 total page per split save, up to 3 split saves",
    export: "Available only after sign-in and export approval"
  },
  {
    tier: "Free Account",
    scope: "Full Module 1 and Module 2",
    setup: "Locked",
    longPdfSplit: "Up to 3 total pages per split save, up to 3 split saves",
    export: "Available with active export credits and server approval"
  },
  {
    tier: "Paid Account",
    scope: "Full application (Modules 1 to 5)",
    setup: "Fully available",
    longPdfSplit: "Unlimited pages and unlimited split saves",
    export: "Available with active export credits and server approval"
  }
];

const Manual = () => {
  return (
    <div className="public-page manual-page">
      <section className="public-card manual-hero-card">
        <h1>ProgrammoCeuticals CTD Compiler User Manual</h1>
        <p>
          This manual explains how to use the full user workflow of the CTD Compiler from onboarding,
          dossier setup, document upload, long-PDF splitting, validation, export, and payment flow.
          It is written for regular users and does not include admin operations.
        </p>
        <div className="manual-quick-links">
          <a href="#manual-getting-started">Getting Started</a>
          <a href="#manual-access">Access Levels</a>
          <a href="#manual-workspace">Workspace Guide</a>
          <a href="#manual-upload">Upload Rules</a>
          <a href="#manual-split">Long PDF Split Tool</a>
          <a href="#manual-export">Export Guide</a>
          <a href="#manual-troubleshoot">Troubleshooting</a>
        </div>
      </section>

      <section id="manual-getting-started" className="public-card">
        <h2>1. Getting Started</h2>
        <ol className="manual-list">
          <li>Open the website home page and choose your entry point (open version, sign-in, or sign-up).</li>
          <li>
            If you are new, create an account with your email, username, phone number, WhatsApp number,
            and password.
          </li>
          <li>After sign-in, open the compiler workspace.</li>
          <li>Select CTD sections from the left tree and upload files section by section.</li>
          <li>Resolve missing or invalid requirements, then export your dossier ZIP when ready.</li>
        </ol>
        <p className="manual-note">
          Important: Export requires active internet connection and server approval.
        </p>
      </section>

      <section id="manual-access" className="public-card">
        <h2>2. Access Levels and Capabilities</h2>
        <p>
          The application uses tiered access. Your visible sections, setup controls, and split-tool limits
          are determined by your current access level.
        </p>
        <div className="manual-table-wrap">
          <table className="manual-table">
            <thead>
              <tr>
                <th>Access Level</th>
                <th>CTD Scope</th>
                <th>Setup Panel</th>
                <th>Long PDF Split</th>
                <th>Export</th>
              </tr>
            </thead>
            <tbody>
              {accessTiers.map((row) => (
                <tr key={row.tier}>
                  <td>{row.tier}</td>
                  <td>{row.scope}</td>
                  <td>{row.setup}</td>
                  <td>{row.longPdfSplit}</td>
                  <td>{row.export}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="manual-note">
          Setup panel controls are intentionally locked for free users and unlocked only for paid users.
        </p>
      </section>

      <section id="manual-workspace" className="public-card">
        <h2>3. Workspace Overview</h2>
        <div className="manual-checkpoints">
          <article className="manual-checkpoint">
            <strong>Sidebar (CTD Tree)</strong>
            <p>
              Shows modules, folders, and end nodes. Select any active section to upload or review
              documents for that exact CTD path.
            </p>
          </article>
          <article className="manual-checkpoint">
            <strong>Progress Header</strong>
            <p>
              Displays completed sections vs total sections in your current account scope, plus quick
              actions such as Clear All, Split Tool, upgrade, and export.
            </p>
          </article>
          <article className="manual-checkpoint">
            <strong>Section Workspace</strong>
            <p>
              Shows requirements, upload drop-zone, preview pane, save controls, and any format/validation
              feedback for the selected section.
            </p>
          </article>
          <article className="manual-checkpoint">
            <strong>Status Alerts</strong>
            <p>
              Error and status messages appear in the workspace and auto-clear after a short interval for
              non-blocking interaction.
            </p>
          </article>
        </div>
      </section>

      <section className="public-card">
        <h2>4. Dossier Setup Panel (Paid Accounts)</h2>
        <p>
          Paid users can configure dossier-structure variables before upload. These settings affect tree
          generation and required section appearance.
        </p>
        <ul className="manual-list">
          <li>API count</li>
          <li>API manufacturer count</li>
          <li>Strength count</li>
          <li>Container closure count</li>
          <li>Co-blistered products count</li>
          <li>Diluent count</li>
          <li>FPP count</li>
        </ul>
        <p>
          Use the plus/minus controls to adjust counts. Free and open users will see setup as locked.
        </p>
      </section>

      <section id="manual-upload" className="public-card">
        <h2>5. Uploading Documents Correctly</h2>
        <h3>5.1 Upload Methods</h3>
        <ul className="manual-list">
          <li>Select a section and use file picker upload.</li>
          <li>Drag and drop a file into the section drop-zone.</li>
          <li>Use preview to confirm the file before saving.</li>
        </ul>

        <h3>5.2 Main File and Additional Files</h3>
        <ul className="manual-list">
          <li>Each section supports one main (primary) file.</li>
          <li>You can add additional files to the same section when needed.</li>
          <li>Additional files are saved as supplemental files and can be removed individually.</li>
        </ul>

        <h3>5.3 Format Enforcement and Critical Sections</h3>
        <ul className="manual-list">
          <li>General section formats are validated at save and export time.</li>
          <li>
            Section <strong>1.4.2 (QIS)</strong> requires Word format (<code>.doc/.docx</code>).
          </li>
          <li>
            Section <strong>2.3 (QOS)</strong> requires Word format (<code>.doc/.docx</code>).
          </li>
          <li>
            Section <strong>2.5</strong> is handled as a single consolidated PDF (not split into subsection uploads).
          </li>
        </ul>

        <h3>5.4 Document Confirmations</h3>
        <p>
          The app checks required document confirmations (for example language, readability/searchability,
          and reference-quality declarations) during export readiness. Missing confirmations can block export.
        </p>
      </section>

      <section className="public-card">
        <h2>6. Naming and Export Structure Behavior</h2>
        <ul className="manual-list">
          <li>
            Export names are generated from the CTD side tree, not from your uploaded file name,
            for primary files.
          </li>
          <li>
            For end-node sections, folder/file naming follows the CTD structure standard used in the tree.
          </li>
          <li>Supplemental files keep sanitized forms of user-provided file names.</li>
          <li>
            For some deep multi-subsection regions (especially in Modules 4/5), a consolidated single-file
            upload option is available and can count as subtree coverage where applicable.
          </li>
        </ul>
      </section>

      <section id="manual-split" className="public-card">
        <h2>7. Long PDF Split Tool</h2>
        <p>
          Use this tool when your dossier content is provided as one long PDF and needs to be distributed
          into specific CTD sections.
        </p>

        <h3>7.1 Where to Open It</h3>
        <p>
          In the compiler header actions, click <strong>Long PDF Split Tool</strong>. This opens the
          dedicated split workspace panel.
        </p>

        <h3>7.2 Workflow</h3>
        <ol className="manual-list">
          <li>Upload one source PDF.</li>
          <li>Select target CTD section.</li>
          <li>Set start/end pages manually or using visual thumbnails.</li>
          <li>Add range to queue.</li>
          <li>Repeat until your queue is complete.</li>
          <li>Click <strong>Split &amp; Save to Sections</strong>.</li>
        </ol>

        <h3>7.3 Visual Picker, Queue JSON, and Overlap Notices</h3>
        <ul className="manual-list">
          <li>Thumbnail picker allows click-to-set range (anchor + end click).</li>
          <li>Queue can be exported to JSON and imported later.</li>
          <li>Overlap warnings are shown to help detect repeated/overlapping page assignments.</li>
        </ul>

        <h3>7.4 Split Limits by Tier</h3>
        <ul className="manual-list">
          <li>Open: 1 total page per split save, 3 split saves total.</li>
          <li>Free: 3 total pages per split save, 3 split saves total.</li>
          <li>Paid: unlimited.</li>
        </ul>
      </section>

      <section id="manual-export" className="public-card">
        <h2>8. Export Readiness and Export Flow</h2>
        <h3>8.1 What Is Checked Before Export</h3>
        <ul className="manual-list">
          <li>Required sections in your scope are uploaded.</li>
          <li>Mandatory section formats are valid.</li>
          <li>Required document confirmations are present.</li>
          <li>Critical rule groups are enforced (for example Module 1.3 coverage and Module 3 importance).</li>
        </ul>

        <h3>8.2 Export Gate Conditions</h3>
        <ul className="manual-list">
          <li>You must be signed in.</li>
          <li>You must have internet access.</li>
          <li>The server must approve export request (gatekeeping).</li>
          <li>Your account must have sufficient export credits.</li>
        </ul>

        <h3>8.3 What Happens on Export</h3>
        <ul className="manual-list">
          <li>Server approves or rejects export request.</li>
          <li>If approved, dossier ZIP is generated and downloaded.</li>
          <li>Export credits are decremented based on your account package policy.</li>
        </ul>

        <p className="manual-note">
          Your dossier file content is handled in your local browser storage during compilation workflow.
        </p>
      </section>

      <section className="public-card">
        <h2>9. Pricing, Credits, and Payments (User Side)</h2>
        <ul className="manual-list">
          <li>Open the Pricing page to review current export packages.</li>
          <li>Select a package to continue to sign-in/account payment flow.</li>
          <li>In Account, you can request and complete payment for export credits.</li>
          <li>Use Profile update controls to keep your contact details current for support follow-up.</li>
        </ul>
        <div className="manual-actions">
          <Link to="/pricing" className="pc-btn pc-btn-primary">
            View Pricing
          </Link>
          <Link to="/account" className="pc-btn pc-btn-secondary">
            Open Account
          </Link>
        </div>
      </section>

      <section id="manual-troubleshoot" className="public-card">
        <h2>10. Troubleshooting and Best Practices</h2>
        <h3>10.1 Common Issues</h3>
        <ul className="manual-list">
          <li>
            <strong>“Missing required document …”</strong>: upload the exact missing section and save.
          </li>
          <li>
            <strong>“Invalid file format …”</strong>: replace with required format (for example QIS/QOS Word).
          </li>
          <li>
            <strong>“Missing document confirmations …”</strong>: ensure section save included required confirmations.
          </li>
          <li>
            <strong>Export not proceeding</strong>: check sign-in status, internet, and export credits.
          </li>
          <li>
            <strong>Split tool blocked</strong>: page cap or split-use limit reached for your tier.
          </li>
        </ul>

        <h3>10.2 Best Practice Workflow</h3>
        <ol className="manual-list">
          <li>Complete Module 1 fully before moving ahead.</li>
          <li>Upload primary file first for each section, then add supplemental files only when needed.</li>
          <li>Use the Long PDF Split Tool for scanned/combined source documents instead of manual re-upload loops.</li>
          <li>Run a final tree review before export to catch missing nodes early.</li>
          <li>Keep stable internet during export to avoid interrupted approval flow.</li>
        </ol>
      </section>

      <section className="public-card">
        <h2>11. Support</h2>
        <p>
          For user support, onboarding help, and workflow clarification, contact ProgrammoCeuticals support.
          Include your account email and a short issue description for faster resolution.
        </p>
        <div className="manual-actions">
          <Link to="/contact" className="pc-btn pc-btn-secondary">
            Contact Support
          </Link>
          <Link to="/app" className="pc-btn pc-btn-primary">
            Open Compiler Workspace
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Manual;
