const mongoose = require("mongoose");

const DB = process.env.DATABASE;

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    socketTimeoutMS: 3600000,
    connectTimeoutMS: 3600000,
  })
  .then(() => {
    console.log("connection successful");
  })
  .catch((err) => console.log("no connection"));
