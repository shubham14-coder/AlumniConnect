const mongoose = require('mongoose');

const alumniSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  graduationYear: {
    type: Number,
    required: [true, 'Graduation year is required']
  },
  department: {
    type: String,
    required: [true, 'Department is required']
  },
  currentCompany: {
    type: String,
    default: null
  },
  currentRole: {
    type: String,
    default: null
  },
  professionalSkills: [String],
  achievements: [{
    title: String,
    description: String,
    year: Number
  }],
  socialLinks: {
    linkedin: String,
    github: String,
    portfolio: String
  },
  mentorship: {
    available: {
      type: Boolean,
      default: false
    },
    areas: [String]
  },
  isVerified: {
    type: Boolean,
    default: false
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Alumni', alumniSchema);