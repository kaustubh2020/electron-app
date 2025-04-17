const { app, BrowserWindow, Menu } = require("electron/main");
/* const path = require("node:path"); */
const { menuList } = require("./menuList");

// Menu
const menuItems = menuList;

const menu = Menu.buildFromTemplate(menuItems);
Menu.setApplicationMenu(menu);

//Create new window
const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    /*  webPreferences: {
      preload: path.join(__dirname, "preload.js"),
    }, */
  });

  win.loadFile("index.html");
};

app.whenReady().then(() => {
  createWindow();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
