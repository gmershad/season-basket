const { DataTypes } = require('sequelize');
const sequelize = require('../infrastructure/database');
const Product = require('./product');
const Disease = require("./disease");

const ProductDisease = sequelize.define('ProductDisease', {
    ProductDiseaseId: {
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
    DiseaseId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Disease,
            key: 'disease_id',
        },
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
    tableName: 'product_disease',
    timestamps: false,
    underscored: true,
});


module.exports = ProductDisease;
