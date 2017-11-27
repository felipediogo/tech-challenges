const fs = require('fs');

function readFile(fileName, type = 'utf-8') {
    return new Promise(function (resolve, reject) {
        fs.readFile(fileName, type, (err, data) => {
            if (err) { reject(err); }
            resolve(data);
        })
    });
}
module.exports = readFile;