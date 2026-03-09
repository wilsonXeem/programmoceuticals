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
    const requestError = new Error(data?.message || 'Request failed');
    requestError.response = { data, status: response.status };
    throw requestError;
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
  list: async () => {
    return await apiRequest('/courses');
  },
  getSlidesBySlug: async (slug) => {
    return await apiRequest(`/courses/slug/${slug}/slides`);
  },
  getBySlug: async (slug) => {
    return await apiRequest(`/courses/slug/${slug}`);
  }
};

export const certificatesAPI = {
  verify: async (certificateNumber) => {
    const number = encodeURIComponent(String(certificateNumber || '').trim());
    return await apiRequest(`/certificates/verify/${number}`);
  }
};

export const cohortsAPI = {
  getByCourse: async (courseId) => {
    return await apiRequest(`/cohorts/course/${courseId}`);
  },
  submitApplication: async (payload) => {
    return await apiRequest('/cohorts/applications', {
      method: 'POST',
      body: JSON.stringify(payload)
    });
  },
  getMyApplications: async () => {
    return await apiRequest('/cohorts/applications/my');
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
  },
  getCertificates: async () => {
    return await apiRequest('/student/certificates');
  },
  getPayments: async () => {
    return await apiRequest('/student/payments');
  },
  initiatePayment: async (payload) => {
    return await apiRequest('/student/payments/initiate', {
      method: 'POST',
      body: JSON.stringify(payload)
    });
  },
  verifyPayment: async (reference) => {
    return await apiRequest(
      `/student/payments/verify/${encodeURIComponent(String(reference || '').trim())}`
    );
  },
  submitPaymentProof: async (paymentId, payload) => {
    return await apiRequest(`/student/payments/${paymentId}/proof`, {
      method: 'PATCH',
      body: JSON.stringify(payload)
    });
  },
  getNotifications: async (limit = 30) => {
    return await apiRequest(`/student/notifications?limit=${limit}`);
  },
  markNotificationRead: async (notificationId) => {
    return await apiRequest(`/student/notifications/${notificationId}/read`, {
      method: 'PATCH'
    });
  },
  markAllNotificationsRead: async () => {
    return await apiRequest('/student/notifications/read-all', {
      method: 'PATCH'
    });
  },
  getWhiteboardNote: async (courseId, slideIndex) => {
    return await apiRequest(`/student/whiteboard/${courseId}/${slideIndex}`);
  },
  saveWhiteboardNote: async (courseId, slideIndex, snapshot) => {
    return await apiRequest(`/student/whiteboard/${courseId}/${slideIndex}`, {
      method: 'PUT',
      body: JSON.stringify({ snapshot })
    });
  }
};

export const adminAPI = {
  getOverview: async () => {
    return await apiRequest('/admin/overview');
  },
  getStudents: async () => {
    return await apiRequest('/admin/students');
  },
  getCourses: async () => {
    return await apiRequest('/admin/courses');
  },
  createCourse: async (payload) => {
    return await apiRequest('/admin/courses', {
      method: 'POST',
      body: JSON.stringify(payload)
    });
  },
  updateCourse: async (courseId, payload) => {
    return await apiRequest(`/admin/courses/${courseId}`, {
      method: 'PATCH',
      body: JSON.stringify(payload)
    });
  },
  unpublishCourse: async (courseId) => {
    return await apiRequest(`/admin/courses/${courseId}`, {
      method: 'DELETE'
    });
  },
  publishCourse: async (courseId) => {
    return await apiRequest(`/admin/courses/${courseId}/publish`, {
      method: 'POST'
    });
  },
  getCohorts: async () => {
    return await apiRequest('/admin/cohorts');
  },
  getCohortApplications: async () => {
    return await apiRequest('/admin/cohort-applications');
  },
  updateCohortApplication: async (applicationId, payload) => {
    return await apiRequest(`/admin/cohort-applications/${applicationId}`, {
      method: 'PATCH',
      body: JSON.stringify(payload)
    });
  },
  getPayments: async () => {
    return await apiRequest('/admin/payments');
  },
  updatePayment: async (paymentId, payload) => {
    return await apiRequest(`/admin/payments/${paymentId}`, {
      method: 'PATCH',
      body: JSON.stringify(payload)
    });
  },
  createCohort: async (payload) => {
    return await apiRequest('/admin/cohorts', {
      method: 'POST',
      body: JSON.stringify(payload)
    });
  },
  updateCohort: async (cohortId, payload) => {
    return await apiRequest(`/admin/cohorts/${cohortId}`, {
      method: 'PATCH',
      body: JSON.stringify(payload)
    });
  },
  enrollStudent: async (cohortId, payload) => {
    return await apiRequest(`/admin/cohorts/${cohortId}/enroll`, {
      method: 'POST',
      body: JSON.stringify(payload)
    });
  },
  updateEnrollmentStatus: async (enrollmentId, status) => {
    return await apiRequest(`/admin/enrollments/${enrollmentId}`, {
      method: 'PATCH',
      body: JSON.stringify({ status })
    });
  },
  getCertificates: async () => {
    return await apiRequest('/admin/certificates');
  },
  issueCertificate: async (enrollmentId) => {
    return await apiRequest('/admin/certificates', {
      method: 'POST',
      body: JSON.stringify({ enrollmentId })
    });
  }
};

export default apiRequest;
