const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
  title: { 
    type: String, 
    required: [true, 'Job title is required'],
    trim: true
  },
  company: { 
    type: String, 
    required: [true, 'Company name is required'],
    trim: true
  },
  description: { 
    type: String, 
    required: [true, 'Job description is required']
  },
  location: { 
    type: String, 
    required: [true, 'Job location is required']
  },
  requirements: [String],
  salary: {
    min: Number,
    max: Number
  },
  applicationDeadline: Date,
  postedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  createdAt: { 
    type: Date, 
    default: Date.now 
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Job', jobSchema);