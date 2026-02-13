import React, { useState, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle, faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import './RegulatoryTooltip.css';

const RegulatoryTooltip = ({ 
  children, 
  requirement, 
  position = "right",
  showOnHover = true 
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [tooltipStyle, setTooltipStyle] = useState({});
  const [expandedSections, setExpandedSections] = useState(new Set());
  const triggerRef = useRef(null);
  const hideTimeoutRef = useRef(null);
  
  const toggleSection = (section) => {
    const newExpanded = new Set(expandedSections);
    if (newExpanded.has(section)) {
      newExpanded.delete(section);
    } else {
      newExpanded.add(section);
    }
    setExpandedSections(newExpanded);
  };
  
  const showTooltip = () => {
    if (hideTimeoutRef.current) {
      clearTimeout(hideTimeoutRef.current);
      hideTimeoutRef.current = null;
    }
    setIsVisible(true);
  };
  
  const hideTooltip = () => {
    hideTimeoutRef.current = setTimeout(() => {
      setIsVisible(false);
    }, 200); // 200ms delay
  };
  
  useEffect(() => {
    if (isVisible && triggerRef.current) {
      const rect = triggerRef.current.getBoundingClientRect();
      const tooltipWidth = 400; // max-width from CSS
      const tooltipHeight = 300; // estimated height (increased for better calculation)
      const margin = 4; // Reduced margin for easier mouse movement
      
      let left, top;
      
      // Horizontal positioning
      if (position === 'right') {
        left = rect.right + margin;
        // Adjust if tooltip would go off-screen horizontally
        if (left + tooltipWidth > window.innerWidth) {
          left = rect.left - tooltipWidth - margin;
        }
      } else {
        left = rect.left - tooltipWidth - margin;
        // Adjust if tooltip would go off-screen horizontally
        if (left < 0) {
          left = rect.right + margin;
        }
      }
      
      // Vertical positioning with smart adjustment
      top = rect.top;
      
      // Check if tooltip would go below viewport
      if (top + tooltipHeight > window.innerHeight) {
        // Position above the trigger element
        top = rect.top - tooltipHeight - margin;
        
        // If still above viewport, position at bottom of viewport
        if (top < 0) {
          top = window.innerHeight - tooltipHeight - margin;
        }
      }
      
      // Ensure tooltip doesn't go above viewport
      if (top < margin) {
        top = margin;
      }
      
      setTooltipStyle({ left, top });
    }
  }, [isVisible, position]);
  
  if (!requirement) return children;
  
  return (
    <div className="regulatory-tooltip-wrapper">
      <div 
        ref={triggerRef}
        className="tooltip-trigger"
        onMouseEnter={() => showOnHover && showTooltip()}
        onMouseLeave={() => showOnHover && hideTooltip()}
        onClick={() => !showOnHover && setIsVisible(!isVisible)}
      >
        {children}
        <FontAwesomeIcon 
          icon={faInfoCircle} 
          className={`requirement-indicator ${requirement.mandatory ? 'mandatory' : 'optional'}`}
          title="View regulatory requirements"
        />
      </div>
      
      {isVisible && (
        <div 
          className="tooltip-content" 
          style={{
            ...tooltipStyle,
            position: 'fixed',
            zIndex: 10000,
            maxHeight: '70vh',
            overflowY: 'auto',
            pointerEvents: 'auto'
          }}
          onMouseEnter={() => showTooltip()}
          onMouseLeave={() => showOnHover && hideTooltip()}
        >
          <div className="tooltip-header">
            <h4>{requirement.title}</h4>
            {requirement.mandatory && (
              <span className="mandatory-badge">MANDATORY</span>
            )}
          </div>
          
          <p className="tooltip-description">{requirement.description}</p>
          
          <div className="requirements-list">
            <div 
              className="requirements-header"
              onClick={() => toggleSection('requirements')}
              style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px' }}
            >
              <strong>Required Information ({requirement.requirements.length} items):</strong>
              <FontAwesomeIcon 
                icon={expandedSections.has('requirements') ? faChevronUp : faChevronDown}
                style={{ fontSize: '0.7rem' }}
              />
            </div>
            {expandedSections.has('requirements') && (
              <ul style={{ maxHeight: '200px', overflowY: 'auto', marginTop: '4px' }}>
                {requirement.requirements.map((req, index) => (
                  <li key={index}>{req}</li>
                ))}
              </ul>
            )}
          </div>
          
          {requirement.format && (
            <div className="format-info">
              <strong>Format:</strong> {requirement.format}
            </div>
          )}
          
          {requirement.conditionalText && (
            <div className="conditional-note">
              <em>{requirement.conditionalText}</em>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default RegulatoryTooltip;