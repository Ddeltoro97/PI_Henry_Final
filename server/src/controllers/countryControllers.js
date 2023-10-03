const {Country} = require("../db");


const getCountryById = async (id) =>{
   return await Country.findByPk(id);
}

const getCountries = async () =>{
    const allCountries = await Country.findAll();
    return allCountries;
}

const getCountryByName = async (name) =>{
    const country = await Country.findAll({where:{name: name}});
    return country;
}

module.exports = {
    getCountryById,
    getCountries,
    getCountryByName
}