import "mocha";

import { productModel } from "../src/persistence/mongoDB/models/products.model";
import request from "supertest";
import { app } from "../src/server";
import { expect } from "chai";

describe("Products", () => {
  beforeEach(async () => {
    //Before each test we empty the database
    await productModel.deleteMany({});
    console.log("limpiando...");
  });
  const payload = {
    title: "Producto Prueba 1",
    description: "Probando el producto",
    code: "111aaa",
    price: 2000,
    status: "disponible",
    stock: 200,
    category: "Testing",
    thumbnail: "",
  };

  describe("GET /api/products", () => {
    it("Deberia devolver un array de productos", async () => {
      const response = await request(app).get("/api/products");
      expect(response.body).to.have.property("products");
      expect(response.body.products).to.be.an("array");
      expect(response.body.products.length).to.be.equal(0);
    });
  });

  describe("/POST product", () => {
    it("Deberia agregar un producto", async () => {
      const response = await request(app)
        .post("/api/products")
        .send(payload)
        .expect(200);
      expect(response.body).to.have.property("creado");
      expect(response.body.creado).to.be.an("object");
      expect(response.body.creado).to.have.property("title");
      expect(response.body.creado).to.have.property("description");
      expect(response.body.creado).to.have.property("code");
      expect(response.body.creado).to.have.property("price");
      expect(response.body.creado).to.have.property("status");
      expect(response.body.creado).to.have.property("stock");
      expect(response.body.creado).to.have.property("category");
      expect(response.body.creado).to.have.property("thumbnail");
    });

    it("Deberia rechazar la carga si falta propiedades requeridas", async () => {
      const payload = {
        title: "Prueba",
      };
      const response = await request(app)
        .post("/api/products")
        .send(payload)
        .expect(400);
      expect(response.body).to.have.property("error");
      expect(response.body.error).to.be.equal("Bad Request");
    });
  });

  describe("/GET/:id", () => {
    it("Deberia devolver el product correspondiente al ID pasado por params", async () => {
      const newProduct = await productModel.create(payload);
      const response = await request(app).get(
        "/api/products/" + newProduct._id
      );
      expect(response.body).to.have.property("product");
      expect(response.body.product).to.be.an("array");
      expect(response.body.product.length).to.be.equal(1);
    });
  });

  describe("/PUT/:id",()=>{
    it("Deberia modificar el producto en la base de datos y devolver el producto actualizado", async()=>{
      const newProduct = await productModel.create(payload);
      const updateField = {title:"Nueva Forma de Producto"};
      const response = await request(app).put("/api/products/" + newProduct._id)
      .send(updateField)
      expect(response.body).to.have.property("modificado");
      expect(response.body.modificado).to.have.property("_id");
      
    })
  })

  describe("/DELETE/:id",()=>{
    it("Elimina un producto", async()=>{
      const newProduct = await productModel.create(payload);
      console.log(newProduct)
      const response = await request(app).delete("/api/products/" + newProduct._id)
      expect(response.body).to.have.property("eliminado");
      expect(response.body.eliminado._id
        ).to.equal(newProduct._id.toString())    })
  })
});
