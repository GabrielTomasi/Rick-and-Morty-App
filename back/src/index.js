const http = require("http");
const fs = require("fs");
const data = require("./utils/data");
http
  .createServer((require, response) => {
    response.setHeader("Access-Control-Allow-Origin", "*");

    if (require.url.includes("/rickandmorty/character")) {
      const urlPart = require.url.split("/");
      const id = urlPart[urlPart.length - 1];

      const char = data.find((character) => character.id === Number(id));
      response.end(JSON.stringify(char));
    }
  })
  .listen(3001, "localhost");
