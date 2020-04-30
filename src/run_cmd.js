require('shelljs/global');
const path = require('path');
const Formatting = require('../src/formatting');

// http://adilapapaya.com/docs/shelljs/
// https://documentup.com/shelljs/shelljs

if (cd('../').code !== 0) {
    echo('Error: Change DIR failed');
    exit(1);
}

function RunCmd(filename, dir, localConfig, res) {
    var info = '';
    // var spawn = require('child_process').spawn,
    //     ls = spawn('cmd.exe', ['/c', filename]);

    // var name = filename.replace(/^.*[\\\/]/, '');

    //path.basename('/foo/bar/baz/asdf/quux.html')

    if (!which('docker')) {
        info = 'Sorry, this script requires DOCKER';
        console.log(info);
        echo(info);
        exit(1);
    }

    if (!which('docker-compose')) {
        info = 'Sorry, this script requires DOCKER';
        console.log(info);
        echo(info);
        exit(1);
    }

    var stdout = '';
    // if(dir.length > 1){
    //     dir = dir + path.sep;
    // }
    // var command = dir + filename;
    var command = filename;

    console.log('RunCmd(). command:', command);


    try {
        exec(command, function (code, stdout, stderr) {
            console.log('RunCmd(). Exit code:', code);
            // For admins role : 3001
            console.log('RunCmd(). Program output:', stdout);
            // User Role, show the Errors :3002
            console.log('RunCmd(). Program stderr:', stderr);

            var message = '<br/>'
                + Formatting(code).coloring('gray').getText()
                + Formatting(stdout).cleaning().coloring('darkblue').getText()
                + Formatting(stderr).cleaning().coloring('darkred').getText()
                + '<br/>';

            res.send(message);
        });

        // // stdout = exec( command, configs ).stdout;
        // if (exec(command, configs).code !== 0) {
        //     echo('Error: Script failed');
        //     exit(1);
        // }
        echo('RunCmd(). --------------------------------------------------------');
    } catch (err) {
        stdout = err.stack;
        // ^ will output the "unexpected" result of: elsewhere has failed
    }

    // Print out the result
    console.log(stdout);

    // stdout = stdout.replace(/\r\n|\r|\n/, '<br/>');
    // res.send(stdout);
}

module.exports = RunCmd;
