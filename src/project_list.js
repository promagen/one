const PublicConfig = require('../config/projects');
var localConfig = new PublicConfig();

var projectList = {
    private: localConfig.projectListPrivate,
    public: {},
};

module.exports = projectList;
