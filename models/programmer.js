'use strict';
module.exports = function(sequelize, DataTypes) {
  var Programmer = sequelize.define('Programmer', {
    name: DataTypes.STRING,
    email: DataTypes.TEXT,
    phone: DataTypes.STRING,
    skills: DataTypes.TEXT,
    address: DataTypes.TEXT,
    personal_site: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        Programmer.hasMany(models.ProjectProgrammer);
        Programmer.belongsToMany(models.Project ,{through : 'ProjectProgrammer'})
      }
    }
  });
  return Programmer;
};