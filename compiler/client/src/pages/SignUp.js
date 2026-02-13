import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { useAuth } from "../context/AuthContext";

const SignUp = () => {
  const { signUp } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState("");
  const [whatsappNumber, setWhatsappNumber] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");
    setLoading(true);
    try {
      await signUp(email.trim(), username.trim(), phone.trim(), whatsappNumber.trim(), password);
      navigate("/app", { replace: true });
    } catch (err) {
      setError(err.message || "Sign up failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-shell">
      <section className="auth-card">
        <h1>Create Account</h1>
        <p className="auth-subtitle">Start compiling Modules 1 and 2 for free.</p>
        <form onSubmit={handleSubmit} className="auth-form">
          <label className="field-label">
            <span>Email</span>
            <input
              className="field-input"
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            />
          </label>
          <label className="field-label">
            <span>Username</span>
            <input
              className="field-input"
              type="text"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
              required
            />
          </label>
          <label className="field-label">
            <span>Phone</span>
            <input
              className="field-input"
              type="tel"
              value={phone}
              onChange={(event) => setPhone(event.target.value)}
              required
            />
          </label>
          <label className="field-label">
            <span>WhatsApp Number</span>
            <input
              className="field-input"
              type="tel"
              value={whatsappNumber}
              onChange={(event) => setWhatsappNumber(event.target.value)}
              required
            />
          </label>
          <label className="field-label">
            <span>Password</span>
            <div className="password-input-wrap">
              <input
                className="field-input password-input"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                required
              />
              <button
                type="button"
                className="password-toggle-btn"
                onClick={() => setShowPassword((prev) => !prev)}
                aria-label={showPassword ? "Hide password" : "Show password"}
                title={showPassword ? "Hide password" : "Show password"}
              >
                <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
              </button>
            </div>
          </label>
          {error && <div className="auth-error">{error}</div>}
          <button type="submit" disabled={loading} className="pc-btn pc-btn-primary">
            {loading ? "Creating..." : "Create Account"}
          </button>
        </form>
        <p className="auth-footnote">
          Already have an account? <Link to="/signin">Sign in</Link>
        </p>
      </section>
    </div>
  );
};

export default SignUp;
