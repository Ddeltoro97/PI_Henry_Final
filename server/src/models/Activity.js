const {DataTypes} = require("sequelize");

module.exports = (sequelize) =>{
    sequelize.define("Activity", {
        id:{
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4,
            unique: true
        },
        name:{
            type: DataTypes.STRING,
            allowNull: false
        },
        difficulty:{
            type: DataTypes.INTEGER,
            allowNull: false
        },
        duration:{
            type: DataTypes.INTEGER,
            allowNull: false
        },
        season:{
            type: DataTypes.STRING,
            allowNull: false
        },
        description:{
            type: DataTypes.TEXT,
            allowNull: false
        }
    }, { timestamps: false})
}