import supertest from "supertest";
import httpStatus from "http-status";
import { app } from "../app/server";

const server = supertest(app);

it("should respond with status 200", async () => {
  const response = await server.get("/health");

  expect(response.status).toBe(httpStatus.OK);
});
