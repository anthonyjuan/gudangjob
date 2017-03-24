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
      },
      getProjectStatus: function(projects,relations,programmers) {
        let arrData = []
        projects.forEach((project) => {
          let obj = {};
          let status = false;
          obj.idProject = project.id
          obj.namaProject = project.name;
          relations.forEach((relation) => {
            if(relation.ProjectId == project.id) {
              if(relation.status == true) {
                programmers.forEach((programmer) => {
                  if (relation.ProgrammerId == programmer.id) {
                      obj.namaProgrammer = programmer.name
                  }
                })

                status = true;
                obj.statusProject = status;
              }
            }
          })

          if(status == false) {
            obj.programmerId = "";
            obj.namaProgrammer = "";
            obj.statusProject = false;
          }
          arrData.push(obj);
        })

        return arrData;
      }
    }
  });
  return Project;
};