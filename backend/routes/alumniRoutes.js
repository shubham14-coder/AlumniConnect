const express = require('express');
const router = express.Router();
const {
  createAlumniProfile,
  getAlumniProfile,
  updateAlumniProfile,
  getAllAlumni
} = require('../controllers/alumniController');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/profile', authMiddleware, createAlumniProfile);
router.get('/profile', authMiddleware, getAlumniProfile);
router.put('/profile', authMiddleware, updateAlumniProfile);

router.get('/', getAllAlumni);

module.exports = router;