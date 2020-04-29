// Modules to control application life and create native browser window
const electron = require('electron');
const app = electron.app; // Module to control application life.
const BrowserWindow = electron.BrowserWindow; // Module to create native browser window.

const path = require('path');
const web = require('./src/web'); // Start Express web app based on Express
return new web();
