const PublicConfig = require('../config');
var localConfig = new PublicConfig();

var projectList = {
    private: localConfig.projectListPrivate,
    public: {},
};

module.exports = projectList;