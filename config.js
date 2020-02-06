const osHomedir = require('os-homedir');
const os = require('os');
const os_name = os.type();

var project_path = './';
//project_path = project_path.replace(/^~/, osHomedir());
// if(os_name === 'Linux'){
//     project_path = '/home/tomaszsapletta/devops-gui-projects';
// }

// project_path = 'C:\\WebstormProjects\\one';
console.log('project_path');
console.log(project_path);

module.exports = function () {
    return {

        username: 'tomaszsapletta',
        // base path that will be used to resolve all patterns (eg. files, exclude)
        project_path: project_path,
        // web server port
        port: 3001,

        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: false,

        // SYSTEM OS
        os: os_name,

        projectListPrivate: [
            {
            'url': 'project/private/' + 0,
            'title': 'Current Folder',
            'volume': '',
            'path': './',
            'domain': 'localhost',
            'files': []
        }]
    }
};