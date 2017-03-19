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
    return queryInterface.bulkInsert('Programmers', [{
      name: 'Danil Agus',
      email: 'danil@mail.com',
      phone: '0821213931239',
      skills: 'Javascript, Java, and PHP',
      address: 'Kebon Jeruk, Jakarta Barat',
      personal_site: 'danilags.com',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Anthony Juan',
      email: 'juan@mail.com',
      phone: '0821554931239',
      skills: 'Javascript, Ruby, VueJS, AngularJS, ReactJS and ExpressJS ',
      address: 'Bekasi, Bumi',
      personal_site: 'indonesiangeek.co.vu',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Oscar Hermawan',
      email: 'oscar@mail.com',
      phone: '0821255931239',
      skills: 'Has the Best Logic forever and ever, master in any programming language',
      address: 'Hacktiv8, Pondok Indah',
      personal_site: 'oscadon.com',
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
