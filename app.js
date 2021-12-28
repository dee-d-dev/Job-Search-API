const express = require("express");
const app = express();

app.use(express.json())

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

start()