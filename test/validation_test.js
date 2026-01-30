const assert = require("assert");
const Student = require("../src/student");

describe("Updating records", () => {
  it("name is required", () => {
    const student = new Student({ name: undefined });
    const result = student.validateSync();
    console.log(result);
    const { message } = result.errors.name;
    assert(message === "Name is required");
  });

  it("name must be longer than 2 char", () => {
    const newStudent = new Student({ name: "Ed" });
    const newResult = newStudent.validateSync();
    const { message } = newResult.errors.name;
    assert(message === "Name is too short");
  });

  it("prevent invalid record", (done) => {
    const student = new Student({ name: "Ed" });
    student.save().catch((validationResult) => {
      const { message } = validationResult.errors.name;
      assert(message === "Name is too short");
      done();
    });
  });
});
