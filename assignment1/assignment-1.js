// const fs = require('fs');
const fs = require('fs/promises');

const myFileWriter = async (fileName, fileContent) => {
  // write code here
  fs.writeFile('textFile.txt', 'Hello', (err) => {
    if (err) console.log(err);
  });
  // dont chnage function name
};

const myFileReader = async (fileName) => {
  // write code here`
  fs.readFile('textFile.txt', (err, data) => {
    if (err) console.log(err);
    console.log(data);
  });
  // dont chnage function name
};

const myFileUpdater = async (fileName, fileContent) => {
  // write code here
  fs.appendFile('textFile.txt', ' World!', (err) => {
    if (err) console.log(err);
  });
  // dont chnage function name
};

const myFileDeleter = async (fileName) => {
  // write code here
  fs.unlink('textFile.txt', (err) => {
    if (err) console.log(err);
  });
  // dont chnage function name
};

module.exports = { myFileWriter, myFileUpdater, myFileReader, myFileDeleter };
