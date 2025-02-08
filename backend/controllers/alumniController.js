const Alumni = require('../models/Alumni');
const User = require('../models/User');

exports.createAlumniProfile = async (req, res) => {
  try {
    const { 
      graduationYear, 
      department, 
      currentCompany, 
      currentRole, 
      professionalSkills,
      achievements,
      socialLinks,
      mentorship
    } = req.body;

    const existingAlumni = await Alumni.findOne({ user: req.user.id });
    if (existingAlumni) {
      return res.status(400).json({
        success: false,
        message: 'Alumni profile already exists'
      });
    }

   
    const alumniProfile = new Alumni({
      user: req.user.id,
      graduationYear,
      department,
      currentCompany,
      currentRole,
      professionalSkills,
      achievements,
      socialLinks,
      mentorship
    });

    await alumniProfile.save();

    res.status(201).json({
      success: true,
      message: 'Alumni profile created successfully',
      data: alumniProfile
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};


exports.getAlumniProfile = async (req, res) => {
  try {
    const alumniProfile = await Alumni.findOne({ user: req.user.id })
      .populate('user', 'name email');

    if (!alumniProfile) {
      return res.status(404).json({
        success: false,
        message: 'Alumni profile not found'
      });
    }

    res.status(200).json({
      success: true,
      data: alumniProfile
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

exports.updateAlumniProfile = async (req, res) => {
  try {
    const updateData = req.body;

    const updatedAlumni = await Alumni.findOneAndUpdate(
      { user: req.user.id },
      { $set: updateData },
      { new: true, runValidators: true }
    );

    if (!updatedAlumni) {
      return res.status(404).json({
        success: false,
        message: 'Alumni profile not found'
      });
    }

    res.status(200).json({
      success: true,
      message: 'Alumni profile updated successfully',
      data: updatedAlumni
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

exports.getAllAlumni = async (req, res) => {
  try {
    const { 
      department, 
      graduationYear, 
      page = 1, 
      limit = 10 
    } = req.query;

    const query = {};
    if (department) query.department = department;
    if (graduationYear) query.graduationYear = graduationYear;

    const alumni = await Alumni.find(query)
      .populate('user', 'name email')
      .skip((page - 1) * limit)
      .limit(Number(limit))
      .sort({ graduationYear: -1 });

    const total = await Alumni.countDocuments(query);

    res.status(200).json({
      success: true,
      count: alumni.length,
      total,
      data: alumni
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};