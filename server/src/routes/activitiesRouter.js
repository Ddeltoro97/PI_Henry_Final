const {Router} = require("express");
const {createActivityHandler, getActivitiesHandler, getSpecificActivity, deleteActivityHandler, editActivityHandler} = require("../handlers/activityHandlers");

const activitiesRouter = Router();

activitiesRouter.post("/", createActivityHandler);
activitiesRouter.get("/", getActivitiesHandler);
activitiesRouter.get("/:id", getSpecificActivity);
activitiesRouter.delete("/:id", deleteActivityHandler);
activitiesRouter.post("/:id", editActivityHandler);




module.exports = activitiesRouter;