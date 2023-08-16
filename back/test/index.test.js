const server = require('../src/app');
const session = require('supertest');
const agent = session(server);

describe('Test de RUTAS', ()=>{
   describe('GET /rickandmorty/character/:id', ()=>{
    it('Responde con status: 200', async ()=>{
       await agent.get('/rickandmorty/character/1').expect(200);
    })
    it('Responde un objeto con las propiedades: "id", "name", "species", "gender", "status", "origin" e "image"', async()=>{
        const data = await agent.get('/rickandmorty/character/1')
        expect(data.body).toHaveProperty('id')
        expect(data.body).toHaveProperty('name')
        expect(data.body).toHaveProperty('species')
        expect(data.body).toHaveProperty('gender')
        expect(data.body).toHaveProperty('status')
        expect(data.body).toHaveProperty('origin')
        expect(data.body).toHaveProperty('image')
    })
    it('Responde con status: 500', async ()=>{
        await agent.get('/rickandmorty/character/999').expect(500);
     })
   })
   describe('GET /rickandmorty/login', ()=>{
    it('Responde con status: 200', async ()=>{
        await agent.get('/rickandmorty/login/?email=gabrieltomasi22@gmail.com&password=Asd1234').expect(200)
    })
    it('Permite la autenticacion del usuario', async ()=>{
        const data = await agent.get('/rickandmorty/login/?email=gabrieltomasi22@gmail.com&password=Asd1234')
        expect(data.body).toHaveProperty('access', true)
    })
   })
   describe('POST /rickandmorty/fav', ()=>{
    it('Responde con status: 200', async ()=>{
        await agent.post('/rickandmorty/fav').expect(200)
    })
   })
   describe('DELETE /rickandmorty/fav/:id', ()=>{
    it('Responde con status: 200', async ()=>{
        await agent.delete('/rickandmorty/fav/1').expect(200)
    })
   })
})

