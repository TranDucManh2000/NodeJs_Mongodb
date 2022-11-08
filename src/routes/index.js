const newRouter = require("./news");
const siteRouter = require("./site");
const CoursesRouter = require("./courses");
const MeRouter = require("./me");

function route(app) {
  app.use("/new", newRouter);
  app.use("/courses", CoursesRouter);
  app.use("/me", MeRouter);
  app.use("/", siteRouter);
}

module.exports = route;
