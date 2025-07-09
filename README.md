# 🌐 Electron WebView Masaüstü Uygulaması

Bu proje, herhangi bir web sitesini masaüstü uygulaması haline getirmek için geliştirilmiş basit bir Electron yapısıdır.

---

## 📦 İçerik

- Electron ile web sitesi görüntüleme
- Harici linkleri tarayıcıda açma
- Başlangıçta donma önleyici ayarlar
- Custom `.ico` desteği (Windows için)

---

## ⚙️ Kurulum

### 1. Gerekli Yazılımlar

- [Node.js](https://nodejs.org/)
- NPM (Node.js ile birlikte gelir)

### 2. Projeyi Klonla

```bash
git clone https://github.com/kullaniciadi/webview-electron-app.git
cd webview-electron-app
```
### 3. Bağımlılıkları Kur
```bash
npm install
```
🚀 Çalıştırma
```
npm start
```
🛠️ Derleme (EXE Oluşturma)
Uygulamanızı .exe dosyasına dönüştürmek için electron-packager kullanılır.

1. Packager Yükle
```bash
npm install --save-dev electron-packager
```
2. İkon Hazırla
icon.ico dosyasını proje dizinine koy

Gerçek .ico dosyası olmalı (örn: https://icoconvert.com)

3. EXE Olarak Paketle
```bash

npx electron-packager . OrnekUygulama --platform=win32 --arch=x64 --icon=icon.ico --overwrite
```
📁 Çıktı
/OrnekUygulama-win32-x64 klasörü oluşur

İçindeki OrnekUygulama.exe çalıştırılabilir masaüstü uygulamadır

🔒 Güvenlik Notları
sandbox ve contextIsolation gibi güvenlik ayarları aktiftir

nodeIntegration: false ile içerik kodlarından sistem erişimi kapatılmıştır

DevTools devre dışıdır (gerekiyorsa devTools: true yapabilirsin)

📌 Geliştirici Bilgisi
Proje yapısı sade ve modülerdir

Dilersen splash ekran, güncelleme kontrolü, tray menüsü, dark mode gibi özellikler ekleyebilirsin

📩 İletişim
📬 Bu projeyi geliştiren: Emre Gencer – GitHub
💬 Her türlü öneri, sorun bildirimi veya katkı için PR gönderin veya issue açın.

📝 Lisans
MIT © 2025


