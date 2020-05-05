# Window
how to implement

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
