const { response } = require("express");
const {getActivities, createActivity, getActivity, deleteActivity, editActivity} = require ("../controllers/activityControllers");

const createActivityHandler = async (req, res) =>{
    const {name, difficulty, duration, season, description} = req.body;
    try {
       const response = await createActivity(name, difficulty, duration, season, description);
       return res.status(200).json(response);
    } catch (error) {
        res.status(400).json({error: error.message}); 
    }
}

const getActivitiesHandler = async (req, res) => {
    try {
        const response = await getActivities();
        return res.status(200).json(response);  
    } catch (error) {
        res.status(400).json({error: error.message});
    }
}

const getSpecificActivity = async (req, res) =>{
    const {id} = req.params;
    try {
        const response = await getActivity(id);
        return res.status(200).json(response);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
}

const deleteActivityHandler = async (req, res) =>{
    const {id} = req.params;
    try {
        const response = await deleteActivity(id);
        return res.status(200).json(response);
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

const editActivityHandler = async (req, res) =>{
    const {id} = req.params;
    const {name, difficulty, duration, season, description} = req.body;
    try {
       const response = await editActivity(id, name, difficulty, duration, season, description);
       return res.status(200).json(response); 
    } catch (error) {
       res.status(400).json({error: error.message})
    }
}

module.exports = {
    createActivityHandler,
    getActivitiesHandler,
    getSpecificActivity,
    deleteActivityHandler,
    editActivityHandler
}