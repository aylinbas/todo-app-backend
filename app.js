const express = require("express");
const cors = require("cors");
const app = express();

var corsOptions = {
  origin: "http://localhost:3001",
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};
app.use(cors(corsOptions));

app.get("/", (req, res) => {
  console.log("deneme");
  res.send("<h1>Hello world</h1>");
});
const todos = [
  { id: "0a", title: "deneme1", description: "description1", isDone: false },
  { id: "1b", title: "deeme2", description: "description2", isDone: false },
  { id: "2c", title: "deneme3", description: "description3", isDone: false },
];

app.use(express.json());
app.post("/", async (req, res) => {
  const { title, description, isDone } = req.body;
  if (!title || !description || !isDone) {
    res.sendStatus(400);
    return;
  }

  res.send({ todos: todos });
});
app.listen(8080, () => console.log("listening on port 8080"));

module.exports = app;
