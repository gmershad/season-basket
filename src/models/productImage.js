
const { DataTypes } = require('sequelize');
const sequelize = require('../infrastructure/database');
const Product = require('./product');

const ProductImage = sequelize.define('ProductImage', {
    ImageId: {
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
    ImgUrls: {
        type: DataTypes.JSON,
        allowNull: false,
    },
    ImageFileName: {
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
    tableName: 'product_image',
    timestamps: false,
    underscored: true,
});

module.exports = ProductImage;
