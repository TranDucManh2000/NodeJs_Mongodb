const path = require("path");
const express = require("express");
const morgan = require("morgan");
const app = express();
const port = 3001;
const route = require("./routes");
const db = require("../src/config/db");

// connect db
db.connect();

// app mitdowe
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// app static meo an :)
app.use(express.static(path.join(__dirname, "public")));

// http logger
app.use(morgan("combined"));

// template engines
const hbs = require("express-handlebars");
app.engine(
  ".hbs",
  hbs.engine({ extname: ".hbs", helpers: { sum: (a, b) => a + b } })
);
app.set("view engine", ".hbs");
app.set("views", path.join(__dirname, "resources", "views"));

// route init
route(app);

// app listen
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
