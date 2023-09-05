const { DataTypes } = require('sequelize');
const sequelize = require('../../database');
const Product = require('./product');
const Season = require('./season');
const State = require('./state');

const ProductSeason = sequelize.define('ProductSeason', {
    ProductSeasonId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    ProductId: {
        type: DataTypes.STRING(10),
        allowNull: false,
    },
    SeasonId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    StateId: {
        type: DataTypes.STRING(10),
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
    tableName: 'product_season',
    timestamps: false,
    underscored: true,
});

ProductSeason.belongsTo(Product, {
    foreignKey: 'ProductId',
});

ProductSeason.belongsTo(Season, {
    foreignKey: 'SeasonId',
});

ProductSeason.belongsTo(State, {
    foreignKey: 'StateId',
});

module.exports = ProductSeason;
