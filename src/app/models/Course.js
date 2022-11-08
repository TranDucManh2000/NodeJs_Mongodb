const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Course = new Schema(
  {
    author: ObjectId,
    name: { type: String, maxLength: 100, require: true },
    description: { type: String, default: "hahaha" },
    image: { type: String },
    slug: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Course", Course);
