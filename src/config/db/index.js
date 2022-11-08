const mongoose = require("mongoose");

async function connect() {
  try {
    await mongoose.connect("mongodb://localhost/f8_education_dev");
    console.log("connect ok");
  } catch (error) {
    console.log("connect faill", error);
  }
}

module.exports = { connect };
