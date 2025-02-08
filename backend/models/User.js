const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    lowercase: true,
    trim: true
  },
  password: {
    type: String,
    required: [true, 'Password is required'],
    minlength: [6, 'Password must be at least 6 characters']
  },
  graduationYear: {
    type: Number,
    required: [true, 'Graduation year is required']
  },
  specialization: {
    type: String,
    required: [true, 'Specialization is required']
  },
  location: {
    type: String,
    required: [true, 'Location is required']
  },
  profilePicture: {
    type: String,
    default: 'default-profile.png'
  },
  bio: {
    type: String,
    maxlength: [500, 'Bio cannot exceed 500 characters']
  },
  skills: [String],
  contactInfo: {
    linkedin: String,
    phone: String
  },
  role: {
    type: String,
    enum: ['alumni', 'student', 'admin'],
    default: 'alumni'
  },
  isVerified: {
    type: Boolean,
    default: false
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('User', userSchema);