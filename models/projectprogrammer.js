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
      },
      getJumlahPendaftar: function(projects, relations) {
        let arrData = []
        projects.forEach((project) => {
          let counter = 0
          let obj = {}
          obj.idProject = project.id
          obj.namaProject = project.name
          relations.forEach((relation) => {
            if(relation.ProjectId == project.id) {
              counter += 1
              obj.jumlahPendaftar = counter;
            }
          })

          if(counter == 0) {
            obj.jumlahPendaftar = 0;
          }
          arrData.push(obj);
        })

        return arrData;
      }
    }
  });
  return ProjectProgrammer;
};