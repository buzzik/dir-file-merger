'use strict'

const fs = require('fs');
const path = require('path');
const { promisify } = require('util');
const readdir = promisify(fs.readdir);
const { writeFile } = require('fs').promises;
async function mergeFiles(dir, output) {
    dir = dir || this.dir;
    let names;
    let result = '';
    try {
        names = await readdir(dir);
    } catch (err) {
        return err;
    }
    names.forEach(file => {
        let filePath = `${dir}/${file}`;
        let data = fs.readFileSync(filePath, "utf8");
        result += `${data}`;
    });
    try {
        await writeFile(output, result);
        return 'file saved';
    } catch (error) {
        return error;
    }
}
module.exports = mergeFiles;