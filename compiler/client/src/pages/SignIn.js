import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { useAuth } from "../context/AuthContext";

const SignIn = () => {
  const { signIn } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");
    setLoading(true);
    try {
      await signIn(email.trim(), password);
      navigate("/app", { replace: true });
    } catch (err) {
      setError(err.message || "Sign in failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-shell">
      <section className="auth-card">
        <h1>Sign In</h1>
        <p className="auth-subtitle">Access your dossier workspace.</p>
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
            {loading ? "Signing in..." : "Sign In"}
          </button>
        </form>
        <p className="auth-footnote">
          No account? <Link to="/signup">Create one</Link>
        </p>
      </section>
    </div>
  );
};

export default SignIn;
