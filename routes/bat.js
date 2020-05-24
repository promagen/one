const express = require('express');
var router = express.Router();
var projectList = require('../src/project_list');
const Run = require('../src/run');
const RunCmd = require('../src/run_cmd');
const RunCmdPar = require('../src/run_cmd_par');
const PublicConfig = require('../config/projects');
var localConfig = new PublicConfig();
const path = require('path');



console.log('localConfig.os');
console.log(localConfig.os);

var getFileList = require('../src/get_bat_file_list');
if (localConfig.os === 'Linux') {
    getFileList = require('../src/get_sh_file_list');
}



/* get list of executable files from project folder */
router.get('/p/:project_type/:project_id/:file_id/q/:query', function (req, res, next) {

    console.log('GET /p/:project_type/:project_id/:file_id/q/:query');

    var query = req.params.query;
    console.log('RunCmdPar.Query: ', query);

    var projectType = req.params.project_type;
    console.log('RunCmdPar.projectType: ', projectType);


    var projectId = req.params.project_id;
    console.log('RunCmdPar.projectId: ', projectId);

    //TODO: Should be an int
    var fileId = req.params.file_id;
    console.log('RunCmdPar.fileId: ', fileId);


    var projectVolume = projectList[projectType][projectId]['volume'];
    console.log('RunCmdPar.projectVolume: ', projectVolume);


    var project_path = projectVolume + projectList[projectType][projectId]['path'];

    console.log('project_path');
    console.log(project_path);

    getFileList(project_path, function (FileList) {
        console.log(FileList);

        FileList.forEach(function (filename, index) {

            // TODO: create filelogs
            console.log('filename');
            console.log(filename);

            console.log(fileId);
            console.log(index);
            console.log(index == fileId);

            if (index == fileId) {
                RunCmdPar(filename, query, res);
                // let RunCommand = new Run();
                // RunCommand
            }
        });
    });
});



/* get list of executable files from project folder */
router.get('/p/:project_type/:project_id/:file_id', function (req, res, next) {

    console.log('GET /p/:project_type/:project_id/:file_id');

    var projectType = req.params.project_type;
    console.log('RunCmd. projectType:', projectType);


    var projectId = req.params.project_id;
    console.log('RunCmd. projectId: ', projectId);

    //TODO: Should be an int
    var fileId = req.params.file_id;
    console.log('RunCmd. fileId: ', fileId);


    var projectVolume = projectList[projectType][projectId]['volume'];
    console.log('RunCmd. projectVolume: ', projectVolume);


    var project_path = projectVolume + projectList[projectType][projectId]['path'];
    console.log('RunCmd. project_path: ', project_path);
    // var dir = path.dirname(filename);


    getFileList(project_path, function (FileList) {
        console.log('RunCmd. FileList:', FileList);

        FileList.forEach(function (filename, index) {

            var dirname = path.dirname(filename);
            var basename = path.basename(filename);



            console.log('RunCmd. FileList. basename:', basename);
            console.log('RunCmd. FileList. dirname:', dirname);
            console.log('RunCmd. FileList. filename:', filename);
            console.log('RunCmd. FileList. fileId:',fileId);
            console.log('RunCmd. FileList. index:',index);
            console.log(index == fileId);

            if (index == fileId) {
                // RunCmd(filename, dir, res);
                RunCmd(basename, dirname, localConfig, res);
                localConfig.isCd = true;
            }
        });
    });
});




module.exports = router;
