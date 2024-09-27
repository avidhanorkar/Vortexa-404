const express = require('express');
const router = express.Router();
const courseController = require('../controllers/courseController');

// Create a new course
router.post('/create', courseController.createCourse);

// Get all courses
router.get('/', courseController.getCourses);

// Get a single course by ID
router.get('/:id', courseController.getCourseById);

// Update a course
router.put('/:id', courseController.updateCourse);

// Delete a course
router.delete('/:id', courseController.deleteCourse);

module.exports = router;
