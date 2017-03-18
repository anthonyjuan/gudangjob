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
    return queryInterface.bulkInsert('Projects', [{
      nama: 'Website Ecommerce',
      deskripsi: 'Saya ingin membuat website ecommerce untuk usaha lele saya, yang didalamnya bisa melakukan transaksi',
      budget: 2000000,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      nama: 'Aplikasi Android',
      deskripsi: 'Saya ingin aplikasi, yang bisa membuat saya senang dan mengerti arti hidup ini',
      budget: 15000000,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      nama: 'Company Profile Website',
      deskripsi: 'Perlu Website company untuk, perusahaan susu milik keluarga saya',
      budget: 5000000,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
    return queryInterface.bulkDelete('Projects', null, {});
  }
};
