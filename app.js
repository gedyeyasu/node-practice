const express = require("express");

const app = express();

const userRouter = require("./users");

app.listen(3000, () => {
  console.log("server is running on 3000");
});

app.get("/", (req, res) => {
  res.send("This is HomePage");
});

app.use("/users", userRouter);

// app.get("/users/:id", (req, res) => {
//   console.log(req.params.id);
//   res.send("User Id page");
// });

// app.get("/users", (req, res) => {
//   console.log(req.query.id);
//   res.send("This is user");
// });
