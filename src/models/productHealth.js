const { DataTypes } = require('sequelize');
const sequelize = require('../database');

const ProductHealth = sequelize.define('ProductHealth', {
    ProductHealthId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    ProductId: {
        type: DataTypes.STRING(10),
        allowNull: false,
    },
    Good: {
        type: DataTypes.JSON,
    },
    Bad: {
        type: DataTypes.JSON,
    },
    AllergyInfo: {
        type: DataTypes.JSON,
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
    tableName: 'product_health',
    timestamps: false,
    underscored: true,
});

module.exports = ProductHealth;
