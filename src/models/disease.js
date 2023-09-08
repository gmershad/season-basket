const { DataTypes } = require('sequelize');
const sequelize = require('../infrastructure/database');

const Disease = sequelize.define('Disease', {
    DiseaseId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    Name: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },
    Description: {
        type: DataTypes.TEXT,
        allowNull: true,
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
    tableName: 'disease',
    timestamps: false,
    underscored: true,
});

module.exports = Disease;
