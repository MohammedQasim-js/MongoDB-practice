const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/students_test");

mongoose.connection
  .once("open", () => console.log("We are Connected!"))
  .on("error", (error) => {
    console.warn("Error occurred!", error);
  });

beforeEach((done) => {
  mongoose.connection.collections.students.drop();
  done();
});
