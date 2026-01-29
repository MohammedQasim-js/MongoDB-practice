const assert = require("assert");
const Student = require("../src/student");

describe("read the data", (done) => {
  let eren;
  let eren2;

  beforeEach((done) => {
    eren = new Student({ name: "Eren" });
    eren2 = new Student({ name: "Eren" });
    (eren.save(), eren2.save()).then(() => done());
  });

  //   it("find all Erens", async () => {
  //     const students = await Student.find({ name: "Eren" });
  //     console.log(students);
  //     assert(students[0]._id.toString() === eren._id.toString());
  //     // console.log(students[0]._id);
  //   });

  it("Find one Eren", async () => {
    const students = await Student.findOne({ _id: eren._id });
    console.log(students);
    assert(students.name === "Eren");
  });
});
