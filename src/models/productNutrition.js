const { DataTypes } = require('sequelize');
const sequelize = require('../infrastructure/database');
const Product = require('./product');

const ProductNutrition = sequelize.define('ProductNutrition', {
    NutritionId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    ProductId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Product,
            key: 'product_id',
        },
    },
    Calories: {
        type: DataTypes.DECIMAL(8, 2),
        allowNull: true,
    },
    Carbs: {
        type: DataTypes.DECIMAL(8, 2),
        allowNull: true,
    },
    Fat: {
        type: DataTypes.DECIMAL(8, 2),
        allowNull: true,
    },
    Protein: {
        type: DataTypes.DECIMAL(8, 2),
        allowNull: true,
    },
    Serving: {
        type: DataTypes.STRING(20),
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
    tableName: 'product_nutrition',
    timestamps: false,
    underscored: true,
});

module.exports = ProductNutrition;
