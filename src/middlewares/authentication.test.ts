import express from "express";
import supertest from "supertest";
import { AuthenticationMiddleware } from "./authentication";

describe("Auth", () => {
  it("should check the request's header", async () => {
    const app = express();
    app.use(new AuthenticationMiddleware().init);
    app.get("/test", (_, response) => response.sendStatus(200));
    const agent = supertest(app);

    await agent.get("/test").expect(200);
    await agent.get("/test").expect(429);
  });
});
