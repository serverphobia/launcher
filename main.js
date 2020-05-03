/* Electron does not understand ES6 Imports neither Typescript */
const { app, BrowserWindow } = require("electron");
const path = require("path");

let MainWindow = null;
let LoadingWindow = null;
const createLoadingScreen = () => {
  LoadingWindow = new BrowserWindow({
    width: 200,
    height: 400,
    frame: false,
    transparent: true,
    resizable: false,
  });

  LoadingWindow.loadFile(path.join(__dirname, "dist/loading.html"));

  LoadingWindow.on("closed", () => {
    LoadingWindow = null;
  });

  LoadingWindow.webContents.on("did-finish-load", () => {
    LoadingWindow.show();
  });
};

const createWindow = () => {
  MainWindow = new BrowserWindow({
    width: 1280,
    height: 720,
    webPreferences: {
      nodeIntegration: true,
    },
    frame: false,
    maximizable: false,
    resizable: false,
    titleBarStyle: "hidden",
    show: false,
  });

  MainWindow.loadFile(path.join(__dirname, "dist/index.html"));
  MainWindow.webContents.openDevTools({ mode: "detach" });

  MainWindow.on("closed", () => {
    MainWindow = null;
  });

  MainWindow.webContents.on("did-finish-load", () => {
    if (LoadingWindow) {
      LoadingWindow.close();
    }

    MainWindow.show();
  });

  MainWindow.on("ready-to-show", () => {
    MainWindow.show();
    MainWindow.focus();
  });
};

app.on("ready", () => {
  // createLoadingScreen();
  createWindow();
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});

app.on("activate", () => {
  if (MainWindow === null) {
    createWindow();
  }
});
