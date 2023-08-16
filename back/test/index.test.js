const server = require("../src/app");
const session = require("supertest");
const agent = session(server);

describe("Test de RUTAS", () => {
  describe("GET /rickandmorty/character/:id", () => {
    it("Responde con status: 200", async () => {
      await agent.get("/rickandmorty/character/1").expect(200);
    });
    it('Responde un objeto con las propiedades: "id", "name", "species", "gender", "status", "origin" e "image"', async () => {
      const data = await agent.get("/rickandmorty/character/1");
      expect(data.body).toHaveProperty("id");
      expect(data.body).toHaveProperty("name");
      expect(data.body).toHaveProperty("species");
      expect(data.body).toHaveProperty("gender");
      expect(data.body).toHaveProperty("status");
      expect(data.body).toHaveProperty("origin");
      expect(data.body).toHaveProperty("image");
    });
    it("Responde con status: 500", async () => {
      await agent.get("/rickandmorty/character/999").expect(500);
    });
  });
  describe("GET /rickandmorty/login", () => {
    it("Responde con status: 200", async () => {
      await agent
        .get(
          "/rickandmorty/login/?email=gabrieltomasi22@gmail.com&password=Asd1234"
        )
        .expect(200);
    });
    it("Permite la autenticacion del usuario", async () => {
      const data = await agent.get(
        "/rickandmorty/login/?email=gabrieltomasi22@gmail.com&password=Asd1234"
      );
      expect(data.body).toHaveProperty("access", true);
    });
    it("invalida la autenticacion del usuario si el mail es incorrecto", async () => {
      const data = await agent.get(
        "/rickandmorty/login/?email=gabrieltomasi@gmail.com&password=Asd1234"
      );
      expect(data.body).toHaveProperty("access", false);
    });
    it("invalida la autenticacion del usuario si el password es incorrecto", async () => {
      const data = await agent.get(
        "/rickandmorty/login/?email=gabrieltomasi@gmail.com&password=Dsa1234"
      );
      expect(data.body).toHaveProperty("access", false);
    });
  });
  describe("POST /rickandmorty/fav", () => {
    const character1 = { id: 1, name: "gabi" };
    const character2 = { id: 2, name: "ale" };
    const character3 = { id: 3, name: "tom" };
    it("Responde con status: 200", async () => {
      await agent.post("/rickandmorty/fav").send(character3).expect(200);
    });
    it("devuelve el elemento enviado por body", async () => {
      const response = await agent.post("/rickandmorty/fav").send(character1);
      expect(response.body).toContainEqual(character1);
    });
    it("devuelve el elemento enviado por body", async () => {
      const response = await agent.post("/rickandmorty/fav").send(character2);
      expect(response.body).toContainEqual(character2);
    });
  });
  describe("DELETE /rickandmorty/fav/:id", () => {
    const character1 = { id: 1, name: "gabi" };
    const character2 = { id: 2, name: "ale" };
    const character3 = { id: 3, name: "tom" };
    it("Responde con status: 200", async () => {
      await agent.delete("/rickandmorty/fav/3").expect(200);
    });
    it("No debe eliminar el personaje si el id no corresponde a un personaje", async () => {
      const response = await agent.delete("/rickandmorty/fav/5646");
      expect(response.body).toContainEqual(character1);
      expect(response.body).toContainEqual(character2);
    });
    it("debe eliminar el personaje si el id corresponde a un personaje", async () => {
      const response = await agent.delete("/rickandmorty/fav/1");
      expect(response.body).not.toContainEqual(character1);
      expect(response.body).toContainEqual(character2);
    });
  });
});
