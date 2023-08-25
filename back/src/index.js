const server = require("./app");
const { conn } = require("./DB_connection");

conn.sync({ force: false }).then(() => {
  server.listen(3001, () => {
    console.log("listen on port 3001");
  });
});
