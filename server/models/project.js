
module.exports = (sequelize, DataTypes) => {
  const Project = sequelize.define('Project', {
    creator: {
      type: Sequelize.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: 'creator is required!'
        },
        notEmpty: {
          args: true,
          msg: 'creator is required!'
        },
        isInt: {
          args: true,
          msg: 'creator must be an integer!'
        }
      }
    },
    project_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          args: true,
          msg: 'project id is required!'
        },
        notEmpty: {
          args: true,
          msg: 'project id is required!'
        },
        isInt: {
          args: true,
          msg: 'project id must be an integer!'
        }
      }
    }
  });
  return Project;
};
