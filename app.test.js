import request from "supertest";
import app from "./app.js";

describe("POST/", () => {
  describe("given a todo", () => {
    test("should respond with a 200 status code", async () => {
      const response = await request(app).post("/").send({
        title: "do the shopping",
        description: "buy milk and egg",
        isDone: "false",
      });
      expect(response.statusCode).toBe(200);
    });
    test("should specify json in the content type header", async () => {
      const response = await request(app).post("/").send({
        title: "do the shopping",
        description: "buy milk and egg",
        isDone: "false",
      });
      expect(response.headers["content-type"]).toEqual(
        expect.stringContaining("json")
      );
    });
    test("response has todoId", async () => {
      const response = await request(app).post("/").send({
        title: "do the shopping",
        description: "buy milk and egg",
        isDone: "false",
      });
      expect(response.body.todos).toBeDefined();
    });
  });

  describe("when the any property of todo is missing", () => {
    test("should respond with a status code of 400", async () => {
      const bodyData = [
        { title: "do the shopping" },
        { description: "buy milk and egg" },
        { isDone: "false" },
        {},
      ];
      for (const body of bodyData) {
        const response = await request(app).post("/").send(body);
        expect(response.statusCode).toBe(400);
      }
    });
  });
});
