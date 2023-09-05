const { DataTypes } = require('sequelize');
const sequelize = require('../../database');
const Disease = require('./disease');

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
    AttributeType: {
        type: DataTypes.ENUM('Good', 'Bad', 'AllergyInfo'),
        allowNull: false,
    },
    AttributeName: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },
    AllergyInfo: {
        type: DataTypes.STRING(255),
        allowNull: true,
    },
    DiseaseId: {
        type: DataTypes.STRING(10),
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
    tableName: 'product_health',
    timestamps: false,
    underscored: true,
});

ProductHealth.belongsTo(Disease, { foreignKey: 'DiseaseId' });

module.exports = ProductHealth;
