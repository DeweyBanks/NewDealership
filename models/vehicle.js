'use strict';
module.exports = function(sequelize, DataTypes) {
  var Vehicle = sequelize.define('Vehicle', {
    title: DataTypes.STRING,
    description: DataTypes.TEXT
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        Vehicle.belongsTo(models.User, {
          onDelete: "CASCADE",
          foreignKey: {
            allowNull: true
          }
        });
      }
    }
  });
  return Vehicle;
};
