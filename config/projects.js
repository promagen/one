const osHomedir = require('os-homedir');
const os = require('os');
const os_name = os.type();

// var project_path = '../';
//project_path = project_path.replace(/^~/, osHomedir());
// if(os_name === 'Linux'){
//     project_path = '/home/tomaszsapletta/devops-gui-projects';
// }

// project_path = 'C:\\WebstormProjects\\one';
// console.log('config.js project_path:', project_path);
console.log('config.js dirname:', __dirname);

const fs = require('fs');


try {
    var config_path = '../promagen.json';
    resolve = require('path').resolve
    config_path = resolve(config_path)

    if (fs.existsSync(config_path)) {
        console.log("File exists.")
    } else {
        console.log("File does not exist.")
        config_path = 'promagen.json';
    }
} catch(err) {
    console.error(err)
}


console.log('config_path',config_path);

let rawdata = fs.readFileSync(config_path);
// if not exist read internal
//let rawdata = fs.readFileSync('promagen.json');

let projectList = JSON.parse(rawdata);
console.log(projectList);

// TODO: zrobic 2 rozne ustawienia, bazujace na tej samej bibliotece, ladowane w zaleznosci od kontekstu
module.exports = function () {

    // var dir= '../'
    // if (cd(dir).code !== 0) {
    //     echo('Error: Change DIR failed');
    //     exit(1);
    // }

    return {

        // environment settings: promagen.settings.json

        username: 'tomaszsapletta',
        // base path that will be used to resolve all patterns (eg. files, exclude)
        // project_path: project_path,

        // web server port
        port: 80,
        testurl: 'http://localhost:8080',

        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: false,

        // SYSTEM OS
        os: os_name,
        // dir_separator: os_name,
        isCd: false,

        // TODO, path generator, for each path or each folder in one step less
        // projects list: promagen.projects.json
        projectListPrivate: projectList
    }
};
