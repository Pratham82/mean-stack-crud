const Course = require('../models/Course')

//@PUT
//Update one user
const updateCourse = async (req, res) => {
  const { title, description, percentComplete, favorite } = req.body
  try {
    const updatedCourse = await Course.findByIdAndUpdate(
      // { _id: req.params.id },
      req.params.id,
      {
        $set: {
          title,
          description,
          percentComplete,
          favorite,
        },
      },
      { new: true }
    )
    res.json({
      status: 'Successful',
      message: 'Course successfully updated',
      data: {
        updatedCourse,
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

module.exports = updateCourse
