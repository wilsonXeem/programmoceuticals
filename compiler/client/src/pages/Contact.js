import React, { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const updateField = (field) => (event) => {
    setForm((prev) => ({ ...prev, [field]: event.target.value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="simple-page">
      <section className="simple-page-card">
        <h1>Contact ProgrammoCeuticals</h1>
        <p>
          For onboarding, account upgrades, export credit packages, and institutional deployment support.
        </p>
        <div className="contact-grid">
          <article className="contact-item">
            <h3>Email</h3>
            <p>
              <a href="mailto:info@programmoceuticals.com">info@programmoceuticals.com</a>
            </p>
          </article>
          <article className="contact-item">
            <h3>Support scope</h3>
            <p>Compiler setup, dossier flow clarification, account and package activation.</p>
          </article>
          <article className="contact-item">
            <h3>Response channel</h3>
            <p>Primary response is via email and registered WhatsApp contact on your account.</p>
          </article>
        </div>
      </section>

      <section className="simple-page-card">
        <h2>Send a message</h2>
        <form onSubmit={handleSubmit} className="contact-form">
          <label>
            <span>Full Name</span>
            <input type="text" required value={form.name} onChange={updateField("name")} />
          </label>
          <label>
            <span>Email</span>
            <input type="email" required value={form.email} onChange={updateField("email")} />
          </label>
          <label>
            <span>Message</span>
            <textarea
              rows={5}
              required
              value={form.message}
              onChange={updateField("message")}
              placeholder="Tell us what you need help with."
            />
          </label>
          <button type="submit" className="pc-btn pc-btn-primary">Submit Request</button>
        </form>
        {submitted && (
          <p className="contact-confirmation">
            Thanks. Your request is captured on this page. For immediate action, also email
            {" "}
            <a href="mailto:info@programmoceuticals.com">info@programmoceuticals.com</a>.
          </p>
        )}
      </section>
    </div>
  );
};

export default Contact;
