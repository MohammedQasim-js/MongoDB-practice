const assert = require("assert");
const Student = require("../src/student");

describe("create first data", () => {
  it("Save the student", (done) => {
    const eren = new Student({ name: "Eren" });
    eren.save().then(() => {
      assert(!eren.isNew);
      done();
    });
  });
});
