const Course = require('../models/Course')

//@DELETE
//Delete one course
const deleteCourse = async (req, res) => {
  try {
    const deletedCourse = await Course.deleteOne({ _id: req.params.id })

    res.json({
      status: 'Successful',
      message: 'Course successfully deleted',
      data: {
        deletedCourse,
      },
    })
  } catch (err) {
    /* handle error */
    res.json({
      status: 'Unsuccessful',
      message: err.message,
    })
  }
}

module.exports = deleteCourse
