import React, { useState } from 'react';
import '../styles/AdminDashboard.css';

const AdminDashboard = ({ user }) => {
  const [activeTab, setActiveTab] = useState('cohorts');
  
  const [cohorts, setCohorts] = useState([
    {
      id: 1,
      courseName: 'Python',
      cohortName: 'March 2024 Cohort',
      startDate: '2024-03-15',
      students: [
        { id: 1, name: 'John Doe', email: 'john@example.com', status: 'active' },
        { id: 2, name: 'Jane Smith', email: 'jane@example.com', status: 'completed' }
      ]
    }
  ]);

  const generateCertificate = (studentId, cohortId) => {
    // TODO: Generate certificate PDF
    alert(`Certificate generated for student ${studentId} in cohort ${cohortId}`);
  };

  return (
    <div className="admin-dashboard">
      <div className="admin-header">
        <h1>Admin Dashboard</h1>
        <p>Manage cohorts and generate certificates</p>
      </div>

      <div className="admin-tabs">
        <button 
          className={activeTab === 'cohorts' ? 'active' : ''}
          onClick={() => setActiveTab('cohorts')}
        >
          Manage Cohorts
        </button>
        <button 
          className={activeTab === 'certificates' ? 'active' : ''}
          onClick={() => setActiveTab('certificates')}
        >
          Generate Certificates
        </button>
      </div>

      {activeTab === 'cohorts' && (
        <div className="cohorts-management">
          <h2>Active Cohorts</h2>
          {cohorts.map(cohort => (
            <div key={cohort.id} className="cohort-admin-card">
              <div className="cohort-header">
                <h3>{cohort.courseName} - {cohort.cohortName}</h3>
                <span>Started: {cohort.startDate}</span>
              </div>
              <div className="students-list">
                <h4>Students ({cohort.students.length})</h4>
                {cohort.students.map(student => (
                  <div key={student.id} className="student-row">
                    <span>{student.name}</span>
                    <span>{student.email}</span>
                    <span className={`status ${student.status}`}>{student.status}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      {activeTab === 'certificates' && (
        <div className="certificates-management">
          <h2>Generate Certificates</h2>
          {cohorts.map(cohort => (
            <div key={cohort.id} className="certificate-cohort">
              <h3>{cohort.courseName} - {cohort.cohortName}</h3>
              {cohort.students.map(student => (
                <div key={student.id} className="certificate-row">
                  <span>{student.name}</span>
                  <button 
                    className="generate-cert-btn"
                    onClick={() => generateCertificate(student.id, cohort.id)}
                    disabled={student.status !== 'completed'}
                  >
                    {student.status === 'completed' ? 'Generate Certificate' : 'Not Completed'}
                  </button>
                </div>
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;