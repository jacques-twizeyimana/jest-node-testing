const mongoose = require("mongoose");

beforeEach((done) => {
  //connect to DB
  //   mongoose.connect("mongodb://localhost:27017/JestDB",
  //     { useNewUrlParser: true, useUnifiedTopology: true },
  //     () => done());
});

afterEach((done) => {
  // close DB
  //   mongoose.connection.db.dropDatabase(() => {
  //     mongoose.connection.close(() => done());
  //   });
});
