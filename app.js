const express = require("express");
const cors = require("cors");
const app = express();
const client = require("./redis");
const uniqid = require("uniqid");

const PORT = 8080;
const HOST = "0.0.0.0";

app.use(cors());

app.all("/*", function (req, res, next) {
  res.header("Access-Control-Allow-Origin", req.headers.origin || "*");
  res.header(
    "Access-Control-Allow-Methods",
    "GET,POST,PUT,HEAD,DELETE,OPTIONS"
  );
  res.header("Access-Control-Allow-Headers", "content-Type,x-requested-with");
  next();
});

app.get("/", async (req, res) => {
  client.hgetall("todo", function (err, obj) {
    res.send({ todos: obj });
  });
  // res.send("<h1>Hello world</h1>");
  // client.flushdb(function (err, succeeded) {
  //   console.log(succeeded);
  // });
});

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

  client.hgetall("todo", function (err, obj) {
    res.send({ todos: obj });
  });
});
app.listen(PORT, HOST, () => console.log("listening on port 8080"));

module.exports = app;
