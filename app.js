'use strict';

const fs = require('fs');
const { promisify } = require('util');
const readdir = promisify(fs.readdir);
const { writeFile } = require('fs').promises;
async function mergeFiles(dir, output) {
  let result = '';
  const names = await readdir(dir);
  names.forEach((file) => {
    const filePath = `${dir}/${file}`;
    const data = fs.readFileSync(filePath, 'utf8');
    result += `${data}`;
  });
  await writeFile(output, result);
  return 'file saved';
}
module.exports = mergeFiles;
