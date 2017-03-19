'use strict';
module.exports = function(sequelize, DataTypes) {
  var ProjectProgrammer = sequelize.define('ProjectProgrammer', {
    projectId: DataTypes.INTEGER,
    programmerId: DataTypes.INTEGER,
    status: DataTypes.BOOLEAN
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        ProjectProgrammer.belongsTo(models.Project, {foreignKey: 'projectId'})
        ProjectProgrammer.belongsTo(models.Programmer, {foreignKey: 'programmerId'})
      }
    }
  });
  return ProjectProgrammer;
};