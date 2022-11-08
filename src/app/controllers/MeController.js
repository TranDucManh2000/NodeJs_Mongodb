const Course = require("../models/Course");
const { mutipMongoseeToObject } = require("../../util/monggosee");

class MeController {
  // [GET] me/stored/courses
  storedCourses(req, res, next) {
    Course.find({})
      .then((courses) =>
        res.render("me/stored_couses", {
          courses: mutipMongoseeToObject(courses),
        })
      )
      .catch(next);
  }
}

module.exports = new MeController();
