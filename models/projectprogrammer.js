'use strict';
module.exports = function(sequelize, DataTypes) {
  var ProjectProgrammer = sequelize.define('ProjectProgrammer', {
    ProjectId: DataTypes.INTEGER,
    ProgrammerId: DataTypes.INTEGER,
    status: DataTypes.BOOLEAN
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        ProjectProgrammer.belongsTo(models.Project, {foreignKey:'ProjectId'})
        ProjectProgrammer.belongsTo(models.Programmer, {foreignKey:'ProgrammerId'})
      }
    }
  });
  return ProjectProgrammer;
};