const { DataTypes } = require('sequelize');
const sequelize = require('../../database');
const Product = require('./product');

const ProductNutrition = sequelize.define('ProductNutrition', {
    NutritionId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    ProductId: {
        type: DataTypes.STRING(10),
        allowNull: false,
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

ProductNutrition.belongsTo(Product, {
    foreignKey: 'product_id',
});

module.exports = ProductNutrition;
