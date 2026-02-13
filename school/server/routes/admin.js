const express = require('express');
const Course = require('../models/Course');
const Cohort = require('../models/Cohort');
const Timetable = require('../models/Timetable');
const { Enrollment, Announcement, Material } = require('../models');
const { auth, adminAuth } = require('../middleware/auth');

const router = express.Router();

// Apply auth middleware to all admin routes
router.use(auth);
router.use(adminAuth);

// Create course
router.post('/courses', async (req, res) => {
  try {
    const { title, category, description, slug } = req.body;
    
    const course = new Course({
      title,
      category,
      description,
      slug
    });

    await course.save();
    res.status(201).json(course);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Create cohort
router.post('/cohorts', async (req, res) => {
  try {
    const { course_id, name, start_date, days, start_time, end_time } = req.body;

    // Create timetable
    const timetable = new Timetable({
      days,
      start_time,
      end_time
    });
    await timetable.save();

    // Calculate end date (12 weeks from start)
    const startDate = new Date(start_date);
    const endDate = new Date(startDate);
    endDate.setDate(startDate.getDate() + (12 * 7));

    const cohort = new Cohort({
      course_id,
      name,
      start_date: startDate,
      end_date: endDate,
      timetable_id: timetable._id
    });

    await cohort.save();
    
    const populatedCohort = await Cohort.findById(cohort._id)
      .populate('course_id')
      .populate('timetable_id');

    res.status(201).json(populatedCohort);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Get all cohorts (admin)
router.get('/cohorts', async (req, res) => {
  try {
    const cohorts = await Cohort.find()
      .populate('course_id', 'title')
      .sort({ start_date: -1 });
    
    // Get enrollment counts for each cohort
    const cohortsWithEnrollments = await Promise.all(
      cohorts.map(async (cohort) => {
        const enrollments = await Enrollment.find({ cohort_id: cohort._id })
          .populate('user_id', 'name email');
        
        return {
          ...cohort.toObject(),
          enrolled_students: enrollments.map(e => e.user_id),
          enrollment_count: enrollments.length
        };
      })
    );
    
    res.json({ cohorts: cohortsWithEnrollments });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Enroll student in cohort
router.post('/cohorts/:id/enroll', async (req, res) => {
  try {
    const { user_id } = req.body;
    const cohort_id = req.params.id;

    // Check if already enrolled
    const existingEnrollment = await Enrollment.findOne({ user_id, cohort_id });
    if (existingEnrollment) {
      return res.status(400).json({ message: 'Student already enrolled' });
    }

    const enrollment = new Enrollment({
      user_id,
      cohort_id
    });

    await enrollment.save();
    res.status(201).json(enrollment);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Post announcement
router.post('/announcements', async (req, res) => {
  try {
    const { cohort_id, message } = req.body;

    const announcement = new Announcement({
      cohort_id,
      message
    });

    await announcement.save();
    res.status(201).json(announcement);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Upload material
router.post('/materials', async (req, res) => {
  try {
    const { course_id, title, type, url } = req.body;

    const material = new Material({
      course_id,
      title,
      type,
      url
    });

    await material.save();
    res.status(201).json(material);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

module.exports = router;
