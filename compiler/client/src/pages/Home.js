import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Home = () => {
  const { user } = useAuth();

  return (
    <div className="landing-page">
      <section className="landing-hero">
        <div className="landing-hero-inner">
          <span className="landing-kicker">NAFDAC CTD Dossier Workflow</span>
          <h1>Build, validate, and export CTD dossiers with confidence.</h1>
          <p>
            ProgrammoCeuticals Compiler helps regulatory teams structure dossiers, enforce
            section-level requirements, and prepare compliant submission packages.
          </p>
          <div className="landing-cta-row">
            <Link to="/app" className="site-button site-button-primary">
              Use Open Version (1.0-1.3)
            </Link>
            {!user && (
              <Link to="/signup" className="site-button site-button-ghost">
                Continue to 1.4 (Free Account)
              </Link>
            )}
            {user ? (
              <Link to="/manual" className="site-button site-button-ghost">
                View Workflow Manual
              </Link>
            ) : (
              <Link to="/signin" className="site-button site-button-ghost">
                Sign In
              </Link>
            )}
          </div>
          <div className="landing-open-access">
            <strong>Open Version:</strong> Try dossier compilation for Sections
            {" "}
            <b>1.0, 1.1, 1.2, and 1.3</b>
            . To continue with <b>1.4</b>, create a free account.
          </div>
          <div className="landing-access-flow">
            <div>
              <strong>Step 1: Open Version</strong>
              <span>Sections 1.0 to 1.3 available to all users.</span>
            </div>
            <div>
              <strong>Step 2: Free Account</strong>
              <span>Unlock full Module 1 (including 1.4) and Module 2.</span>
            </div>
            <div>
              <strong>Step 3: Paid Access</strong>
              <span>Unlock the full application and all CTD modules.</span>
            </div>
          </div>
          <div className="landing-metrics">
            <div>
              <strong>5 CTD Modules</strong>
              <span>Structured exactly for submission flow</span>
            </div>
            <div>
              <strong>Rule-based checks</strong>
              <span>Document and export gate validations</span>
            </div>
            <div>
              <strong>Tiered access</strong>
              <span>Open 1.0-1.3, free unlocks Modules 1-2, paid unlocks all modules</span>
            </div>
          </div>
        </div>
      </section>

      <section className="landing-section">
        <div className="landing-section-inner">
          <h2>What you can do in the compiler</h2>
          <div className="feature-grid">
            <article className="feature-card">
              <h3>Configure dossier profile</h3>
              <p>
                Set API counts, manufacturers, strengths, container closures, and other dossier-shaping factors.
              </p>
            </article>
            <article className="feature-card">
              <h3>Upload by CTD node</h3>
              <p>
                Each required node supports controlled upload with format and attestation checks before save.
              </p>
            </article>
            <article className="feature-card">
              <h3>Track readiness</h3>
              <p>
                Monitor completion by module and section, and identify missing documents before export.
              </p>
            </article>
            <article className="feature-card">
              <h3>Request export credits</h3>
              <p>
                Handle package requests from your account and export only when credits and checks are valid.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="landing-section landing-section-alt">
        <div className="landing-section-inner">
          <h2>Standard process for teams</h2>
          <div className="timeline">
            <div>
              <strong>1. Start with open version</strong>
              <p>Start with open Sections 1.0 to 1.3 without signing up.</p>
            </div>
            <div>
              <strong>2. Continue from 1.4 with free account</strong>
              <p>Free accounts unlock the rest of Module 1 and all of Module 2.</p>
            </div>
            <div>
              <strong>3. Upgrade for full CTD coverage</strong>
              <p>Paid plans unlock all modules, setup controls, and full export workflow.</p>
            </div>
            <div>
              <strong>4. Export submission package</strong>
              <p>Final export runs through validation gates to reduce submission rework.</p>
            </div>
          </div>
          <div className="landing-cta-row">
            <Link to="/pricing" className="site-button site-button-ghost">
              View Plans
            </Link>
            <Link to="/contact" className="site-button site-button-primary">
              Contact ProgrammoCeuticals
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
