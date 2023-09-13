const { DataTypes } = require('sequelize');
const sequelize = require('../infrastructure/database');

const NutrientCategory = sequelize.define('NutrientCategory', {
    NutrientCategoryId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    NutrientCategoryName: {
        type: DataTypes.STRING(255),
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
    tableName: 'nutrient_category',
    timestamps: false,
    underscored: true,
});

module.exports = NutrientCategory;
