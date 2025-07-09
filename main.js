const { app, BrowserWindow, shell } = require('electron');
const path = require('path');

// GPU donanım ivmesini kapat (performans için)
app.commandLine.appendSwitch('disable-gpu');
app.commandLine.appendSwitch('disable-features', 'HardwareMediaKeyHandling,MediaSessionService');

function createWindow() {
  const win = new BrowserWindow({
    width: 1280,
    height: 800,
    resizable: true,
    icon: path.join(__dirname, 'icon.ico'),
    show: false, // pencere hazır olmadan gösterme (takılmaları azaltır)
    webPreferences: {
      contextIsolation: true,
      nodeIntegration: false,
      sandbox: true,
      devTools: false,
      spellcheck: false,
      webSecurity: true,
      partition: 'persist:orneksiteyapp' // cache ve session için sabit alan
    }
  });

  // Pencere hazır olunca göster
  win.once('ready-to-show', () => {
    win.show();
  });

  // Web sitesini yükle
  win.loadURL('https://orneksite.com.tr/');

  // Menüleri kaldır
  win.removeMenu();

  // Uygulama içinden çıkan linkler tarayıcıda açılsın
  win.webContents.setWindowOpenHandler(({ url }) => {
    shell.openExternal(url);
    return { action: 'deny' };
  });
}

// Uygulama hazırsa pencereyi oluştur
app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

// Tüm pencereler kapandığında uygulamayı kapat
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
