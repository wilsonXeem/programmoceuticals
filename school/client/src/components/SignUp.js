import React, { useState } from 'react';
import '../styles/Auth.css';
import { authAPI } from '../services/api';
import { courses } from '../data/courses';

const SignUp = ({ onClose, onSwitchToLogin, setUser }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    interestedCourses: []
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCourseToggle = (courseId) => {
    setFormData(prev => {
      const isSelected = prev.interestedCourses.includes(courseId);
      const interestedCourses = isSelected
        ? prev.interestedCourses.filter((id) => id !== courseId)
        : [...prev.interestedCourses, courseId];
      return {
        ...prev,
        interestedCourses
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      setLoading(false);
      return;
    }

    if (formData.interestedCourses.length === 0) {
      setError('Please select at least one course');
      setLoading(false);
      return;
    }
    
    try {
      const response = await authAPI.register({
        name: formData.name,
        email: formData.email,
        password: formData.password,
        interestedCourses: formData.interestedCourses
      });
      localStorage.setItem('token', response.token);
      localStorage.setItem('user', JSON.stringify(response.user));
      setUser(response.user);
      onClose();
    } catch (err) {
      setError(err.response?.data?.message || 'Registration failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-overlay">
      <div className="auth-modal">
        <button className="close-btn" onClick={onClose}>×</button>
        <h2>Join ProgrammoCeuticals</h2>
        <p className="auth-subtitle">Create your account to enroll in cohort courses</p>
        
        {error && <div style={{ color: '#dc3545', marginBottom: '1rem', textAlign: 'center' }}>{error}</div>}
        
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </div>
          
          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>
          
          <div className="form-group">
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleInputChange}
              required
            />
          </div>
          
          <div className="form-group">
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="course-selection">
            <h3>Select courses you are interested in</h3>
            <div className="courses-grid">
              {courses.map((course) => (
                <label key={course.id} className="course-checkbox">
                  <input
                    type="checkbox"
                    checked={formData.interestedCourses.includes(course.id)}
                    onChange={() => handleCourseToggle(course.id)}
                  />
                  {course.name}
                </label>
              ))}
            </div>
          </div>
          
          <button type="submit" className="auth-btn" disabled={loading}>
            {loading ? 'Creating Account...' : 'Create Account'}
          </button>
        </form>
        
        <p className="auth-switch">
          Already have an account? 
          <button onClick={onSwitchToLogin} className="switch-btn">Sign In</button>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
