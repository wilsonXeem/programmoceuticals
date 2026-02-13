import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div
      className="container"
      style={{ maxWidth: "1000px", margin: "0 auto", padding: "1rem" }}
    >
      <div
        className="card"
        style={{
          padding: "2rem",
          background: "white",
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
          border: "1px solid #ddd",
        }}
      >
        {/* Professional Header */}
        <div
          style={{
            borderBottom: "3px solid #193441",
            paddingBottom: "2rem",
            marginBottom: "3rem",
            textAlign: "center",
          }}
        >
          <h1
            style={{
              margin: "0 0 1rem 0",
              fontSize: "24px",
              fontWeight: "700",
              color: "#2c3e50",
              textTransform: "uppercase",
              letterSpacing: "1px",
            }}
          >
            Dossier Screening System
          </h1>
          <div
            style={{
              fontSize: "14px",
              color: "#666",
              lineHeight: "1.6",
              marginBottom: "2rem",
            }}
          >
            Professional pharmaceutical dossier compliance assessment and
            regulatory screening platform
          </div>
          <Link
            to="/upload"
            style={{
              background: "#193441",
              color: "white",
              padding: "0.75rem 2rem",
              fontSize: "14px",
              fontWeight: "600",
              textDecoration: "none",
              borderRadius: "4px",
              display: "inline-block",
              border: "none",
              cursor: "pointer",
            }}
          >
            Begin Screening
          </Link>
        </div>

        {/* Professional Features Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "2rem",
            marginBottom: "3rem",
          }}
        >
          <div
            style={{
              background: "white",
              border: "1px solid #ddd",
              padding: "2rem",
              boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
            }}
          >
            <h2
              style={{
                fontSize: "14px",
                fontWeight: "600",
                color: "#2c3e50",
                marginBottom: "1.5rem",
                textTransform: "uppercase",
                letterSpacing: "0.5px",
              }}
            >
              Regulatory Challenges Addressed
            </h2>
            <ul
              style={{
                lineHeight: "1.8",
                color: "#666",
                fontSize: "14px",
                paddingLeft: "1rem",
                margin: 0,
              }}
            >
              <li>Manual dossier review inefficiencies</li>
              <li>Regulatory compliance verification delays</li>
              <li>Product eligibility assessment complexity</li>
              <li>Document structure validation challenges</li>
              <li>Bioequivalence requirement determination</li>
            </ul>
          </div>
          <div
            style={{
              background: "white",
              border: "1px solid #ddd",
              padding: "2rem",
              boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
            }}
          >
            <h2
              style={{
                fontSize: "14px",
                fontWeight: "600",
                color: "#2c3e50",
                marginBottom: "1.5rem",
                textTransform: "uppercase",
                letterSpacing: "0.5px",
              }}
            >
              Professional Capabilities
            </h2>
            <ul
              style={{
                lineHeight: "1.8",
                color: "#666",
                fontSize: "14px",
                paddingLeft: "1rem",
                margin: 0,
              }}
            >
              <li>Automated CTD structure validation</li>
              <li>NAFDAC regulatory list verification</li>
              <li>Intelligent document screening</li>
              <li>f2 similarity factor calculations</li>
              <li>Comprehensive compliance reporting</li>
            </ul>
          </div>
        </div>

        {/* Professional Workflow */}
        <div style={{ marginBottom: "3rem" }}>
          <h2
            style={{
              fontSize: "14px",
              fontWeight: "600",
              color: "#2c3e50",
              marginBottom: "2rem",
              textAlign: "center",
              textTransform: "uppercase",
              letterSpacing: "0.5px",
            }}
          >
            Assessment Workflow
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "1.5rem",
            }}
          >
            <div
              style={{
                background: "white",
                border: "1px solid #ddd",
                padding: "2rem",
                textAlign: "center",
                boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
              }}
            >
              <div
                style={{
                  width: "50px",
                  height: "50px",
                  background: "#193441",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 1rem auto",
                  color: "white",
                  fontSize: "14px",
                  fontWeight: "700",
                }}
              >
                1
              </div>
              <h3
                style={{
                  margin: "0 0 0.5rem 0",
                  fontSize: "14px",
                  fontWeight: "600",
                  color: "#2c3e50",
                }}
              >
                Upload Dossier
              </h3>
              <p
                style={{
                  color: "#666",
                  margin: 0,
                  fontSize: "14px",
                  lineHeight: "1.5",
                }}
              >
                Upload pharmaceutical dossier ZIP file for assessment
              </p>
            </div>
            <div
              style={{
                background: "white",
                border: "1px solid #ddd",
                padding: "2rem",
                textAlign: "center",
                boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
              }}
            >
              <div
                style={{
                  width: "50px",
                  height: "50px",
                  background: "#193441",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 1rem auto",
                  color: "white",
                  fontSize: "14px",
                  fontWeight: "700",
                }}
              >
                2
              </div>
              <h3
                style={{
                  margin: "0 0 0.5rem 0",
                  fontSize: "14px",
                  fontWeight: "600",
                  color: "#2c3e50",
                }}
              >
                Conduct Screening
              </h3>
              <p
                style={{
                  color: "#666",
                  margin: 0,
                  fontSize: "14px",
                  lineHeight: "1.5",
                }}
              >
                Automated compliance and regulatory screening assessment
              </p>
            </div>
            <div
              style={{
                background: "white",
                border: "1px solid #ddd",
                padding: "2rem",
                textAlign: "center",
                boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
              }}
            >
              <div
                style={{
                  width: "50px",
                  height: "50px",
                  background: "#193441",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 1rem auto",
                  color: "white",
                  fontSize: "14px",
                  fontWeight: "700",
                }}
              >
                3
              </div>
              <h3
                style={{
                  margin: "0 0 0.5rem 0",
                  fontSize: "14px",
                  fontWeight: "600",
                  color: "#2c3e50",
                }}
              >
                Generate Report
              </h3>
              <p
                style={{
                  color: "#666",
                  margin: 0,
                  fontSize: "14px",
                  lineHeight: "1.5",
                }}
              >
                Review documents and generate compliance reports
              </p>
            </div>
          </div>
        </div>

        {/* Professional Tools */}
        <div style={{ marginBottom: "3rem" }}>
          <h2
            style={{
              fontSize: "14px",
              fontWeight: "600",
              color: "#2c3e50",
              marginBottom: "2rem",
              textAlign: "center",
              textTransform: "uppercase",
              letterSpacing: "0.5px",
            }}
          >
            Professional Assessment Tools
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "1.5rem",
            }}
          >
            <Link to="/product-checker" style={{ textDecoration: "none" }}>
              <div
                style={{
                  background: "white",
                  border: "1px solid #ddd",
                  padding: "2rem",
                  textAlign: "center",
                  boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
                  transition: "transform 0.2s ease",
                  cursor: "pointer",
                }}
              >
                <h3
                  style={{
                    color: "#193441",
                    margin: "0 0 1rem 0",
                    fontSize: "14px",
                    fontWeight: "600",
                  }}
                >
                  Product Compliance Checker
                </h3>
                <p
                  style={{
                    color: "#666",
                    margin: 0,
                    fontSize: "14px",
                    lineHeight: "1.5",
                  }}
                >
                  Verify product eligibility against NAFDAC regulatory lists and
                  policies
                </p>
              </div>
            </Link>
            <Link to="/calculations" style={{ textDecoration: "none" }}>
              <div
                style={{
                  background: "white",
                  border: "1px solid #ddd",
                  padding: "2rem",
                  textAlign: "center",
                  boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
                  transition: "transform 0.2s ease",
                  cursor: "pointer",
                }}
              >
                <h3
                  style={{
                    color: "#193441",
                    margin: "0 0 1rem 0",
                    fontSize: "14px",
                    fontWeight: "600",
                  }}
                >
                  f2 Similarity Calculator
                </h3>
                <p
                  style={{
                    color: "#666",
                    margin: 0,
                    fontSize: "14px",
                    lineHeight: "1.5",
                  }}
                >
                  Calculate dissolution profile similarity factors for
                  bioequivalence assessment
                </p>
              </div>
            </Link>
          </div>
        </div>

        {/* Professional Footer */}
        <div
          style={{
            background: "#f8f9fa",
            padding: "2rem",
            border: "1px solid #dee2e6",
            textAlign: "center",
          }}
        >
          <h2
            style={{
              fontSize: "14px",
              fontWeight: "600",
              color: "#2c3e50",
              marginBottom: "1rem",
              textTransform: "uppercase",
              letterSpacing: "0.5px",
            }}
          >
            Development Information
          </h2>
          <p
            style={{
              color: "#666",
              lineHeight: "1.6",
              margin: "0 0 1.5rem 0",
              fontSize: "14px",
            }}
          >
            Developed by <strong>Wilson Zimthamaha</strong> at
            ProgrammoCeuticals
            <br />
            Specialized pharmaceutical software solutions for regulatory
            compliance and quality assurance
          </p>
          <a
            href="https://algorizimcodes.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: "#193441",
              color: "white",
              textDecoration: "none",
              padding: "0.75rem 1.5rem",
              fontSize: "14px",
              fontWeight: "500",
              borderRadius: "4px",
              display: "inline-block",
            }}
          >
            Developer Portfolio
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
