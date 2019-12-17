const actions = require('../data/helpers/actionModel');
const projects = require('../data/helpers/projectModel');

function validateProjectId() {
    return (req, res, next) => {
      projects
        .get(req.params.id)
        .then(project => {
          if (project) {
            req.project = project;
            next();
          } else {
            res.status(404).json({ message: "No project found" });
          }
        })
        .catch(error => {
          next(error);
        });
    };
  }