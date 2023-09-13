"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("mocha");
const supertest_1 = __importDefault(require("supertest"));
const chai_1 = require("chai");
const server_1 = require("../src/server");
describe("Server connection", () => {
    it("Deberia andar bien", async () => {
        const response = await (0, supertest_1.default)(server_1.app).get("/api/products");
        (0, chai_1.expect)(response.statusCode).to.be.equal(200);
    });
});
