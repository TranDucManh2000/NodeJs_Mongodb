const Course = require("../models/Course");
const { mutipMongoseeToObject } = require("../../util/monggosee");

class SiteController {
  // [GET] /
  index(req, res, next) {
    // Course.find({}, function (err, course) {
    //   if (!err) {
    //     res.json(course);
    //   } else {
    //     next(err);
    //     res.status(500).json({ error: "message" });
    //   }
    // });

    Course.find({})
      .then((courses) =>
        res.render("home", { courses: mutipMongoseeToObject(courses) })
      )
      .catch(next);
  }
  // [GET] /search
  search(req, res) {
    res.render("search");
  }
}

module.exports = new SiteController();
