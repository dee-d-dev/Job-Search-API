const express = require("express");
const app = express();
const authRouter = require("./routes/auth");
const jobRouter = require("./routes/jobs");

app.use(express.json());
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/job", jobRouter);
app.get("/", (req, res) => {
  res.send("Jobs api");
});

const start = () => {
  try {
    app.listen(4000, () => {
      console.log("app running on port 4000");
    });
  } catch (err) {
    console.log(err);
  }
};

start();
