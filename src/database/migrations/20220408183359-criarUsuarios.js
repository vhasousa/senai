'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.createTable('usuarios', {
        id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          allowNull: false,
          primaryKey: true,
        },
        nome: {
          type: Sequelize.STRING,
        },
        email: {
          type: Sequelize.STRING,
        },
        senha: {
          type: Sequelize.STRING,
        },
        created_at: {
          type: Sequelize.DATE
        },
        updated_at: {
          type: Sequelize.DATE
        }
      });
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.dropTable('usuarios');
  }
};
