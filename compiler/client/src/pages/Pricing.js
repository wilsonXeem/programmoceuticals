import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const packages = [
  { name: "Single", credits: 1, amount: 100000, description: "Export one complete dossier." },
  { name: "Triple", credits: 3, amount: 270000, description: "Recommended for medium submission cycles." },
  { name: "Business", credits: 5, amount: 425000, description: "Designed for active regulatory pipelines." },
  {
    name: "Custom",
    credits: "6+",
    amountLabel: "₦80,000 / dossier",
    description: "For 6+ dossiers, total is calculated automatically at ₦80,000 per dossier."
  }
];

const Pricing = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleSelect = () => {
    if (user) {
      navigate("/account");
    } else {
      navigate("/signin");
    }
  };

  return (
    <div className="public-page">
      <section className="public-card">
        <h1>Pricing and Export Packages</h1>
        <p>
          Choose an export package based on your submission pipeline. Custom packages for 6+ dossiers are
          auto-calculated at ₦80,000 per dossier.
        </p>
        <div className="pricing-grid">
          {packages.map((pkg) => (
            <article key={pkg.name} className="pricing-card">
              <div className="pricing-name">{pkg.name}</div>
              <div className="pricing-amount">
                {pkg.amountLabel || `₦${pkg.amount.toLocaleString()}`}
              </div>
              <div className="pricing-credits">
                {typeof pkg.credits === "number"
                  ? `${pkg.credits} export${pkg.credits > 1 ? "s" : ""}`
                  : `${pkg.credits} exports`}
              </div>
              <p className="pricing-desc">{pkg.description}</p>
              <button onClick={handleSelect} className="pc-btn pc-btn-primary" style={{ width: "100%" }}>
                {user ? "Proceed to Payment" : "Sign in to purchase"}
              </button>
            </article>
          ))}
        </div>
      </section>
      <section className="public-card">
        <h2>Need institutional onboarding?</h2>
        <p>
          For cohorts, teams, or institutional deployment, contact ProgrammoCeuticals for a custom access
          setup and operational guidance.
        </p>
        <Link to="/contact" className="pc-btn pc-btn-secondary">
          Contact Support
        </Link>
      </section>
    </div>
  );
};

export default Pricing;
