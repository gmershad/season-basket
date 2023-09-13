const { DataTypes } = require('sequelize');
const sequelize = require('../infrastructure/database');

const Season = sequelize.define('Season', {
    SeasonId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    Name: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },
    Description: {
        type: DataTypes.STRING(255),
    },
    SeasonCode: {
        type: DataTypes.INTEGER
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
    tableName: 'season',
    timestamps: false,
    underscored: true,
});

module.exports = Season;
