import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Link,
  Outlet,
  useLocation,
} from "react-router-dom";
import CTDCompilerWrapper from "./components/CTDCompilerWrapper";
import ProtectedRoute from "./components/ProtectedRoute";
import { AuthProvider, useAuth } from "./context/AuthContext";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Manual from "./pages/Manual";
import Account from "./pages/Account";
import Pricing from "./pages/Pricing";
import AdminDashboard from "./pages/AdminDashboard";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import "./App.css";

const PublicLayout = () => {
  const { user } = useAuth();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  return (
    <div className="site-root">
      <header className="site-header">
        <div className="site-header-inner">
          <Link to="/" className="site-logo" aria-label="ProgrammoCeuticals home">
            <span className="logo-primary">Programmo</span>
            <span className="logo-secondary">Ceuticals</span>
          </Link>

          <button
            type="button"
            className="site-menu-toggle"
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            {isMenuOpen ? "Close" : "Menu"}
          </button>

          <div className={`site-header-controls ${isMenuOpen ? "is-open" : ""}`}>
            <nav className="site-nav">
              <Link to="/">Home</Link>
              <Link to="/pricing">Pricing</Link>
              <Link to="/manual">Manual</Link>
              <Link to="/contact">Contact</Link>
            </nav>
            <div className="site-actions">
              {user ? (
                <Link to="/app" className="site-button site-button-primary">
                  Open Compiler
                </Link>
              ) : (
                <>
                  <Link to="/signin" className="site-button site-button-ghost">
                    Sign In
                  </Link>
                  <Link to="/signup" className="site-button site-button-primary">
                    Get Started
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </header>
      <main className="site-main">
        <Outlet />
      </main>
      <footer className="site-footer">
        <div className="site-footer-inner">
          <p>
            ProgrammoCeuticals CTD Compiler for regulatory dossier preparation.
          </p>
          <p>
            <a
              href="https://zimthamaha.programmoceuticals.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#0b5ed7", textDecoration: "none" }}
            >
              Developed by Wilson Zimthamaha (ProgrammoCeuticals)
            </a>
          </p>
        </div>
        <div className="site-footer-legal">
          <p className="site-disclaimer">
            Dossier Compiler is an independent software platform designed to assist in CTD dossier
            compilation. It is not affiliated with or endorsed by NAFDAC. Users remain responsible for
            ensuring compliance with all applicable regulatory requirements.
          </p>
        </div>
      </footer>
    </div>
  );
};

const WorkspaceLayout = () => {
  const { user, signOut } = useAuth();
  const isAdmin = user?.email?.toLowerCase() === "info@programmoceuticals.com";
  const location = useLocation();
  const [isWorkspaceMenuOpen, setIsWorkspaceMenuOpen] = useState(false);

  useEffect(() => {
    setIsWorkspaceMenuOpen(false);
  }, [location.pathname]);

  return (
    <div className="workspace-root">
      <nav className="workspace-nav">
        <div className="workspace-nav-inner">
          <div className="workspace-nav-left">
            <div className="workspace-brand">
              <Link to="/" className="workspace-logo" title="Back to website">
                <span className="workspace-logo-primary">Programmo</span>
                <span className="workspace-logo-secondary">Ceuticals</span>
              </Link>
              <span className="workspace-product-name">CTD Compiler</span>
            </div>
            <button
              type="button"
              className="workspace-menu-toggle"
              aria-label="Toggle workspace navigation menu"
              aria-expanded={isWorkspaceMenuOpen}
              onClick={() => setIsWorkspaceMenuOpen((prev) => !prev)}
            >
              {isWorkspaceMenuOpen ? "Close" : "Menu"}
            </button>
          </div>

          <div className={`workspace-nav-collapse ${isWorkspaceMenuOpen ? "is-open" : ""}`}>
            <div className="workspace-links">
              <Link to="/app">Compiler</Link>
              <Link to="/manual">Manual</Link>
              <Link to="/pricing">Pricing</Link>
            </div>
            <div className="workspace-nav-right">
              {user ? (
                <>
                  <div className="workspace-user-meta">
                    <span className="workspace-user-email">{user.email}</span>
                    <span className="workspace-tier-badge">
                      {user.tier || "free"}
                    </span>
                  </div>
                  <Link to="/account" className="workspace-link-pill">
                    Account
                  </Link>
                  {isAdmin && (
                    <Link to="/admin" className="workspace-link-pill">
                      Admin
                    </Link>
                  )}
                  <button onClick={signOut} className="workspace-signout-btn">
                    Sign out
                  </button>
                </>
              ) : (
                <Link to="/signin" className="workspace-signin-link">
                  Sign in
                </Link>
              )}
            </div>
          </div>
        </div>
      </nav>
      <main className="workspace-main">
        <Outlet />
      </main>
      <footer className="workspace-footer">
        <p style={{ margin: 0 }}>ProgrammoCeuticals CTD Workspace</p>
        <p className="workspace-disclaimer">
          Dossier Compiler is an independent software platform designed to assist in CTD dossier
          compilation. It is not affiliated with or endorsed by NAFDAC. Users remain responsible for
          ensuring compliance with all applicable regulatory requirements.
        </p>
      </footer>
    </div>
  );
};

const ProtectedWorkspaceLayout = () => (
  <ProtectedRoute>
    <WorkspaceLayout />
  </ProtectedRoute>
);

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<PublicLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/manual" element={<Manual />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Route>
      <Route element={<WorkspaceLayout />}>
        <Route path="/app" element={<CTDCompilerWrapper />} />
      </Route>
      <Route element={<ProtectedWorkspaceLayout />}>
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/account" element={<Account />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

function App() {
  return (
    <AuthProvider>
      <Router>
        <AppRoutes />
      </Router>
    </AuthProvider>
  );
}

export default App;
