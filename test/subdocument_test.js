const assert = require("assert");
const Student = require("../src/student");

describe("Subdocuments", () => {
  //   it("Creating a Subdocument", (done) => {
  //     const eren = new Student({
  //       name: "Eren",
  //       articles: [{ title: "JavaScript" }],
  //     });
  //     eren.save()
  //     .then(() =>{
  //         Student.findOne({name: 'Eren'})
  //         .then((student) => {
  //             assert(student.articles[0].title === 'JavaScript');
  //             done();
  //         })
  //     })
  //   });

  //   it("Adding new record", (done) => {
  //     const eren = new Student({ name: "Eren", articles: [] });
  //     eren
  //       .save()
  //       .then(() => Student.findOne({ name: "Eren" }))
  //       .then((student) => {
  //         student.articles.push({ title: "MongoDB" });
  //         return student.save();
  //       })
  //       .then(() => Student.findOne({ name: "Eren" }))
  //       .then((student) => {
  //         assert(student.articles[0].title === "MongoDB");
  //         done();
  //       });
  //   });
  it("Remove the records", (done) => {
    const eren = new Student({
      name: "Eren",
      articles: [{ title: "React Native" }],
    });
    eren
      .save()
      .then(() => Student.findOne({ name: "Eren" }))
      .then((student) => {
        student.articles[0].deleteOne();
        return student.save();
      })
      .then(() => Student.findOne({ name: "Eren" }))
      .then((student) => {
        assert(student.articles.length === 0);
        done();
      })
      .catch((err) => {
        console.error("Error", err);
        done(err);
      });
  });
});
