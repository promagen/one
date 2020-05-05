# APIexec

library supported on nodejs, python, php for executing shell scripts

packages in github
https://github.com/orgs/APIexec/packages


## TODO system

preparing ProMaGen as library on npmjs
and submodules as library to import for:
+ apiexec

zamiast one / multi zrobić domyślnie "one", bez pliku konfiguracyjnego i "multi" z wieloma zdefiniowanymi w pliku projektami

Wersje:
+ biblioteka apiexec w python, nodejs, php
  + library
+ openAPI + apiexec library
+ widok w VUE/jQUERY lączący się z API poprzez SDK
  + server on browser
  + desktop (electron, nw, ..)


+ Create Python version of library and service API, based on FastAPI + frontend on vue, or simple JS with jLoads
  + API models
  + Requests
    + list of projects
    + list of files in project folder
    + execute script
    + get result
    + get list of history commands
    + credentials and auth

+ Create SDK based on OpenAPI for many languages to call it by API
+ Create Vue JS application and Jquery/JS app on frontend to use APIwith SDK generated from OpenApi



## TODO library apiexec

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
