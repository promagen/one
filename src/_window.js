module.exports = function () {

// Modules to control application life and create native browser window
    const electron = require('electron');
    const app = electron.app; // Module to control application life.
    const BrowserWindow = electron.BrowserWindow; // Module to create native browser window.


    // const log = require('electron-log'); // the app to write to the console, as well as a file located at ~/Library/Logs/[productName]
    const path = require('path');
    const web = require('./web'); // Start Express web app based on Express
// CONFIG
    const PublicConfig = require('../config');
    var localConfig = new PublicConfig();


// Make sure to set the logging level to the
//     log.transports.console.level = 'info';
//     log.transports.file.level = 'info';

// Helpers
    const os = require('os');
    const url = require('url');

// Name of the product, used in some app labels
    const productName = require('../package.json').productName;

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
    var mainWindow;
// var webServer;
    var shuttingDown;


    function startExpress() {
        // require('../src/web')(); // Start Express web app based on Express
        return new web();
    }

    function createWindow() {
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
            icon: path.join(__dirname, "./public/images/promagen32.png")
        });

        // log.info(mainWindow);

        var localurl = 'http://localhost:' + localConfig.port + '/';
        // var localurl = 'http://localhost:' + localConfig.port + '/electron/index.html';
        // var localurl = url.format({
        //     // pathname: 'localhost:' + localConfig.port + '/electron/index.html',
        //     pathname: 'localhost:' + localConfig.port + '',
        //     protocol: 'http:',
        //     slashes: true
        // });
        console.log(localurl);

        var localfile = './public/electron/index.html';
        // localfile = path.join(__dirname, localfile);
        console.log(localfile);

        // mainWindow.loadURL(localurl);
        mainWindow.loadFile(localfile)

        // mainWindow.focus();
        // mainWindow.webContents.openDevTools();
        // mainWindow.setProgressBar(1);

        // and load the index.html of the app.
        // mainWindow.loadFile('public/electron/index.html')

        // Open the DevTools.
        // mainWindow.webContents.openDevTools()

        // var Positioner = require('electron-positioner'); // https://github.com/jenslind/electron-positioner
        // var positioner = new Positioner(mainWindow);
// Moves the window top right on the screen.
//         positioner.move('topRight');

// Returns `{x,y}`
//         positioner.calculate('trayCenter', trayBounds)

        /*
        A string telling where to place the window. Allowed values:

            trayLeft
        trayBottomLeft
        trayRight
        trayBottomRight
        trayCenter
        trayBottomCenter
        topLeft
        topRight
        bottomLeft
        bottomRight
        topCenter
        bottomCenter
        leftCenter
        rightCenter
        center
        trayBounds
        Tray bounds, only needed for the following positions:

            trayLeft
        trayBottomLeft
        trayRight
        trayBottomRight
        trayCenter
        trayBottomCenter
        */
    }


    // console.log(app);
    // process.exit();
    // console.log(app.on);

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
    app.on('ready', function () {
        shuttingDown = false;
        startExpress();
        // require('../src/web')(); // Start Express web app based on Express

        createWindow(); // Open the Window
    });


// Called before quitting...gives us an opportunity to shutdown the child process
    app.on('before-quit', function () {
        // log.info('gracefully shutting down...');

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
        // log.info('shutting down...');
        process.exit();
    });

    app.on('activate', function () {
        // On OS X it's common to re-create a window in the app when the
        // dock icon is clicked and there are no other windows open.
        if (mainWindow === null) {
            createWindow()
        }
    });


// Quit when all windows are closed.
//     app.on('window-all-closed', function () {
//         // On macOS it is common for applications and their menu bar
//         // to stay active until the user quits explicitly with Cmd + Q
//         if (process.platform !== 'darwin') app.quit()
//     });
//
//     app.on('activate', function () {
//         // On macOS it's common to re-create a window in the app when the
//         // dock icon is clicked and there are no other windows open.
//         if (BrowserWindow.getAllWindows().length === 0) createWindow()
//     });

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
};
