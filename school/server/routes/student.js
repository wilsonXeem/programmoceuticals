const express = require('express');
const { Enrollment, Announcement, Material } = require('../models');
const Progress = require('../models/Progress');
const User = require('../models/User');
const Cohort = require('../models/Cohort');
const { auth } = require('../middleware/auth');

const router = express.Router();

// Apply auth middleware to all student routes
router.use(auth);

// Get student dashboard data
router.get('/dashboard', async (req, res) => {
  try {
    const enrollment = await Enrollment.findOne({ 
      user_id: req.user._id,
      status: 'active'
    }).populate({
      path: 'cohort_id',
      populate: [
        { path: 'course_id' },
        { path: 'timetable_id' }
      ]
    });

    if (!enrollment) {
      return res.json({ message: 'No active enrollment found' });
    }

    // Get announcements for the cohort
    const announcements = await Announcement.find({
      cohort_id: enrollment.cohort_id._id
    }).sort({ created_at: -1 }).limit(5);

    res.json({
      course: enrollment.cohort_id.course_id,
      cohort: {
        name: enrollment.cohort_id.name,
        start_date: enrollment.cohort_id.start_date,
        end_date: enrollment.cohort_id.end_date
      },
      timetable: enrollment.cohort_id.timetable_id,
      announcements
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Get student schedule
router.get('/schedule', async (req, res) => {
  try {
    const enrollment = await Enrollment.findOne({ 
      user_id: req.user._id,
      status: 'active'
    }).populate({
      path: 'cohort_id',
      populate: { path: 'timetable_id' }
    });

    if (!enrollment) {
      return res.status(404).json({ message: 'No active enrollment found' });
    }

    res.json({
      cohort: enrollment.cohort_id.name,
      timetable: enrollment.cohort_id.timetable_id
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Get course materials
router.get('/materials', async (req, res) => {
  try {
    const enrollment = await Enrollment.findOne({ 
      user_id: req.user._id,
      status: 'active'
    }).populate('cohort_id');

    if (!enrollment) {
      return res.status(404).json({ message: 'No active enrollment found' });
    }

    const materials = await Material.find({
      course_id: enrollment.cohort_id.course_id
    }).sort({ created_at: -1 });

    res.json(materials);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Get all progress entries for student
router.get('/progress', async (req, res) => {
  try {
    const progress = await Progress.find({ user_id: req.user._id }).sort({ updated_at: -1 });
    res.json({ progress });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Get progress for a specific course
router.get('/progress/:courseId', async (req, res) => {
  try {
    const progress = await Progress.findOne({
      user_id: req.user._id,
      course_id: req.params.courseId
    });
    res.json({ progress });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Upsert progress for a course
router.post('/progress', async (req, res) => {
  try {
    const { courseId, lastSlideIndex, completedSlides, totalSlides } = req.body;

    const progress = await Progress.findOneAndUpdate(
      { user_id: req.user._id, course_id: courseId },
      {
        course_id: courseId,
        last_slide_index: lastSlideIndex,
        completed_slides: completedSlides,
        total_slides: totalSlides,
        updated_at: new Date()
      },
      { new: true, upsert: true }
    );

    res.json({ progress });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Get student enrollments with cohorts and courses
router.get('/enrollments', async (req, res) => {
  try {
    const enrollments = await Enrollment.find({ user_id: req.user._id })
      .populate({
        path: 'cohort_id',
        populate: { path: 'course_id' }
      })
      .sort({ created_at: -1 });

    res.json({ enrollments });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Update student interested courses
router.patch('/interests', async (req, res) => {
  try {
    const { interestedCourses } = req.body;
    const nextCourses = Array.isArray(interestedCourses) ? interestedCourses : [];

    const user = await User.findByIdAndUpdate(
      req.user._id,
      { interested_courses: nextCourses },
      { new: true }
    );

    res.json({
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        interestedCourses: user.interested_courses
      }
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

module.exports = router;
