const assert = require("assert");
const Student = require("../src/student");

describe("delete the records", () => {
  let eren;
  let mikasa;

  beforeEach((done) => {
    eren = new Student({ name: "Eren" });
    mikasa = new Student({ name: "Mikasa" });
    (mikasa.save(), eren.save()).then(() => done());
  });

  it("delete by id", (done) => {
    Student.findByIdAndDelete(eren._id)
      .then(() => Student.findOne({ name: "Eren" }))
      .then((student) => {
        assert(student === null);
        done();
      });
  });

  it("delete by name", (done) => {
    Student.findOneAndDelete({ name: "Eren" })
      .then(() => Student.findOne({ _id: eren._id }))
      .then((student) => {
        assert(student === null);
        done();
      });
  });

  it("delete eren", (done) => {
    Student.deleteOne({ _id: eren._id })
      .then(() => Student.findOne({ name: "Eren" }))
      .then((student) => {
        assert(student === null);
        done();
      });
  });
});
