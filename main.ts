/* eslint-disable */
const electron = require('electron');
const path = require('path');
const url = require('url');

const { app } = electron;

app.disableHardwareAcceleration();

const { BrowserWindow } = electron;

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1024,
    height: 768,
    // frame: false,
    webPreferences: {
      nodeIntegration: true,
      nodeIntegrationInWorker: true,
      // webSecurity: false,
      // allowRunningInsecureContent: true,
    },
  });

  // mainWindow.loadURL('http://localhost:8080');
  mainWindow.loadURL(
    url.format({
      pathname: path.join(__dirname, 'dist/index.html'),
      protocol: 'file:',
      slashes: true,
    }),
  );

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}

app.once('ready', () => {
  createWindow();
  mainWindow.webContents.setFrameRate(60);
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});
