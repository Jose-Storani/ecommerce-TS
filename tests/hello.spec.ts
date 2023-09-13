import "mocha";
import request from "supertest";
import { app } from "../src/server";
import { expect } from "chai";
describe("Testing connection",()=>{
it("Deberia funcionar",async ()=>{
  const response = await request(app).get("/api/products");
  expect(response.body).to.have.property("products");
  expect(response.body.products).to.be.an("array");
})
})
