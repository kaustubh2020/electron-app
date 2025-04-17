const { app, shell } = require("electron");
const { BrowserWindow } = require("electron/main");

exports.menuList = [
  {
    label: "Menu",
    submenu: [{ label: "About" }],
  },
  {
    label: "File",
    submenu: [
      {
        label: "New Window",
        click: async () => {
          const win2 = new BrowserWindow({
            height: 300,
            width: 400,
            show: false,
            backgroundColor: "#2e2c29",
            movable: false,
          });
          win2.loadFile("./index2.html");
          //win2.loadURL("https://google.com");
          win2.once("ready-to-show", () => win2.show());
        },
      },
      {
        label: "Learn More",
        click: async () => {
          await shell.openExternal("https://google.com");
        },
      },
      { type: "separator" },
      { label: "Exit", click: () => app.quit() },
    ],
  },
  {
    label: "Window",
    submenu: [{ role: "Minimize" }, { type: "separator" }, { role: "close" }],
  },
];
