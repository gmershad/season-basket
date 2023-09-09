const { DataTypes } = require('sequelize');
const sequelize = require('../infrastructure/database');

const User = sequelize.define('User', {
    Id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    FirstName: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    LastName: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    Email: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    Password: {
        type: DataTypes.STRING(250),
        allowNull: false,
    },
    IsActive: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
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
    tableName: 'user',
    timestamps: false,
    underscored: true,
});

module.exports = User;
