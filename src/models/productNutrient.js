const { DataTypes } = require('sequelize');
const sequelize = require('../infrastructure/database');
const Product = require('./product');
const Nutrient = require("./nutrient");

const ProductNutrient = sequelize.define('ProductNutrient', {
    ProductNutrientId: {
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
    NutrientId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Nutrient,
            key: 'nutrient_id',
        },
    },
    NutrientValue: {
        type: DataTypes.FLOAT,
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
    tableName: 'product_nutrient',
    timestamps: false,
    underscored: true,
});


module.exports = ProductNutrient;
