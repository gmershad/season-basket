const { DataTypes } = require('sequelize');
const sequelize = require('../../database/index');
const Country = require('./country');

const State = sequelize.define('State', {
    StateId: {
        type: DataTypes.STRING(10),
        primaryKey: true,
    },
    CountryId: {
        type: DataTypes.STRING(10),
        allowNull: false,
        references: {
            model: Country,
            key: 'CountryId',
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
    tableName: 'states',
    timestamps: false,
});

module.exports = State;
