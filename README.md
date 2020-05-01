# ProMaGen ONE
scripts for one project in one folder
https://github.com/promagen/one.git

    git clone https://github.com/promagen/one.git one

Main Website Documentation
https://docs.promagen.com/


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

W przypaku uzycia wersji standalone

## Versions

    [platform]-[interface]-[language]

+ platform:
    + server
    + client
    + standalone
        + independent, without network connection, offline version

+ os:
    + (all)
    + win
    + linux
    + ios
    + android

+ interface:
    + restapi
    + gui

+ language:
    + nodejs
    + python
    + go




## TODO
preparing ProMaGen as library on npmjs
and submodules as library to import for:

+ one / multi
    + server
    + desktop (electron)

Creating Python version of library and service API
based on FastAPI + frontend on vue, or simple JS with jLoads

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

### Electron with boxedapp
https://www.boxedapp.com/boxedapppacker/usecases/pack_node_webkit_app_into_single_exe.html




# Pack the Files with BoxedApp
https://www.boxedapp.com/boxedapppacker/usecases/pack_electron_app_into_single_exe.html
![https://www.boxedapp.com/assets/img/usecases/pack_electron_app_into_single_exe/input_is_electron_exe.png](https://www.boxedapp.com/assets/img/usecases/pack_electron_app_into_single_exe/input_is_electron_exe.png)

Download BoxedApp Packer and run it. Select electron.exe as the input exe and specify the output exe path as you want (you can change the output name).

As you know, one needs to pass the folder name of the electron app to electron.exe in order to run it:

    > electron.exe file-explorer

That's why one should also click "Override command line" and then type:

    <BoxedAppVar:OldCmdLine> file-explorer

on the screen that appears. It means then when someone runs the output exe, it runs it as if "file-explorer" was passed as an argument.

Click Application Directory, then click Add Files..., select all the electron binaries (except electron.exe), and add them.

Then click Import Directory... and first select "file-explorer" and then "locales" and, finally, "resources".

Build it and run. It works!




## Carlo
https://github.com/GoogleChromeLabs/carlo

This will allow you to launch the locally installed Chrome as a shell that can connect to a locally running server application. It does require a local chrome, but is very close to what was asked for.

The approach encouraged by Carlo should be well suited for Progressive Web Apps. Developers looking for full capabilities for desktop applications are likely to continue leveraging Electron.

Electron is the current leader in providing tools for creating desktop applications with web technologies. In contrast to Electron, Carlo does not attempt to bundle a specific version of Chrome and Node.js together, but instead relies on whichever version of Chrome is installed on an end user's computer.

Carlo does not provide capabilities for making true desktop application alternatives such as changing the name, menu, or icon of the browser view. Instead, Carlo is more akin to running an application in a local application server and automating the viewing of that application within Chrome.


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

## lorca
https://archive.fosdem.org/2019/schedule/event/godesktopapps/attachments/slides/2994/export/events/attachments/godesktopapps/slides/2994/slides.pdf
https://ftp.fau.de/fosdem/2019/UD2.120/godesktopapps.webm

https://github.com/zserge/lorca
https://github.com/zserge/webview

Lorca
+ Chrome DevTools Protocol
+ Bind Go functions to JS
+ Call JS from Go
+ Control native window

## Webview
github.com/zserge/webview
Webview is now being rewritten from scratch, with the support of EdgeHTML


## The Way, Solutions
https://xpda.net/
Cross-Platform Desktop Apps (XPDA)
Write Once Run Anywhere (WORA) development for desktop operating systems.


# Push notification

https://morioh.com/p/ba5c0f01e4ef

Code:
https://github.com/bradtraversy/node_push_notifications

Webpush Repo:
https://github.com/web-push-libs/web-push


# The integration with Apicra
https://github.com/apicra

for example:

    .apicra\-project-create.bat "tom-sapletta-com" "apicra/win-python"
