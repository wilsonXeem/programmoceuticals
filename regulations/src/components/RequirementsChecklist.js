import React, { useState } from 'react';
import { mapRequirementsToNode } from '../utils/requirementsMapper';

const RequirementsChecklist = ({ nodeId, apiOption, onComplianceChange }) => {
  const [checkedItems, setCheckedItems] = useState({});
  const requirement = mapRequirementsToNode(nodeId, apiOption);

  if (!requirement) {
    return (
      <div style={{ 
        padding: '1rem', 
        textAlign: 'center', 
        color: '#666',
        fontStyle: 'italic' 
      }}>
        No specific requirements defined for this section.
      </div>
    );
  }

  const handleItemCheck = (index, checked) => {
    const newCheckedItems = {
      ...checkedItems,
      [index]: checked
    };
    setCheckedItems(newCheckedItems);
    
    // Calculate compliance percentage
    const totalItems = requirement.requirements.length;
    const checkedCount = Object.values(newCheckedItems).filter(Boolean).length;
    const compliance = (checkedCount / totalItems) * 100;
    
    onComplianceChange?.(nodeId, compliance);
  };

  const getComplianceColor = () => {
    const totalItems = requirement.requirements.length;
    const checkedCount = Object.values(checkedItems).filter(Boolean).length;
    const percentage = (checkedCount / totalItems) * 100;
    
    if (percentage === 100) return '#4caf50';
    if (percentage >= 75) return '#ff9800';
    if (percentage >= 50) return '#ff5722';
    return '#f44336';
  };

  return (
    <div style={{
      border: '1px solid #e0e0e0',
      borderRadius: '8px',
      padding: '1rem',
      backgroundColor: 'white'
    }}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '1rem',
        paddingBottom: '0.5rem',
        borderBottom: '1px solid #eee'
      }}>
        <h4 style={{ margin: 0, color: '#2c3e50' }}>
          {requirement.title}
          {requirement.mandatory && (
            <span style={{
              marginLeft: '8px',
              background: '#d32f2f',
              color: 'white',
              padding: '2px 6px',
              borderRadius: '3px',
              fontSize: '0.6rem',
              fontWeight: 'bold'
            }}>
              MANDATORY
            </span>
          )}
        </h4>
        <div style={{
          fontSize: '0.8rem',
          fontWeight: 'bold',
          color: getComplianceColor()
        }}>
          {Object.values(checkedItems).filter(Boolean).length}/{requirement.requirements.length}
        </div>
      </div>

      <p style={{ 
        fontSize: '0.85rem', 
        color: '#666', 
        margin: '0 0 1rem 0',
        fontStyle: 'italic'
      }}>
        {requirement.description}
      </p>

      <div style={{ marginBottom: '1rem' }}>
        <strong style={{ fontSize: '0.85rem', color: '#2c3e50' }}>
          Required Information:
        </strong>
        <div style={{ marginTop: '0.5rem' }}>
          {requirement.requirements.map((req, index) => (
            <div key={index} style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: '8px',
              marginBottom: '8px',
              padding: '4px',
              borderRadius: '4px',
              backgroundColor: checkedItems[index] ? '#f8f9fa' : 'transparent'
            }}>
              <input
                type="checkbox"
                id={`req-${nodeId}-${index}`}
                checked={checkedItems[index] || false}
                onChange={(e) => handleItemCheck(index, e.target.checked)}
                style={{ marginTop: '2px' }}
              />
              <label 
                htmlFor={`req-${nodeId}-${index}`}
                style={{
                  fontSize: '0.8rem',
                  cursor: 'pointer',
                  textDecoration: checkedItems[index] ? 'line-through' : 'none',
                  color: checkedItems[index] ? '#666' : '#333'
                }}
              >
                {req}
              </label>
            </div>
          ))}
        </div>
      </div>

      {requirement.format && (
        <div style={{
          fontSize: '0.75rem',
          color: '#666',
          padding: '4px 8px',
          backgroundColor: '#f5f5f5',
          borderRadius: '4px',
          marginBottom: '8px'
        }}>
          <strong>Required Format:</strong> {requirement.format}
        </div>
      )}

      {requirement.conditionalText && (
        <div style={{
          fontSize: '0.75rem',
          color: '#856404',
          padding: '6px 8px',
          backgroundColor: '#fff3cd',
          borderLeft: '3px solid #ffc107',
          borderRadius: '4px'
        }}>
          <em>{requirement.conditionalText}</em>
        </div>
      )}
    </div>
  );
};

export default RequirementsChecklist;