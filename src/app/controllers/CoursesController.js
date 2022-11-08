const Course = require("../models/Course");
const { mongoSeeToObject } = require("../../util/monggosee");

class CoursesController {
  // [GET] /courses/: slug
  show(req, res, next) {
    Course.findOne({ slug: req.params.slug })
      .then((couses) =>
        res.render("./couses/show", { couses: mongoSeeToObject(couses) })
      )
      .catch(next);
  }
  // [GET] /courses/create
  create(req, res, next) {
    res.render("couses/create");
  }
  // [POST] /courses/store
  store(req, res, next) {
    const course = new Course(req.body);
    // course.save(function (err) {
    //   if (err) return handleError(err);
    // });
    course.save().then(() => res.redirect("/"));
  }
}

module.exports = new CoursesController();
