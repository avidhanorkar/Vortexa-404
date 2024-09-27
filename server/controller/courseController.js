const Course = require('../models/course');

// Create new course
exports.createCourse = async (req, res) => {
  const { title, description, teacher_id, content } = req.body;
  
  try {
    const course = new Course({ title, description, teacher_id, content });
    await course.save();
    res.status(201).json(course);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Get all courses
exports.getCourses = async (req, res) => {
  try {
    const courses = await Course.find();
    res.status(200).json(courses);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Get a single course by ID
exports.getCourseById = async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);
    res.status(200).json(course);
  } catch (err) {
    res.status(404).json({ error: 'Course not found' });
  }
};
