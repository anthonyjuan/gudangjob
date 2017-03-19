'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('ProjectProgrammers', [{
      projectId:1,
      programmerId:1,
      status:false,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      projectId:1,
      programmerId:2,
      status:false,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      projectId:2,
      programmerId:2,
      status:false,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      projectId:2,
      programmerId:3,
      status:false,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {})
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
