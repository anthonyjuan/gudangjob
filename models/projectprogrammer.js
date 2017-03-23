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
    },
    instanceMethods: {
      getJumlahPendaftar: function(project, relation) {
        if(project.id == relation.ProjectId) {
          return 1;
        } else {
          return 0;
        }
      }
    }
  });
  return ProjectProgrammer;
};