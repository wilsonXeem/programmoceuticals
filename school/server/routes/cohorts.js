const express = require('express');
const Cohort = require('../models/Cohort');
const Course = require('../models/Course');
const { Enrollment } = require('../models');
const auth = require('../middleware/auth');

const router = express.Router();

// Get cohorts for a specific course (public)
router.get('/course/:courseId', async (req, res) => {
  try {
    const cohorts = await Cohort.find({ 
      course_id: req.params.courseId,
      status: { $in: ['upcoming', 'active'] }
    })
    .populate('course_id', 'title')
    .sort({ start_date: 1 });
    
    // Add enrollment counts
    const cohortsWithCounts = await Promise.all(
      cohorts.map(async (cohort) => {
        const enrollmentCount = await Enrollment.countDocuments({ cohort_id: cohort._id });
        return {
          ...cohort.toObject(),
          enrollment_count: enrollmentCount,
          available_slots: cohort.max_students - enrollmentCount
        };
      })
    );
    
    res.json({ cohorts: cohortsWithCounts });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Enroll in cohort (requires auth)
router.post('/:cohortId/enroll', auth, async (req, res) => {
  try {
    const cohortId = req.params.cohortId;
    const userId = req.user.id;
    
    // Check if cohort exists
    const cohort = await Cohort.findById(cohortId);
    if (!cohort) {
      return res.status(404).json({ message: 'Cohort not found' });
    }
    
    // Check if already enrolled
    const existingEnrollment = await Enrollment.findOne({ 
      user_id: userId, 
      cohort_id: cohortId 
    });
    
    if (existingEnrollment) {
      return res.status(400).json({ message: 'Already enrolled in this cohort' });
    }
    
    // Check if cohort is full
    const enrollmentCount = await Enrollment.countDocuments({ cohort_id: cohortId });
    if (enrollmentCount >= cohort.max_students) {
      return res.status(400).json({ message: 'Cohort is full' });
    }
    
    // Create enrollment
    const enrollment = new Enrollment({
      user_id: userId,
      cohort_id: cohortId
    });
    
    await enrollment.save();
    
    res.status(201).json({ 
      message: 'Successfully enrolled in cohort',
      enrollment 
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

module.exports = router;