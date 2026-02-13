const mongoose = require('mongoose');

// Initialize MongoDB connection if URI is provided
if (process.env.MONGODB_URI) {
  mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));
}

const leadSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
    trim: true,
    minlength: 2
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true
  },
  phone: {
    type: String,
    trim: true,
    default: null
  },
  orgType: {
    type: String,
    required: true,
    enum: ['Student', 'Faculty', 'Industry', 'Regulatory', 'Other']
  },
  interest: {
    type: String,
    required: true,
    enum: ['Dossier', 'School', 'Regulations', 'RMS', 'Consulting', 'Other']
  },
  message: {
    type: String,
    required: true,
    trim: true,
    minlength: 10
  },
  source: {
    type: String,
    default: 'landing'
  },
  page: {
    type: String,
    default: '/contact'
  },
  status: {
    type: String,
    enum: ['new', 'contacted', 'won', 'closed'],
    default: 'new'
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Add indexes for common queries
leadSchema.index({ email: 1 });
leadSchema.index({ createdAt: -1 });
leadSchema.index({ status: 1 });

const Lead = mongoose.model('Lead', leadSchema);

module.exports = Lead;