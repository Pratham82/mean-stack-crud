const Course = require('../models/Course')

//@GET
//Get one user
const getCourse = async (req, res) => {
  try {
    const course = await Course.findById(req.params.id)

    res.status(200).json({
      status: 'Successful',
      message: 'Course Found',
      data: {
        course,
      },
    })
  } catch (err) {
    /* handle error */
    res.status(400).json({
      status: 'Unsuccessful',
      message: err.message,
    })
  }
}

module.exports = getCourse
