module.exports = function () {

    const createError = require('http-errors');
    const express = require('express');
    const path = require('path');  // https://nodejs.org/api/path.html
    const cookieParser = require('cookie-parser');
    const logger = require('morgan');
    //const auth = require('./auth');

// CONFIG
    const PublicConfig = require('../config');
    var localConfig = new PublicConfig();

//var FileList = [];
    const indexRouter = require('../routes');
    const batRouter = require('../routes/bat');
// var batqRouter = require('./routes/batq');
    const projectRouter = require('../routes/project');

    const web = express();

    // ELECTRON z EXPRESS NIE UZYWA PROMPT
    //web.use(auth); // load athentication data for API,

// TODO: people accounts skype, email, etc
// TODO: load project.js file and load to the projectLIst

// view engine setup
    web.set('views', path.join(__dirname, '../views'));
    web.set('view engine', 'pug');

    web.use(logger('dev'));
    web.use(express.json());
    web.use(express.urlencoded({extended: false}));
    web.use(cookieParser());
    var public_path = path.join(__dirname, '../public');
    console.log('public_path', public_path);
    web.use(express.static(public_path));

    web.use('/', indexRouter);
    web.use('/bat', batRouter);
// web.use('/batq', batqRouter);
    web.use('/project/', projectRouter);


// catch 404 and forward to error handler
    web.use(function (req, res, next) {
        next(createError(404));
    });

// error handler
    web.use(function (err, req, res, next) {
        // set locals, only providing error in development
        res.locals.message = err.message;
        res.locals.error = req.app.get('env') === 'development' ? err : {};

        // render the error page
        res.status(err.status || 500);
        res.render('error');
    });

    web.listen(localConfig.port);

    return web;
};
