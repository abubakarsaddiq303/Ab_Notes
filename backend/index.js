const dotenv = require("dotenv").config();
const express = require("express");
const cors = require("cors");
const Port = process.env.PORT || 5000;
const app = express();
app.use(express.json());
app.use(cors());

require("./db/conn");
const getuser = require("./router/getUser");
const postuser = require("./router/postUser");
const deleteuser = require("./router/DeleteUser");

app.use("/getuser", getuser);
app.use("/postuser", postuser);
app.use("/deleteuser", deleteuser);

app.get("/", (req, res) => {
  res.send("My Home page");
});

app.listen(Port, () => {
  console.log("helloo nodemon");
});
