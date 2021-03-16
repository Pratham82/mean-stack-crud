const express = require('express')
const getAllCourses = require('../controllers/getAllCourses')
const getCourse = require('../controllers/getCourse')
const createNewCourse = require('../controllers/createNewCourse')
const updateCourse = require('../controllers/updateCourse')
const deleteCourse = require('../controllers/deleteCourse')

const router = express.Router()

router.get('/', getAllCourses)
router.get('/:id', getCourse)
router.post('/', createNewCourse)
router.put('/:id', updateCourse)
router.delete('/:id', deleteCourse)

module.exports = router
