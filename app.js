import express from "express";

const app = express();

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

export default app;
