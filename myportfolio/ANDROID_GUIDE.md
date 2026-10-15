# Turn this React (Vite) portfolio into an Android app (Capacitor)

## One-time setup
1. Install **Node 20+** and **Android Studio** (https://developer.android.com/studio). Open Android Studio once so it installs the Android SDK.
2. In this folder run:

   npm install
   npm install @capacitor/core
   npm install -D @capacitor/cli @capacitor/android
   npm run build
   npx cap add android

   (capacitor.config.json is already included: appId com.muthaiyan.portfolio, webDir dist)

## Every time you change the website
   npm run android:sync      # builds React and copies it into the Android project

## Run / build the app
   npm run android:open      # opens Android Studio
- Test: press the green Run button (emulator or a USB phone with USB debugging on).
- APK to share: Build > Build Bundle(s) / APK(s) > Build APK(s).
- Play Store: Build > Generate Signed Bundle (AAB), keep your keystore safe.

## Customising
- App name / id: capacitor.config.json (change appId before publishing; it can't change later on Play Store).
- App icon / splash: `npm i -D @capacitor/assets`, put icon.png (1024x1024) in `assets/`, run `npx capacitor-assets generate --android`.

## What was changed for you
- vite.config.js: base '/portfolio/' -> './' (needed so files load inside the app). 
  If you still deploy to GitHub Pages, change it back to '/portfolio/' for that deploy.
- index.html: viewport-fit=cover + page title.
- package.json: added android:* scripts. capacitor.config.json: added.
