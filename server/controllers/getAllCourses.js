const Course = require('../models/Course')

//@GET
//GetAll users
const getAllCourses = async (_, res) => {
  try {
    const allCourses = await Course.find()
    res.json({
      status: 'Successful',
      message: 'All Courses',
      courses: allCourses,
    })
  } catch (err) {
    /* handle error */
    res.json({
      status: 'Unsuccessful',
      message: err.message,
    })
  }
}

module.exports = getAllCourses
