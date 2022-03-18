const router = require("express").Router();
require("../db/conn");
const Note = require("../model/userSchema");

router.delete("/", async (req, res) => {
  try {
    const { title, text, color } = req.body;

    await Note.deleteOne({ _id });

    res.status(200).json({ message: "Delete successfuly" });
  } catch {
    (err) => console.log(err);
  }
});
module.exports = router;
