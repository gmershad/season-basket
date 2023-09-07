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
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Product,
            key: 'product_id',
        },
    },
    SeasonId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Season,
            key: 'season_id',
        },
    },
    StateId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: State,
            key: 'state_id',
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
    tableName: 'product_season',
    timestamps: false,
    underscored: true,
});


module.exports = ProductSeason;
