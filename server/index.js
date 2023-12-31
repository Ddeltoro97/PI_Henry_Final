const axios = require("axios");
const server = require("./src/server");
const { conn, getCountriesFromApi } = require('./src/db.js');
const PORT = 3001;

conn.sync({ force: true }).then(() => {
server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
})
}).then(() =>{
  getCountriesFromApi();
}).catch(error => console.error(error))
