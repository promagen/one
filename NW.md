## NW JS
https://nwjs.readthedocs.io/en/latest/For%20Users/Getting%20Started/#example-3-using-nodejs-api

The gist is that it basically extends the JS engine for you to write a web-based app supporting node's extended object model, and modules... you then package your package.json start.html modules and js files into a zip (with the .nw extension) and run it with nw(.exe) .. there are windows, mac and linux builds available.

    npm install -g nw

### NW examples
https://github.com/zcbenz/nw-sample-apps/tree/master/file-explorer


## nodebob, NW EXE

Install

    git clone https://github.com/geo8bit/nodebob.git nodebob

Execute

    nodebob/build.bat

    .\nodebob\build.bat



## nw-builder
https://github.com/nwjs-community/nw-builder

    npm install nw-builder -g

During development you can run NW.js with nwbuild -r path/to/your/younwapp/

    nwbuild -r .
    nwbuild -r F:\\WebstormProjects\\nw-sample-apps\\webgl


