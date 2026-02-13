const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';

const apiRequest = async (endpoint, options = {}) => {
  const token = localStorage.getItem('token');
  const config = {
    headers: {
      'Content-Type': 'application/json',
      ...(token && { Authorization: `Bearer ${token}` }),
    },
    ...options,
  };

  const response = await fetch(`${API_BASE_URL}${endpoint}`, config);
  const data = await response.json();
  
  if (!response.ok) {
    throw { response: { data } };
  }
  
  return data;
};

// Auth API
export const authAPI = {
  login: async (credentials) => {
    return await apiRequest('/auth/login', {
      method: 'POST',
      body: JSON.stringify(credentials),
    });
  },
  
  register: async (userData) => {
    return await apiRequest('/auth/signup', {
      method: 'POST',
      body: JSON.stringify(userData),
    });
  },
  
  verifyToken: async () => {
    return await apiRequest('/auth/verify');
  }
};

export const progressAPI = {
  getAll: async () => {
    return await apiRequest('/student/progress');
  },
  getCourse: async (courseId) => {
    return await apiRequest(`/student/progress/${courseId}`);
  },
  updateCourse: async (payload) => {
    return await apiRequest('/student/progress', {
      method: 'POST',
      body: JSON.stringify(payload),
    });
  }
};

export const coursesAPI = {
  getBySlug: async (slug) => {
    return await apiRequest(`/courses/slug/${slug}`);
  }
};

export const cohortsAPI = {
  getByCourse: async (courseId) => {
    return await apiRequest(`/cohorts/course/${courseId}`);
  },
  enroll: async (cohortId) => {
    return await apiRequest(`/cohorts/${cohortId}/enroll`, {
      method: 'POST'
    });
  }
};

export const studentAPI = {
  updateInterests: async (interestedCourses) => {
    return await apiRequest('/student/interests', {
      method: 'PATCH',
      body: JSON.stringify({ interestedCourses })
    });
  },
  getEnrollments: async () => {
    return await apiRequest('/student/enrollments');
  }
};

export default apiRequest;
