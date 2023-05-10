const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require('../database');

class Absence extends Model {}

Absence.init({
  id: {
    type: DataTypes.UUID,
    defaultValue: Sequelize.UUIDV4,
    primaryKey: true,
  },
  createdAt: {
    type:DataTypes.DATE,
    allowNull: false,
    defaultValue: Sequelize.NOW,
  },
  absenceDate: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  status: {
    type: DataTypes.ENUM,
    values: ['pending', 'approved', 'rejected'],
    allowNull: false,
    defaultValue: 'pending',
  },
  userId: {
    type: DataTypes.UUID,
    allowNull: false,
  },
  managerId: {
    type: DataTypes.UUID,
    allowNull: false,
  },
  rejectionReason: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  deadline: {
    type: DataTypes.DATE,
    allowNull: false,
  },
}, {
  sequelize,
  modelName: 'Absence',
  timestamps: false,
});

module.exports = Absence;