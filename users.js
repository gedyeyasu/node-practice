const express = require("express");

const option = {
  caseSensitive: false,
  strict: false,
};
const router = express.Router(option);
let users = [
  { name: "Gede", id: 1 },
  { name: "Tede", id: 2 },
  { name: "Aman", id: 3 },
];
router.get("/", (req, res, next) => {
  res.render("pages/user", { users: users });
});
router.get("/:id", (req, res, next) => {
  console.log("id: " + req.params.id);
  let u = users.filter((u) => u.id == parseInt(req.params.id));
  console.log(u);
  res.send("User: " + u[0].name);
});

module.exports = router;
