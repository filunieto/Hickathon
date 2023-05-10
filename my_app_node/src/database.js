const { Sequelize } = require('sequelize');
const dotenv = require('dotenv');

dotenv.config();

const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: 'postgres',
  logging: false,
});

(async () => {
  try {
    await sequelize.authenticate();
    console.log('Conexión a la base de datos establecida con éxito.');
  } catch (error) {
    console.error('No se pudo conectar a la base de datos:', error);
  }
})();

module.exports = sequelize;

const User = require('./models/user');
const Absence = require('./models/absence');

User.hasMany(Absence, { foreignKey: 'userId' });
Absence.belongsTo(User, { foreignKey: 'userId' });

User.hasMany(Absence, { foreignKey: 'managerId' });
Absence.belongsTo(User, { foreignKey: 'managerId', as: 'manager' });