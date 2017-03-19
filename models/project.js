'use strict';
module.exports = function(sequelize, DataTypes) {
  var Project = sequelize.define('Project', {
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    budget: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        Project.hasMany(models.ProjectProgrammer);
        Project.belongsToMany(models.Programmer, {through: 'ProjectProgrammer'})
      }
    }
  });
  return Project;
};