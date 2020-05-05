## ecosystem from API Foundation


USE APIbuild based on APIunit definition create enironment by APIcra scripts

+ APIbuild,
 Basically, Build is the process of creating the application program for a software release, by taking all the relevant source code files and compiling them and then creating a build artifacts, such as binaries or executable program, etc.
  + here will be generated many different version of many enironment to binary
  + mixin environment and source code:
    + APIunit definition
    + Apicra script
    + Apiexec runner
    + source code app


+ APIexec, executor/runner is executing APIcra based on APIunit definition
  + is using scripts to execute commands by ProMaGen library
  + APIexec is library based on
    + python
    + fastapi openapi
    + generated sdk
    + documentation
  + docs, is possible to run in any language, bash scripts, using actually infrastructure


+ APIunit, definition of application and environment
  + logic to automatisation different servers:
  + local
  + dev/test
  + production


+ APIcra, scripts to create enironment for some source code app
    + many different standarisated libraries of shell scripts to create/remove environment


+ ProMaGen is UI for APIexec, based on manual, or for admins, hi leel management
  + nodejs
  + python
  + js


vodAPI
+ api ecosystem

vodAPP
+ cloud for app


Now is possible to executing directly scripts from apicra by promagen, but we need runner and definition to say, what the server
should do automaticly.


It's a background for a APicra Runner preparation with own UI
