const fsPath = require('fs-path');

var getShFileList = function (path, callback) {

    console.log('getShFileList.path:', path);

    fsPath.find(path, function (filepath, stats, filename) {
        console.log('getShFileList.filename:', filename);
        if (stats === 'file' && /\.sh/.test(filename)) {
            console.log(filename);
            return true;
        }
        return false;
    }, function (err, list) {
        // FileList = list.files;
        callback(list.files.sort());
    });
    // console.log('getFileList', fList);
    // return fList;
    // return FileList;
};

module.exports = getShFileList;
