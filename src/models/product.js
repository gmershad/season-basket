const { DataTypes } = require('sequelize');
const sequelize = require('../database');

const Product = sequelize.define('Product', {
    ProductId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    Name: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },
    Type: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    Category: {
        type: DataTypes.STRING(50),
    },
    Subcategory: {
        type: DataTypes.STRING(50),
    },
    ImgUrls: {
        type: DataTypes.JSON,
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
    tableName: 'product',
    timestamps: false,
    underscored: true,
});

module.exports = Product;
