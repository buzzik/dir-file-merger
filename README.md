# npm directory-file-merger

node.js module for merging files from directory.
It takes all files from a specific folder and merges their contents into one result file.

## Installing

```
npm install dir-file-fileMerger
```

## Usage

```
const fileMerger = require('./app.js');
let inputDirPath = './dir/';
let resultFile = 'result.txt';
(async() => {
    let result;
    try {
      let result = await fileMerger('inputDirPath, resultFile);
    } catch (error) {
      return console.log(error);
    }
    console.log(result);
})();
```

Optionally you can provide 3rd parameter wich should be a string. This line will be appended to the end of each input file.

```
...
      let result = await fileMerger('inputDirPath, resultFile,'\n');
...
```
