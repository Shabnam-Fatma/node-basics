const express = require("express");
const app = express();

const student = [
  {
    name: "Salu",
    age: 14,
    class: 9,
  },

  {
    name: "saleha",
    age: 15,
    class: 10,
  },

  {
    name: "Salu ji",
    age: 13,
    class: 8,
  },
];

app.get("/", (req, res) => {
  res.send("Home Page");
});

app.get("/about", (req, res) => {
  res.send("about Page");
});

app.get("/contact", (req, res) => {
  console.log("Request Recieved");
  console.log(req);
  res.json("contact Page");
});

app.get("/student", (req, res) => {
  res.json(student);
});

app.listen(3001, () => {
  console.log("Server is Live");
});
