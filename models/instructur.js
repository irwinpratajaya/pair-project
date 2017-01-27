'use strict';
module.exports = function(sequelize, DataTypes) {
  var Instructur = sequelize.define('Instructur', {
    StudentName: DataTypes.STRING,
    score: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Instructur;
};