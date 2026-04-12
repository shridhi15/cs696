const request = require("supertest");
const app = require("../../server");
const mongoose = require('mongoose');

describe("User signup API test", () => {
  it("should register a new user successfully", async () => {
    const unique = Date.now();

    const response = await request(app)
      .post("/api/auth/signup")
      .send({
        name: "Test User",
        username: `testuser_${unique}`,
        email: `test_${unique}@example.com`,
        password: "testPassword123"
      });

    expect(response.statusCode).toBe(201);
  });
});

afterAll(async () => {
  await mongoose.connection.close();
});