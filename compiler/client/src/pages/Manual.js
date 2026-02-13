import React from "react";
import { Link } from "react-router-dom";

const Manual = () => {
  return (
    <div className="public-page">
      <section className="public-card">
        <h1>Compiler Manual</h1>
        <p>
          This manual summarizes the expected operating flow for dossier compilation, validation, and
          export readiness in ProgrammoCeuticals CTD Compiler.
        </p>
        <ol className="manual-list">
          <li>Create or sign in to your account and open the compiler workspace.</li>
          <li>Configure dossier setup variables where access allows it.</li>
          <li>Upload documents per CTD node and satisfy required checks.</li>
          <li>Resolve missing requirements before requesting export.</li>
          <li>Generate export package after all validation gates pass.</li>
        </ol>
      </section>
      <section className="public-card">
        <h2>Access Model</h2>
        <div className="manual-checkpoints">
          <article className="manual-checkpoint">
            <strong>Free Tier</strong>
            <p>Full workflow for Modules 1 and 2, including export.</p>
          </article>
          <article className="manual-checkpoint">
            <strong>Paid Tier</strong>
            <p>Unlocks full CTD coverage (Modules 1 to 5) and setup controls.</p>
          </article>
          <article className="manual-checkpoint">
            <strong>Export Credits</strong>
            <p>Exports consume credits based on active package allocation.</p>
          </article>
          <article className="manual-checkpoint">
            <strong>Support</strong>
            <p>Operational support is provided through email and registered WhatsApp.</p>
          </article>
        </div>
        <div style={{ marginTop: "1rem", display: "flex", gap: "0.6rem", flexWrap: "wrap" }}>
          <Link to="/pricing" className="pc-btn pc-btn-primary">View Pricing</Link>
          <Link to="/contact" className="pc-btn pc-btn-secondary">Contact Support</Link>
        </div>
      </section>
    </div>
  );
};

export default Manual;
