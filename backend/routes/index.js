const express = require("express");
const router = express.Router();

const sampleJSON = [
  {
    name: "Matahari",
    role: "Student",
    pet: "Nala",
  },
  {
    name: "James",
    role: "Teacher",
    pet: "Artemis",
  },
];

router.get("/", (req, res) => res.send(sampleJSON));

module.exports = router;
