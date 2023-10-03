const {getCountryById, getCountries, getCountryByName} = require ("../controllers/countryControllers")

const getCountryHandler = async (req, res) =>{
    const {id} = req.params;
    try {
       const response = await getCountryById(id);
       return res.status(200).json(response);                                                              
    } catch (error) {
        res.status(400).json({error: error.message});
    }
}

const getCountriesHandler = async (req, res) =>{
    const {name} = req.query;
    try {
        if (name){
            const response = await getCountryByName(name);
            return res.status(200).json(response);
        }else{
            const response = await getCountries();
            return res.status(200).json(response);
        }
    } catch (error) {
        res.status(400).json({error: error.message});
    }
}

module.exports ={
    getCountryHandler,
    getCountriesHandler,
}