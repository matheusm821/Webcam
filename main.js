const { app, BrowserWindow, screen } = require('electron')

function createWindow() {
  const win = new BrowserWindow({
    width: 204,
    height: 204,
    webPreferences: {
      nodeIntegration: true
    },
    frame: false,
    transparent: true,
    resizable: false

  })

  win.loadFile('index.html')

 
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})