const { DataTypes } = require('sequelize');
const sequelize = require('../infrastructure/database');

const Nutrient = sequelize.define('Nutrient', {
    NutrientId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    NutrientName: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },
    Serving: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    Unit: {
        type: DataTypes.STRING(20),
        allowNull: false,
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
    tableName: 'nutrient',
    timestamps: false,
    underscored: true,
});

module.exports = Nutrient;
