const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
  })
  .then(() => console.log("몽고디비 연결완료"))
  .catch((error) => console.log(error));

app.use(express.json());

const todoRoutes = require("./routes/todo");
app.use("/todos", todoRoutes);

app.get("/", (req, res) => {
  res.send("hello node");
});

app.listen(8000, () => console.log("8000번 포트에서 대기중"));
