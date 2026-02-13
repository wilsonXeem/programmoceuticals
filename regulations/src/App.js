import React, { Suspense, lazy, useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  NavLink,
} from "react-router-dom";
import ErrorBoundary from "./components/ErrorBoundary";
import Login from "./components/Login";
import { PromptProvider } from "./components/PromptProvider";
import { DossierProvider } from "./hooks/useDossier";
import { initSmartPreloading } from "./utils/lazyImports";
import { backgroundProcessor } from "./services/backgroundProcessor";
import "./App.css";

// Lazy load DRT components
const Upload = lazy(() => import("./components/Upload"));
const APISelection = lazy(() => import("./components/APISelection"));
const Screening = lazy(() => import("./components/Screening"));
const Review = lazy(() => import("./components/Review"));
const ProductChecker = lazy(() => import("./components/ProductChecker"));
const StandaloneChecker = lazy(() => import("./components/StandaloneChecker"));
const StandaloneScreeningChecker = lazy(() =>
  import("./components/StandaloneScreeningChecker")
);
const Calculations = lazy(() => import("./components/Calculations"));
const Report = lazy(() => import("./components/Report"));
const QISForm = lazy(() => import("./components/QISForm"));

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    return localStorage.getItem("drt_isLoggedIn") === "true";
  });
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    initSmartPreloading();
    backgroundProcessor.preloadComponents();

    const handleClickOutside = (event) => {
      if (isMobileMenuOpen && !event.target.closest(".nav")) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      backgroundProcessor.clearHistory();
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
    localStorage.setItem("drt_isLoggedIn", "true");
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("drt_isLoggedIn");
  };

  return (
    <ErrorBoundary>
      <PromptProvider>
        <DossierProvider>
          <Router>
            <Suspense
              fallback={
                <div style={{ padding: "20px", textAlign: "center" }}>
                  Loading...
                </div>
              }
            >
              <Routes>
                {/* Standalone checker routes */}
                <Route path="/checker" element={<StandaloneChecker />} />
                <Route
                  path="/screening-checker"
                  element={<StandaloneScreeningChecker />}
                />

                {/* Show login if not logged in */}
                {!isLoggedIn && (
                  <Route path="*" element={<Login onLogin={handleLogin} />} />
                )}

                {/* Main DRT app routes */}
                {isLoggedIn && (
                  <Route
                    path="/*"
                    element={
                      <div className="app">
                        <nav className="nav">
                          <div className="nav-container">
                            <div className="nav-brand">
                              <img
                                src="/logo.png"
                                alt="ProgrammoCeuticals Logo"
                                className="nav-logo"
                              />
                              <h1 className="nav-title">
                                DRT - Dossier Review Team
                              </h1>
                            </div>

                            <button
                              className="mobile-menu-toggle"
                              onClick={toggleMobileMenu}
                              aria-label="Toggle navigation menu"
                            >
                              <span
                                className={`hamburger ${
                                  isMobileMenuOpen ? "open" : ""
                                }`}
                              ></span>
                            </button>

                            <div
                              className={`nav-links ${
                                isMobileMenuOpen ? "mobile-open" : ""
                              }`}
                            >
                              <NavLink
                                to="/upload"
                                className={({ isActive }) =>
                                  isActive ? "nav-link active" : "nav-link"
                                }
                                onClick={closeMobileMenu}
                              >
                                Upload
                              </NavLink>
                              <NavLink
                                to="/screening"
                                className={({ isActive }) =>
                                  isActive ? "nav-link active" : "nav-link"
                                }
                                onClick={closeMobileMenu}
                              >
                                Screening
                              </NavLink>
                              <NavLink
                                to="/review"
                                className={({ isActive }) =>
                                  isActive ? "nav-link active" : "nav-link"
                                }
                                onClick={closeMobileMenu}
                              >
                                Documents
                              </NavLink>
                              <NavLink
                                to="/product-checker"
                                className={({ isActive }) =>
                                  isActive ? "nav-link active" : "nav-link"
                                }
                                onClick={closeMobileMenu}
                              >
                                Product Checker
                              </NavLink>
                              <NavLink
                                to="/calculations"
                                className={({ isActive }) =>
                                  isActive ? "nav-link active" : "nav-link"
                                }
                                onClick={closeMobileMenu}
                              >
                                Calculations
                              </NavLink>
                              <NavLink
                                to="/qis"
                                className={({ isActive }) =>
                                  isActive ? "nav-link active" : "nav-link"
                                }
                                onClick={closeMobileMenu}
                              >
                                QIS Form
                              </NavLink>
                              <button
                                onClick={handleLogout}
                                style={{
                                  background: "none",
                                  border: "none",
                                  color: "white",
                                  cursor: "pointer",
                                  padding: "0.5rem 1rem",
                                  fontSize: "14px",
                                }}
                              >
                                Logout
                              </button>
                            </div>
                          </div>
                        </nav>
                        <main className="main-content">
                          <Routes>
                            <Route
                              path="/"
                              element={<Navigate to="/upload" replace />}
                            />
                            <Route path="/upload" element={<Upload />} />
                            <Route path="/screening" element={<Screening />} />
                            <Route path="/review" element={<Review />} />
                            <Route
                              path="/product-checker"
                              element={<ProductChecker />}
                            />
                            <Route
                              path="/calculations"
                              element={<Calculations />}
                            />
                            <Route path="/qis" element={<QISForm />} />
                            <Route path="/report" element={<Report />} />
                          </Routes>
                        </main>
                        <footer className="app-footer">
                          <p style={{ margin: 0 }}>
                            <a
                              href="https://zimthamaha.programmoceuticals.com"
                              target="_blank"
                              rel="noopener noreferrer"
                              style={{ color: "white", textDecoration: "none" }}
                            >
                              Developed by Wilson Zimthamaha
                              (ProgrammoCeuticals)
                            </a>
                          </p>
                        </footer>
                      </div>
                    }
                  />
                )}
              </Routes>
            </Suspense>
          </Router>
        </DossierProvider>
      </PromptProvider>
    </ErrorBoundary>
  );
}

export default App;
