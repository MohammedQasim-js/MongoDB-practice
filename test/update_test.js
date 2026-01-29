const assert = require("assert");
const Student = require("../src/student");

describe("Updating records", () => {
  let eren;
  let eren2;

  beforeEach((done) => {
    eren = new Student({ name: "Eren", studentNumber: 2520 });
    eren2 = new Student({ name: "Eren", studentNumber: 2530 });
    (eren2.save(), eren.save()).then(() => done());
    console.log(eren);
    console.log(eren2);
  });

  //   it("set and save", (done) => {
  //     console.log(eren);
  //     eren.set("name", "Armin");
  //     eren
  //       .save()
  //       .then(() => Student.find({}))
  //       .then((students) => {
  //         assert(students[0].name === "Armin");
  //         done();
  //       });
  //     // done();
  //   });

  //   it("Update one of the Erens", async () => {
  //     const student = await Student.updateOne(
  //       { name: "Eren" },
  //       { studentNumber: 3000 },
  //     );
  //     const res = await Student.find({});
  //     assert(res[0].studentNumber === 3000);
  //     console.log(res);
  //   });

  it("Update one of the Erens", async () => {
    const student = await Student.updateMany(
      { name: "Eren" },
      { studentNumber: 3000 },
    );
    const res = await Student.find({});
    assert(res[0].studentNumber === 3000 && res[1].studentNumber === 3000);
    console.log(res);
  });
});
