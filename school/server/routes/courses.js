const express = require('express');
const Course = require('../models/Course');
const Cohort = require('../models/Cohort');

const router = express.Router();

// Get all courses
router.get('/', async (req, res) => {
  try {
    const courses = await Course.find().sort({ created_at: -1 });
    
    // Add next cohort start date for each course
    const coursesWithCohorts = await Promise.all(
      courses.map(async (course) => {
        const nextCohort = await Cohort.findOne({
          course_id: course._id,
          start_date: { $gte: new Date() }
        }).sort({ start_date: 1 });

        return {
          ...course.toObject(),
          nextCohortStartDate: nextCohort?.start_date || null
        };
      })
    );

    res.json(coursesWithCohorts);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Get course by slug
router.get('/slug/:slug', async (req, res) => {
  try {
    const course = await Course.findOne({ slug: req.params.slug });

    if (!course) {
      return res.status(404).json({ message: 'Course not found' });
    }

    res.json(course);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Get course by ID
router.get('/:id', async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);
    
    if (!course) {
      return res.status(404).json({ message: 'Course not found' });
    }

    // Get upcoming cohorts for this course
    const upcomingCohorts = await Cohort.find({
      course_id: course._id,
      start_date: { $gte: new Date() }
    }).sort({ start_date: 1 }).limit(3);

    res.json({
      ...course.toObject(),
      upcomingCohorts
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

module.exports = router;
