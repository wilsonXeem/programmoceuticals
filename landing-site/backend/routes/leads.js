const express = require('express');
const { body, validationResult } = require('express-validator');
const emailService = require('../services/emailService');
const Lead = require('../models/Lead');

const router = express.Router();

// Validation rules
const leadValidation = [
  body('fullName')
    .trim()
    .isLength({ min: 2 })
    .withMessage('Full name must be at least 2 characters'),
  body('email')
    .isEmail()
    .normalizeEmail()
    .withMessage('Please provide a valid email address'),
  body('phone')
    .optional()
    .trim(),
  body('orgType')
    .isIn(['Student', 'Faculty', 'Industry', 'Regulatory', 'Other'])
    .withMessage('Invalid organization type'),
  body('interest')
    .isIn(['Dossier', 'School', 'Regulations', 'RMS', 'Consulting', 'Other'])
    .withMessage('Invalid interest selection'),
  body('message')
    .trim()
    .isLength({ min: 10 })
    .withMessage('Message must be at least 10 characters'),
  body('source')
    .optional()
    .default('landing'),
  body('page')
    .optional()
    .default('/contact')
];

// POST /api/leads
router.post('/', leadValidation, async (req, res) => {
  try {
    // Check validation results
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        ok: false,
        errors: errors.array()
      });
    }

    const leadData = {
      fullName: req.body.fullName,
      email: req.body.email,
      phone: req.body.phone || null,
      orgType: req.body.orgType,
      interest: req.body.interest,
      message: req.body.message,
      source: req.body.source || 'landing',
      page: req.body.page || '/contact',
      createdAt: new Date()
    };

    // Save to database if MongoDB is configured
    let leadId = null;
    if (process.env.MONGODB_URI) {
      try {
        const lead = new Lead(leadData);
        const savedLead = await lead.save();
        leadId = savedLead._id;
      } catch (dbError) {
        console.error('Database save error:', dbError);
        // Continue without failing - email is more important
      }
    }

    // Send email notification
    try {
      await emailService.sendLeadNotification(leadData);
    } catch (emailError) {
      console.error('Email send error:', emailError);
      // Don't fail the request if email fails
    }

    res.status(201).json({
      ok: true,
      message: 'Lead submitted successfully',
      id: leadId
    });

  } catch (error) {
    console.error('Lead submission error:', error);
    res.status(500).json({
      ok: false,
      error: 'Failed to submit lead'
    });
  }
});

module.exports = router;