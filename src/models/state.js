const { DataTypes } = require('sequelize');
const sequelize = require('../database');
const Country = require('./country');

const State = sequelize.define('State', {
    StateId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    CountryId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Country,
            key: 'country_id',
        },
    },
    Name: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },
    Language: {
        type: DataTypes.STRING(255),
    },
    IsActive: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
    },
    CreatedAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
    },
    UpdatedAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        onUpdate: DataTypes.NOW,
    },
}, {
    tableName: 'state',
    timestamps: false,
    underscored: true,
});

module.exports = State;
