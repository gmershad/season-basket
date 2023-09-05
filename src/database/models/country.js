const { DataTypes } = require('sequelize');
const sequelize = require('../../database');

const Country = sequelize.define('Country', {
    CountryId: {
        type: DataTypes.STRING(10),
        primaryKey: true,
    },
    Name: {
        type: DataTypes.STRING(255),
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
    tableName: 'country',
    timestamps: false,
});

module.exports = Country;
