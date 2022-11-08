module.exports = {
  mutipMongoseeToObject: function (mongoseeArray) {
    return mongoseeArray.map((couse) => couse.toObject());
  },
  mongoSeeToObject: function (mongosee) {
    return mongosee ? mongosee.toObject() : mongosee;
  },
};
