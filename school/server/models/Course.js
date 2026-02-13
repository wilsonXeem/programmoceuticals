const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  category: {
    type: String,
    enum: ['basic', 'programming'],
    required: true
  },
  description: {
    type: String,
    required: true
  },
  slug: {
    type: String,
    required: true,
    unique: true
  },
  duration_weeks: {
    type: Number,
    default: 12
  },
  price: {
    type: Number,
    required: true
  },
  created_at: {
    type: Date,
    default: Date.now
  }
});

// Set price based on category before saving
courseSchema.pre('save', function(next) {
  if (!this.slug && this.title) {
    this.slug = this.title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)+/g, '');
  }
  if (this.category === 'basic') {
    this.price = 100000;
  } else if (this.category === 'programming') {
    this.price = 150000;
  }
  this.duration_weeks = 12;
  next();
});

module.exports = mongoose.model('Course', courseSchema);
