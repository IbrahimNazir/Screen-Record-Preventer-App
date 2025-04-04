const { app, BrowserWindow } = require("electron");
const path = require("path");

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true, // Allows Node.js in renderer
      contextIsolation: false, // Simplifies access (use with caution)
    },
    frame: true, // Keep window frame for user experience
    resizable: true,
  });

  // Load the UI from public folder
  win.loadFile(path.join(__dirname, "../public/index.html"));

  // Enable content protection to block screenshots/recordings
  win.setContentProtection(true); // Works on macOS and some Windows captures

  // Prevent external navigation (optional security)
  win.webContents.on("will-navigate", (event) => {
    event.preventDefault();
  });

  // Open DevTools for debugging (remove in production)
  // win.webContents.openDevTools();
}

app.whenReady().then(() => {
  createWindow();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});
