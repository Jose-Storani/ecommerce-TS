"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("mocha");
const supertest_1 = __importDefault(require("supertest"));
const server_1 = require("../server");
const chai_1 = require("chai");
describe("Testing connection", () => {
    it("Deberia funcionar", async () => {
        const response = await (0, supertest_1.default)(server_1.app).get("/api/products");
        (0, chai_1.expect)(response.body).to.be.an("array");
    });
});
