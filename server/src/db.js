require("dotenv").config();
const { Sequelize } = require("sequelize");
const axios = require("axios");

const fs = require('fs');
const path = require('path');
const { Console } = require("console");
const {
  DB_USER, DB_PASSWORD, DB_HOST,
} = process.env;

const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/countries`, {
  logging: false, 
  native: false, 
});
const basename = path.basename(__filename);

const modelDefiners = [];

fs.readdirSync(path.join(__dirname, '/models'))
  .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, '/models', file)));
  });


modelDefiners.forEach(model => model(sequelize));

let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);
sequelize.models = Object.fromEntries(capsEntries);

const { Country, Activity } = sequelize.models;

// Aca vendrian las relaciones
// Product.hasMany(Reviews);
Country.belongsToMany(Activity, {
  through: "Country_Activity",
  timestamps: false,
});
Activity.belongsToMany(Country, {
  through: "Country_Activity",
  timestamps: false,
});


const getCountriesFromApi = async() =>{
  try {
    const {data} = await axios("http://localhost:5000/countries");
    // const apiData = response.data;
    const countries = data.map(country => ({ 
        id: country.cca3,
        name: country.name.common,
        flag: country.flags.svg,
        continent: country.continents[0],
        capital: country.capital ? country.capital[0] : "NA", 
        subregion: country.subregion ? country.subregion : "NA" ,
        area: String(country.area), 
        population: String(country.population),
      
    }))
    // console.log(countries);
    await Country.bulkCreate(countries);
    console.log("countries added")
    // console.log(countries)
  } catch (error) {
    console.log("error")
  }
}



module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: sequelize,
  getCountriesFromApi
       // para importart la conexión { conn } = require('./db.js');
};