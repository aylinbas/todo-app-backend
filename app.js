const express = require("express");
const cors = require("cors");
const app = express();
const client = require("./redis");
const uniqid = require("uniqid");

var corsOptions = {
  origin: "http://localhost:3002",
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};
app.use(cors(corsOptions));

app.get("/", async (req, res) => {
  res.send("<h1>Hello world</h1>");
});
const todos = [];

app.use(express.json());
app.post("/", async (req, res) => {
  const { title, description, isDone } = req.body;
  if (!title || !description || !isDone) {
    res.sendStatus(400);
    return;
  }
  client.hset(
    "todo",
    uniqid(),
    JSON.stringify({
      title,
      description,
      isDone,
    })
  );
  client.hgetall("users:123", function (err, obj) {
    console.dir(obj);
  });
  client.hgetall("todo", function (err, obj) {
    res.send({ todos: obj });
  });
});
app.listen(3005, () => console.log("listening on port 8080"));

module.exports = app;
