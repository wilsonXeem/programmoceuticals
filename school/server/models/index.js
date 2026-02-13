const mongoose = require('mongoose');

const enrollmentSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  cohort_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Cohort',
    required: true
  },
  status: {
    type: String,
    default: 'active'
  }
}, {
  timestamps: true
});

const announcementSchema = new mongoose.Schema({
  cohort_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Cohort',
    required: true
  },
  message: {
    type: String,
    required: true
  },
  created_at: {
    type: Date,
    default: Date.now
  }
});

const materialSchema = new mongoose.Schema({
  course_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Course',
    required: true
  },
  title: {
    type: String,
    required: true
  },
  type: {
    type: String,
    enum: ['pdf', 'link'],
    required: true
  },
  url: {
    type: String,
    required: true
  },
  created_at: {
    type: Date,
    default: Date.now
  }
});

module.exports = {
  Enrollment: mongoose.model('Enrollment', enrollmentSchema),
  Announcement: mongoose.model('Announcement', announcementSchema),
  Material: mongoose.model('Material', materialSchema)
};
