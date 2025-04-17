const { app, shell } = require("electron");

exports.menuList = [
  {
    label: "Menu",
    submenu: [{ label: "About" }],
  },
  {
    label: "File",
    submenu: [
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
