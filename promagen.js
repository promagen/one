// Modules to control application life and create native browser window
const electron = require('electron');
const app = electron.app; // Module to control application life.
const BrowserWindow = electron.BrowserWindow; // Module to create native browser window.

const path = require('path');
const web = require('./src/web'); // Start Express web app based on Express
// CONFIG
const PublicConfig = require('./config');
var localConfig = new PublicConfig();


// Name of the product, used in some app labels
const productName = require('./package.json').productName;

// var webServer;
var shuttingDown;


function startExpress() {
    // require('../src/web')(); // Start Express web app based on Express
    return new web();
}

function createWindow() {
    var icon_file = path.join(__dirname, "/public/images/promagen32.png");
    console.log('icon_file:', icon_file);
    // Create the browser window.
    const mainWindow = new BrowserWindow({
        autoHideMenuBar: true,
        width: 1280,
        height: 720,
        // backgroundcolor: '#2e2c29',
        // autoHideMenuBar: true,
        // useContentSize: true,
        title: productName,
        // webPreferences: {
        //     nodeIntegration: true
        //     preload: path.join(__dirname, 'public/electron/preload.js')
        // }
        icon: icon_file
    });

    // var localurl = 'http://localhost:' + localConfig.port + '/';
    // console.log(localurl);
    // mainWindow.loadURL(localurl);

    var localfile = './public/electron/index.html';
    console.log(localfile);
    mainWindow.loadFile(localfile);

    mainWindow.webContents.openDevTools();

}


// Some APIs can only be used after this event occurs.
app.on('ready', function () {
    shuttingDown = false;
    startExpress();
    // require('../src/web')(); // Start Express web app based on Express

    createWindow(); // Open the Window
});


// Called before quitting...gives us an opportunity to shutdown the child process
app.on('before-quit', function () {

    // Need this to make sure we don't kick things off again in the child process
    shuttingDown = true;
    // Kill the web process
    // webServer.kill();
});

// Quit when all windows are closed.
app.on('window-all-closed', function () {
    // On OS X it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== 'darwin') {
        app.quit()
    }
});

process.on("SIGINT", function () {
    //graceful shutdown
    process.exit();
});

app.on('activate', function () {
    // On OS X it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (mainWindow === null) {
        createWindow()
    }
});

