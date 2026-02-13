import React, { useState } from "react";

const F2Calculator = ({ isExpanded, onToggle }) => {
  const [timePoints, setTimePoints] = useState([
    { time: 5, reference: "", test: "" },
    { time: 10, reference: "", test: "" },
    { time: 15, reference: "", test: "" },
    { time: 20, reference: "", test: "" },
    { time: 30, reference: "", test: "" },
    { time: 45, reference: "", test: "" },
    { time: 60, reference: "", test: "" },
    { time: 90, reference: "", test: "" },
    { time: 120, reference: "", test: "" },
  ]);
  const [f2Result, setF2Result] = useState(null);

  const addTimePoint = () => {
    const timeSequence = [5, 10, 15, 20, 30, 45, 60, 90, 120, 180, 240, 360, 480, 720, 1440];
    const usedTimes = timePoints.map(p => p.time);
    const nextTime = timeSequence.find(t => !usedTimes.includes(t)) || (Math.max(...usedTimes) + 60);
    setTimePoints([
      ...timePoints,
      { time: nextTime, reference: "", test: "" },
    ]);
  };

  const removeTimePoint = (index) => {
    if (timePoints.length > 1) {
      setTimePoints(timePoints.filter((_, i) => i !== index));
    }
  };

  const updateTimePoint = (index, field, value) => {
    const updated = [...timePoints];
    updated[index][field] = value;
    setTimePoints(updated);
  };

  const calculateF2 = () => {
    const validPoints = timePoints.filter(
      (point) =>
        point.reference !== "" &&
        point.test !== "" &&
        !isNaN(parseFloat(point.reference)) &&
        !isNaN(parseFloat(point.test))
    );

    if (validPoints.length < 3) {
      alert("At least 3 time points are required for f2 calculation");
      return;
    }

    // Filter points where either product is ≤85% dissolved
    const filteredPoints = validPoints.filter((point) => {
      const ref = parseFloat(point.reference);
      const test = parseFloat(point.test);
      return ref <= 85 || test <= 85;
    });

    if (filteredPoints.length === 0) {
      alert(
        "No valid time points found (at least one product must be ≤85% dissolved)"
      );
      return;
    }

    const n = filteredPoints.length;
    const sumSquaredDiff = filteredPoints.reduce((sum, point) => {
      const diff = parseFloat(point.reference) - parseFloat(point.test);
      return sum + diff * diff;
    }, 0);

    const f2 = 50 * Math.log10(Math.pow(1 + sumSquaredDiff / n, -0.5) * 100);

    setF2Result({
      value: f2.toFixed(2),
      interpretation: f2 >= 50 ? "Similar" : "Not Similar",
      pointsUsed: filteredPoints.length,
      totalPoints: validPoints.length,
    });
  };

  const clearAll = () => {
    setTimePoints([
      { time: 5, reference: "", test: "" },
      { time: 10, reference: "", test: "" },
      { time: 15, reference: "", test: "" },
      { time: 20, reference: "", test: "" },
      { time: 30, reference: "", test: "" },
      { time: 45, reference: "", test: "" },
      { time: 60, reference: "", test: "" },
      { time: 90, reference: "", test: "" },
      { time: 120, reference: "", test: "" },
    ]);
    setF2Result(null);
  };

  return (
    <div className="calculation-item" style={{ marginBottom: "1rem", border: "1px solid #dee2e6", borderRadius: "8px" }}>
      <div 
        className="calculation-header" 
        onClick={onToggle}
        style={{
          padding: "1rem",
          background: "#f8f9fa",
          cursor: "pointer",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderRadius: isExpanded ? "8px 8px 0 0" : "8px"
        }}
      >
        <div>
          <h3 style={{ margin: 0 }}>🧮 f2 Similarity Factor Calculator</h3>
          <p style={{ margin: "0.25rem 0 0 0", color: "#666", fontSize: "0.9rem" }}>
            Calculate f2 similarity factor for dissolution profile comparison
          </p>
        </div>
        <span style={{ fontSize: "1.2rem", transform: isExpanded ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.2s" }}>
          ▼
        </span>
      </div>
      
      {isExpanded && (
        <div className="calculation-content" style={{ padding: "1rem" }}>

        <div className="responsive-card" style={{
            background: "#f8f9fa",
            borderRadius: "8px",
            marginBottom: "2rem"
          }}
        >
          <h4>Formula:</h4>
          <div className="calculations-formula" style={{
              fontFamily: "monospace",
              fontSize: "1.1rem",
              margin: "1rem 0",
              overflowX: "auto",
              WebkitOverflowScrolling: "touch"
            }}
          >
            f2 = 50 × log<sub>10</sub>
            {"{[1 + (1/n)Σ(Rt - Tt)²]^(-0.5) × 100}"}
          </div>
          <p style={{ fontSize: "0.9rem", color: "#666" }}>
            Where: Rt = reference %, Tt = test %, n = number of time points
            <br />
            Only time points where either product ≤85% dissolved are used
          </p>
        </div>

        <div style={{ marginBottom: "2rem" }}>
          <h4>Dissolution Data (%)</h4>
          <div className="calculations-table responsive-table">
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr style={{ background: "#f8f9fa" }}>
                <th style={{ padding: "0.75rem", border: "1px solid #dee2e6" }}>
                  Time (min)
                </th>
                <th style={{ padding: "0.75rem", border: "1px solid #dee2e6" }}>
                  Reference Product (%)
                </th>
                <th style={{ padding: "0.75rem", border: "1px solid #dee2e6" }}>
                  Test Product (%)
                </th>
                <th style={{ padding: "0.75rem", border: "1px solid #dee2e6" }}>
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {timePoints.map((point, index) => (
                <tr key={index}>
                  <td
                    style={{ padding: "0.5rem", border: "1px solid #dee2e6" }}
                  >
                    <input
                      type="number"
                      value={point.time}
                      onChange={(e) =>
                        updateTimePoint(index, "time", e.target.value)
                      }
                      style={{
                        width: "80px",
                        padding: "0.25rem",
                        border: "1px solid #ddd",
                        borderRadius: "4px",
                      }}
                    />
                  </td>
                  <td
                    style={{ padding: "0.5rem", border: "1px solid #dee2e6" }}
                  >
                    <input
                      type="number"
                      step="0.1"
                      value={point.reference}
                      onChange={(e) =>
                        updateTimePoint(index, "reference", e.target.value)
                      }
                      style={{
                        width: "100px",
                        padding: "0.25rem",
                        border: "1px solid #ddd",
                        borderRadius: "4px",
                      }}
                      placeholder="0.0"
                    />
                  </td>
                  <td
                    style={{ padding: "0.5rem", border: "1px solid #dee2e6" }}
                  >
                    <input
                      type="number"
                      step="0.1"
                      value={point.test}
                      onChange={(e) =>
                        updateTimePoint(index, "test", e.target.value)
                      }
                      style={{
                        width: "100px",
                        padding: "0.25rem",
                        border: "1px solid #ddd",
                        borderRadius: "4px",
                      }}
                      placeholder="0.0"
                    />
                  </td>
                  <td
                    style={{
                      padding: "0.5rem",
                      border: "1px solid #dee2e6",
                      textAlign: "center",
                    }}
                  >
                    <button
                      onClick={() => removeTimePoint(index)}
                      disabled={timePoints.length <= 1}
                      style={{
                        padding: "0.25rem 0.5rem",
                        fontSize: "0.8rem",
                        background:
                          timePoints.length <= 1 ? "#f8f9fa" : "#dc3545",
                        color: timePoints.length <= 1 ? "#666" : "white",
                        border: "none",
                        borderRadius: "4px",
                        cursor:
                          timePoints.length <= 1 ? "not-allowed" : "pointer",
                      }}
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
            </table>
          </div>

          <div className="upload-buttons" style={{ marginTop: "1rem", display: "flex", gap: "1rem" }}>
            <button
              className="btn btn-success touch-target"
              onClick={addTimePoint}
            >
              + Add Time Point
            </button>
            <button
              className="btn touch-target"
              onClick={calculateF2}
            >
              🧮 Calculate f2
            </button>
            <button
              className="btn touch-target"
              onClick={clearAll}
              style={{
                background: "#6c757d",
                color: "white"
              }}
            >
              Clear All
            </button>
          </div>
        </div>

        {f2Result && (
          <div className="calculations-result responsive-card"
            style={{
              borderRadius: "8px",
              background:
                f2Result.interpretation === "Similar" ? "#d4edda" : "#f8d7da",
              border: `2px solid ${
                f2Result.interpretation === "Similar" ? "#c3e6cb" : "#f5c6cb"
              }`,
              marginBottom: "2rem",
            }}
          >
            <h4
              style={{
                margin: "0 0 1rem 0",
                color:
                  f2Result.interpretation === "Similar" ? "#155724" : "#721c24",
              }}
            >
              f2 Calculation Result
            </h4>
            <div className="responsive-grid">
              <div>
                <strong>f2 Value:</strong> {f2Result.value}
              </div>
              <div>
                <strong>Interpretation:</strong>
                <span
                  style={{
                    marginLeft: "0.5rem",
                    padding: "0.2rem 0.5rem",
                    borderRadius: "12px",
                    background:
                      f2Result.interpretation === "Similar"
                        ? "#28a745"
                        : "#dc3545",
                    color: "white",
                    fontSize: "0.8rem",
                    fontWeight: "bold",
                  }}
                >
                  {f2Result.interpretation}
                </span>
              </div>
              <div>
                <strong>Points Used:</strong> {f2Result.pointsUsed}/
                {f2Result.totalPoints}
              </div>
            </div>
            <div
              style={{ marginTop: "1rem", fontSize: "0.9rem", color: "#666" }}
            >
              <strong>Criteria:</strong> f2 ≥ 50 indicates similar dissolution
              profiles
              {f2Result.pointsUsed < f2Result.totalPoints && (
                <div style={{ marginTop: "0.5rem", color: "#856404" }}>
                  ⚠️ Some time points excluded (>85% dissolution in both
                  products)
                </div>
              )}
            </div>
          </div>
        )}

        </div>
      )}
    </div>
  );
};

const Calculations = () => {
  const [expandedCalculations, setExpandedCalculations] = useState({ f2: false });

  const toggleCalculation = (calculationType) => {
    setExpandedCalculations(prev => ({
      ...prev,
      [calculationType]: !prev[calculationType]
    }));
  };

  const calculations = [
    {
      id: 'f2',
      component: F2Calculator
    }
    // Add more calculations here in the future
  ];

  return (
    <div className="container">
      <div className="card">
        <h2>📊 Pharmaceutical Calculations</h2>
        <p>Select a calculation type to expand and use</p>
        
        <div className="calculations-list" style={{ marginTop: "2rem" }}>
          {calculations.map(({ id, component: Component }) => (
            <Component
              key={id}
              isExpanded={expandedCalculations[id]}
              onToggle={() => toggleCalculation(id)}
            />
          ))}
        </div>


      </div>
    </div>
  );
};

export default Calculations;
