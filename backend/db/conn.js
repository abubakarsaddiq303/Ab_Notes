const mongoose = require("mongoose");

const DB = process.env.DATABASE;

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    connectTimeoutMS: 50000,
    socketTimeoutMS: 50000,
  })
  .then(() => {
    console.log("connection successful");
  })
  .catch((err) => console.log("no connection"));
