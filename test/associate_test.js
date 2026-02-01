const assert = require("assert");
const mongoose = require("mongoose");
const Student = require("../src/student");
const Comment = require("../src/comment");
const ArticleBlog = require("../src/articleBlog");
const { path } = require("../src/article_schema");

describe("Association Test", () => {
  let eren, articleBlog, comment;

  beforeEach((done) => {
    eren = new Student({ name: "Eren" });
    articleBlog = new ArticleBlog({
      title: "MongoDB",
      content: "Mongoose and Mocha",
    });
    comment = new Comment({ content: "Well done!" });

    eren.articleBlog.push(articleBlog);
    articleBlog.comments.push(comment);
    comment.students = eren;

    Promise.all([eren.save(), articleBlog.save(), comment.save()])
      .then(() => done())
      .catch(done);
  });

  it("Associate student with aticleBlog", (done) => {
    Student.findOne({ name: "Eren" })
      .populate("articleBlog")
      .then((student) => {
        assert(student.articleBlog[0].title === "MongoDB");
      });
    done();
    //   .catch(done);
  });

  it.only("Nested populate", (done) => {
    Student.findOne({ name: "Eren" })
      .populate({
        path: "articleBlog",
        populate: {
          path: "comments",
          model: "comment",
          populate: {
            path: "students",
            model: "student",
          },
        },
      })
      .then((student) => {
        // console.log(student.articleBlog[0].comments[0]);
        assert(student.name === "Eren");
        assert(student.articleBlog[0].title === "MongoDB");
        assert(student.articleBlog[0].comments[0].content === "Well done!");
        assert(student.articleBlog[0].comments[0].students.name === "Eren");
        done();
      });
  });
});
