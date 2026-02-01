const assert = require("assert");
const Student = require("../src/student");

describe("Virtual Types", () => {
  it("article counts", (done) => {
    const eren = new Student({
      name: "Eren",
      articles: [{ title: "First Titan" }],
    });
    eren
      .save()
      .then(() => Student.findOne({ name: "Eren" }))
      .then((student) => {
        assert(student.articleCount === 1);
        done();
      });
  });
});
