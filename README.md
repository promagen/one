# ProMaGen ONE
scripts for one project in one folder
https://github.com/promagen/one.git

Main Website Documentation
https://promagen.com/


Blog: News, Updates
https://blog.promagen.com/



## Why ProMaGen
+ wspiera budowanie aplikacji i kontrole środowiska od strony tworzenia procesów
    + Dane, baza danych
        + migracja danych
        + aktualizacja
        + restowanie
        + zamian haseł użytkowników
    + Software Development, aplikacja z projektu
        + aktualizacja bibliotek
        + git: github
        + packages: composer, npmjs

    + Marketing, publikowanie informacji o zmianach, aktualizacjach
        + blogi: wordpress
        + social media: twotter
        + ...


## Versions

    [platform]-[interface]-[language]

+ platform:
    + (all)
    + win
    + linux
    + ios
    + android

+ interface
    + restapi
    + gui

+ language:
    + nodejs
    + python
    + go





Start BIN
## Linux
copy the executable file from /bin folder to another, your project folder and execute

    /bin/app

## Windows
copy the executable file from /bin folder to another, your project folder and execute

    /bin/app.exe

## TODO
+ user path
+ current path
+ scan the popular path and load if exist
+ check, which type of script extension is:
    + sh / bat
    + php
    + py

Use as installer to another application
+ nodejs
+ php composer
+ java maven

# FOR Developers

Install on linux

    sudo apt install npm

Install on windows

    npm install

Node on linux

    sudo npm install -g npm

Start

    node promagen.js


## compiling code with nexe
https://github.com/nexe/nexe

## install nexe
win
    npm i nexe -g

linux

    sudo npm i nexe -g

compile

    nexe app.js
    nexe promagen.js --build
    nexe -i promagen.js --build -o promagen.exe -r 1.0.1 --verbose

    nexe --build -o promagen -r "./views/**/*" -r "./src/**/*" -r "./public/**/*" --verbose
    nexe .\promagen.js --build -o promagen.exe --verbose


## Alternative

https://github.com/frankhale/electron-with-express



## Wix toolset
https://github.com/wixtoolset
https://github.com/wixtoolset/wix3/releases/tag/wix3112rtm


## nasm repair

download:
https://www.nasm.us/pub/nasm/releasebuilds/2.14rc16/win64/nasm-2.14rc16-installer-x64.exe

    start /wait nasm.exe /Spython
    ps: $env:path="C:\Program Files\nasm;$($env:path)"

## Electron
https://github.com/electron/simple-samples/blob/master/prices/package.json

    npm install electron-builder --save-dev

    npm i -g electron-builder

remove files

    rm dist

generate

    npm run dist


### Electron package module
https://github.com/Urucas/electron-packager-interactive

    npm install -g electron-packager-interactive

### packager
https://www.npmjs.com/package/electron-packager

    electron-packager .

## Electron pack
https://medium.com/jstack-eu/using-electron-with-react-and-node-b498fbf23272

    npm run electron-pack
    electron-builder -c.extraMetadata.main='./app.js'

### Builder
https://stackoverflow.com/questions/36515099/how-to-package-an-electron-app-into-a-single-executable
electron-builder

    electron-builder --publish --win

stworzenie instalatora w folderze dist

    electron-builder --win

# install build dependency modules
    npm install nan
    npm install node-gyp

### electron logs

    npm i electron-log

### Elctron with boxedapp
https://www.boxedapp.com/boxedapppacker/usecases/pack_node_webkit_app_into_single_exe.html


## NW JS

    npm install -g nw

### NW examples
https://github.com/zcbenz/nw-sample-apps/tree/master/file-explorer

## Shell execute file
https://ourcodeworld.com/articles/read/154/how-to-execute-an-exe-file-system-application-using-electron-framework

    var child = require('child_process').execFile;
    var executablePath = "C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe";
    var parameters = ["--incognito"];

    child(executablePath, parameters, function(err, data) {
         console.log(err)
         console.log(data.toString());
    });

## Problem with vcbuild.bat
run in powershell

    npm install --global windows-build-tools

## About processes
https://nodejs.org/api/child_process.html



## ProMaGen

### based on npm versions:

+ desktop: local with nexe and electron window
    + express
    + electron
    + nexe / ...

+ server: only express service, works on external domain
    + express
    + node js service

### based on java versions:
+ desktop:
    + JVM

+ server:
    + .jar service on tomcat

+ mobile: server + optimisation for mobile devices
    + express
    + nexe
    + https://github.com/Urucas/slideout


## Alternatives for electron
https://www.phoronix.com/scan.php?page=news_item&px=HTML5-Golang-Desktop-Apps
The Electron software framework that allows creating desktop GUI application interfaces using JavaScript and relies upon a bundled Chromium+Node.js run-time is notorious among most Linux desktop users for being resource heavy, not integrating well with most desktops, and generally being despised. For those that are fond of using web standards for creating desktop GUIs, now there is a way to create desktop application front-ends using HTML5 and Golang but with less baggage.

## The Way, Solutions
https://xpda.net/
Cross-Platform Desktop Apps (XPDA)
Write Once Run Anywhere (WORA) development for desktop operating systems.
