const router = require("express").Router();
require("../db/conn");
const Note = require("../model/userSchema");
const Delete = require("../model/deleteSchema");

router.post("/", async (req, res) => {
  try {
    const { _id, title, text, color } = req.body;

    console.log("delete data", req.body);

    const newData = new Delete({
      title,
      text,
      color,
      _id,
    });
    newData
      .save()
      .then(() => {
        // Note.deleteOne({ _id });
        res.status(201).json({ message: "Delete successfuly" });
      })
      .catch((err) => res.status(500).json({ error: "Delete Failed" }));
  } catch {
    (err) => console.log(err);
  }
});
module.exports = router;
