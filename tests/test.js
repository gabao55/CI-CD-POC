const supertest = require("supertest");
const httpStatus = require("http-status");
const app = require("../app/server");

const server = supertest(app);

it("should respond with status 200", async () => {
  const response = await server.get("/health");

  expect(response.status).toBe(httpStatus.OK);
});