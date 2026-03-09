const express = require('express');
const Course = require('../models/Course');
const Cohort = require('../models/Cohort');
const { optionalAuth } = require('../middleware/auth');
const { getSlidesForLanguage } = require('../lib/slideCatalog');

const router = express.Router();

const categoryLabel = (category) => {
  if (category === 'basic' || category === 'Basic Skills') {
    return 'Basic Skills';
  }
  return 'Programming Languages';
};

const mapCourseForClient = ({ course, nextCohort, hasFullAccess }) => {
  const previewPercent = course.preview_percent || 20;
  return {
    _id: course._id,
    id: course.slug,
    slug: course.slug,
    name: course.title,
    title: course.title,
    description: course.description,
    category: categoryLabel(course.category),
    level: course.level || 'Beginner',
    duration: `${course.duration_weeks || 12} weeks`,
    durationWeeks: course.duration_weeks || 12,
    objectives: course.objectives || [],
    outline: course.outline || [],
    color: course.color || '#0b5ed7',
    iconKey: course.icon_key || course.slug,
    nextCohortStartDate: nextCohort?.start_date || null,
    access: {
      previewPercent,
      fullAccessRequiresAuth: true,
      hasFullAccess: Boolean(hasFullAccess)
    },
    payment: {
      learning: 'free',
      certification: 'paid',
      cohortTraining: 'paid'
    }
  };
};

// Get all published courses (guest preview policy included)
router.get('/', optionalAuth, async (req, res) => {
  try {
    const hasFullAccess = Boolean(req.user);
    const courses = await Course.find({ is_published: true }).sort({ sort_order: 1, created_at: -1 });

    // Add next cohort start date for each course
    const coursesWithCohorts = await Promise.all(
      courses.map(async (course) => {
        const nextCohort = await Cohort.findOne({
          course_id: course._id,
          start_date: { $gte: new Date() }
        }).sort({ start_date: 1 });
        return mapCourseForClient({ course, nextCohort, hasFullAccess });
      })
    );

    res.json(coursesWithCohorts);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Get course by slug
router.get('/slug/:slug/slides', optionalAuth, async (req, res) => {
  try {
    const hasFullAccess = Boolean(req.user);
    const course = await Course.findOne({ slug: req.params.slug, is_published: true });

    if (!course) {
      return res.status(404).json({ message: 'Course not found' });
    }

    const allSlides = getSlidesForLanguage(course.slug);
    const totalSlides = allSlides.length;
    const previewPercent = course.preview_percent || 20;
    const accessibleCount = hasFullAccess
      ? totalSlides
      : Math.max(1, Math.ceil((previewPercent / 100) * totalSlides));

    const nextCohort = await Cohort.findOne({
      course_id: course._id,
      start_date: { $gte: new Date() }
    }).sort({ start_date: 1 });

    res.json({
      course: mapCourseForClient({ course, nextCohort, hasFullAccess }),
      slides: allSlides.slice(0, accessibleCount),
      access: {
        isPreviewMode: !hasFullAccess,
        hasFullAccess,
        previewPercent,
        totalSlides,
        accessibleSlides: accessibleCount
      }
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Get course by slug
router.get('/slug/:slug', optionalAuth, async (req, res) => {
  try {
    const hasFullAccess = Boolean(req.user);
    const course = await Course.findOne({ slug: req.params.slug, is_published: true });

    if (!course) {
      return res.status(404).json({ message: 'Course not found' });
    }

    const nextCohort = await Cohort.findOne({
      course_id: course._id,
      start_date: { $gte: new Date() }
    }).sort({ start_date: 1 });

    res.json(mapCourseForClient({ course, nextCohort, hasFullAccess }));
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Get course by ID
router.get('/:id', optionalAuth, async (req, res) => {
  try {
    const hasFullAccess = Boolean(req.user);
    const course = await Course.findById(req.params.id);
    
    if (!course) {
      return res.status(404).json({ message: 'Course not found' });
    }

    // Get upcoming cohorts for this course
    const upcomingCohorts = await Cohort.find({
      course_id: course._id,
      start_date: { $gte: new Date() }
    }).sort({ start_date: 1 }).limit(3);

    res.json({ ...mapCourseForClient({ course, nextCohort: upcomingCohorts[0], hasFullAccess }), upcomingCohorts });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

module.exports = router;
