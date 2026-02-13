import React, { useState, useCallback } from 'react';
import useAutoSave from '../hooks/useAutoSave';
import EnhancedDragDrop from './EnhancedDragDrop';

const DynamicFormBuilder = ({ moduleConfig, onSave, initialData = {} }) => {
  const [formData, setFormData] = useState(initialData);
  const [errors, setErrors] = useState({});

  const saveToStorage = useCallback(async (data) => {
    localStorage.setItem(`form_${moduleConfig.id}`, JSON.stringify(data));
    if (onSave) {
      await onSave(data);
    }
  }, [moduleConfig.id, onSave]);

  const { forceSave } = useAutoSave(formData, saveToStorage);

  const updateField = useCallback((fieldId, value) => {
    setFormData(prev => ({
      ...prev,
      [fieldId]: value
    }));
    
    // Clear error when field is updated
    if (errors[fieldId]) {
      setErrors(prev => ({
        ...prev,
        [fieldId]: null
      }));
    }
  }, [errors]);

  const validateField = useCallback((field, value) => {
    if (field.required && (!value || value.toString().trim() === '')) {
      return `${field.label} is required`;
    }
    
    if (field.type === 'email' && value && !/\S+@\S+\.\S+/.test(value)) {
      return 'Please enter a valid email address';
    }
    
    if (field.minLength && value && value.length < field.minLength) {
      return `${field.label} must be at least ${field.minLength} characters`;
    }
    
    return null;
  }, []);

  const renderField = useCallback((field) => {
    const value = formData[field.id] || '';
    const error = errors[field.id];

    const commonProps = {
      id: field.id,
      value,
      onChange: (e) => updateField(field.id, e.target.value),
      style: {
        width: '100%',
        padding: '8px 12px',
        border: `1px solid ${error ? '#dc3545' : '#ddd'}`,
        borderRadius: '4px',
        fontSize: '14px'
      }
    };

    switch (field.type) {
      case 'text':
      case 'email':
        return (
          <input
            type={field.type}
            placeholder={field.placeholder}
            {...commonProps}
          />
        );
      
      case 'textarea':
        return (
          <textarea
            rows={field.rows || 4}
            placeholder={field.placeholder}
            {...commonProps}
          />
        );
      
      case 'select':
        return (
          <select {...commonProps}>
            <option value="">Select {field.label}</option>
            {field.options?.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        );
      
      case 'file':
        return (
          <EnhancedDragDrop
            onFilesSelected={(files) => updateField(field.id, files)}
            acceptedTypes={field.acceptedTypes || ['.pdf', '.doc', '.docx']}
            maxFileSize={field.maxFileSize || 50 * 1024 * 1024}
            multiple={field.multiple || false}
          >
            <div>
              <div style={{ fontSize: '24px', marginBottom: '8px' }}>📎</div>
              <p style={{ margin: 0, fontSize: '14px', color: '#666' }}>
                {value ? `${Array.isArray(value) ? value.length : 1} file(s) selected` : `Upload ${field.label}`}
              </p>
            </div>
          </EnhancedDragDrop>
        );
      
      case 'checkbox':
        return (
          <label style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <input
              type="checkbox"
              checked={value || false}
              onChange={(e) => updateField(field.id, e.target.checked)}
            />
            <span style={{ fontSize: '14px' }}>{field.checkboxLabel}</span>
          </label>
        );
      
      default:
        return <div>Unsupported field type: {field.type}</div>;
    }
  }, [formData, errors, updateField]);

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    
    const newErrors = {};
    moduleConfig.fields.forEach(field => {
      const error = validateField(field, formData[field.id]);
      if (error) {
        newErrors[field.id] = error;
      }
    });

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      forceSave();
      alert('Form saved successfully!');
    }
  }, [moduleConfig.fields, formData, validateField, forceSave]);

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
      <div style={{
        backgroundColor: 'white',
        borderRadius: '8px',
        padding: '24px',
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
        borderTop: '4px solid #193441'
      }}>
        <h2 style={{
          fontSize: '20px',
          fontWeight: '600',
          color: '#193441',
          margin: '0 0 8px 0'
        }}>
          {moduleConfig.title}
        </h2>
        
        {moduleConfig.description && (
          <p style={{
            fontSize: '14px',
            color: '#666',
            margin: '0 0 24px 0'
          }}>
            {moduleConfig.description}
          </p>
        )}

        <form onSubmit={handleSubmit}>
          {moduleConfig.fields.map(field => (
            <div key={field.id} style={{ marginBottom: '20px' }}>
              <label style={{
                display: 'block',
                fontSize: '14px',
                fontWeight: '500',
                color: '#333',
                marginBottom: '6px'
              }}>
                {field.label}
                {field.required && <span style={{ color: '#dc3545' }}>*</span>}
              </label>
              
              {renderField(field)}
              
              {errors[field.id] && (
                <div style={{
                  fontSize: '12px',
                  color: '#dc3545',
                  marginTop: '4px'
                }}>
                  {errors[field.id]}
                </div>
              )}
              
              {field.helpText && (
                <div style={{
                  fontSize: '12px',
                  color: '#666',
                  marginTop: '4px'
                }}>
                  {field.helpText}
                </div>
              )}
            </div>
          ))}

          <div style={{
            display: 'flex',
            gap: '12px',
            marginTop: '24px',
            paddingTop: '20px',
            borderTop: '1px solid #eee'
          }}>
            <button
              type="submit"
              style={{
                padding: '10px 20px',
                fontSize: '14px',
                fontWeight: '600',
                backgroundColor: '#193441',
                color: 'white',
                border: 'none',
                borderRadius: '6px',
                cursor: 'pointer'
              }}
            >
              Save Form
            </button>
            
            <button
              type="button"
              onClick={forceSave}
              style={{
                padding: '10px 20px',
                fontSize: '14px',
                fontWeight: '600',
                backgroundColor: '#6c757d',
                color: 'white',
                border: 'none',
                borderRadius: '6px',
                cursor: 'pointer'
              }}
            >
              Save Now
            </button>
          </div>
        </form>

        <div style={{
          fontSize: '12px',
          color: '#666',
          marginTop: '12px',
          textAlign: 'center'
        }}>
          ✓ Auto-saves every 30 seconds
        </div>
      </div>
    </div>
  );
};

export default DynamicFormBuilder;