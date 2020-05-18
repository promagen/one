const path = require("path");
require('shelljs/global');

// http://adilapapaya.com/docs/shelljs/
// https://documentup.com/shelljs/shelljs

function RunCmdPar(filename, query, res) {
    var info = '';
    // var spawn = require('child_process').spawn,
    //     ls = spawn('cmd.exe', ['/c', filename]);

    // var name = filename.replace(/^.*[\\\/]/, '');

    //path.basename('/foo/bar/baz/asdf/quux.html')
    var dir = path.dirname(filename);

    var stdout = '';

    // var partition = 'e:';
    // var command = 'cd ' + dir + ' && ' + filename;
    // var command = 'bash ' + filename;
    var command = filename + ' ' + query;

    console.log('RunCmdPar().command:', command);

    // var configs = {};
    // var configs = {silent:true,async:false};

    console.log('RunCmdPar().dir', dir);

    if (cd(dir).code !== 0) {
        echo('Error: Change DIR failed');
        exit(1);
    }
    try {

        var version = exec('node --version', {silent: true}).stdout;
        console.log('RunCmdPar().version',version);

        // var child = exec(command, {async:true});
        // child.stdout.on('data', function(data) {
        //     /* ... do something with data ... */
        // });

        exec(command, function (code, stdout, stderr) {
            console.log('Exit code:', code);
            console.log('Program output:', stdout);
            console.log('Program stderr:', stderr);

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
        echo('--------------------------------------------------------');
    } catch (err) {
        stdout = err.stack;
        // ^ will output the "unexpected" result of: elsewhere has failed
    }

    // Print out the result
    console.log(stdout);

    // stdout = stdout.replace(/\r\n|\r|\n/, '<br/>');
    // res.send(stdout);
}

module.exports = RunCmdPar;
