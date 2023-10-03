const {Activity} = require("../db");

const getActivities = async () =>{
    const allActivites = await Activity.findAll();
    return allActivites;
}

const getActivity = async (id) =>{
    return await Activity.findByPk(id);
}

const createActivity = async (name, difficulty, duration, season, description) =>{
    const newActivity = await Activity.create({name, difficulty, duration, season, description});
    return newActivity;
}

const deleteActivity = async (id) =>{
    const activity = await Activity.findByPk(id);
    return await activity.destroy();
}

const editActivity = async (id, name, difficulty, duration, season, description) =>{
    const activity = {
        name: name,
        difficulty: difficulty,
        duration: duration,
        season: season,
        description: description
    }

    return await Activity.update(activity, {where: {id: id}});
}

module.exports = {
    getActivities,
    createActivity,
    getActivity,
    deleteActivity,
    editActivity
}