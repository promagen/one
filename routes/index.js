const express = require('express');
const router = express.Router();

const PublicConfig = require('../config/projects');
var localConfig = new PublicConfig();

// var projectList = [];
var projectList = require('../src/project_list');
var title = 'ProMaGen One';

//console.log("projectList.private",projectList.private);

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {
        title: title,
        projects: projectList.public,
        projects_private: projectList.private,
        testurl: localConfig.testurl
    });
});

module.exports = router;
