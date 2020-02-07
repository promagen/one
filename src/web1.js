
// show SPAWN logs
(function() {
    var childProcess = require("child_process");
    var oldSpawn = childProcess.spawn;
    function mySpawn() {
        console.log('spawn called');
        console.log(arguments);
        var result = oldSpawn.apply(this, arguments);
        return result;
    }
    childProcess.spawn = mySpawn;
})();



// Create the path of the express server to pass in with the spawn call
var webServerDirectory = path.join(__dirname, 'http', 'bin', 'www');
log.info('starting node script: ' + webServerDirectory);

var nodePath = "/usr/local/bin/node";
if (process.platform === 'win32') {
    // Overwrite with the windows path...only testing on mac currently
}

// Optionally update environment variables used
var env = JSON.parse(JSON.stringify(process.env));

// Start the node express server
const spawn = require('child_process').spawn;
webServer = spawn(nodePath, [webServerDirectory], {
    env: env
});

// Were we successful?
if (!webServer) {
    log.info("couldn't start web server");
    return;
}

// Handle standard out data from the child process
webServer.stdout.on('data', function (data) {
    log.info('data: ' + data);
});

// Triggered when a child process uses process.send() to send messages.
webServer.on('message', function (message) {
    log.info(message);
});

// Handle closing of the child process
webServer.on('close', function (code) {
    log.info('child process exited with code ' + code);
    webServer = null;

    // Only restart if killed for a reason...
    if (!shuttingDown) {
        log.info('restarting...');
        startExpress();
    }
});

// Handle the stream for the child process stderr
webServer.stderr.on('data', function (data) {
    log.info('stderr: ' + data);
});

// Occurs when:
// The process could not be spawned, or
// The process could not be killed, or
// Sending a message to the child process failed.
webServer.on('error', function (err) {
    log.info('web server error: ' + err);
});