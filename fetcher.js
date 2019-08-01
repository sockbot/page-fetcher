const fs = require('fs');
const request = require('request');

const args = process.argv.slice(2);
const url = args[0];
const filename = args[1];

// console.log(args);

const fetcher = function(callback) {
  request(url + filename, callback)
  // fs()
}

const saveFile = function(error, response, data) {
  if (error) {
    console.log('Error:', error)
    process.exit();
  }
  // console.log('Response:', response.statusCode)
  fs.open(filename, 'wx', (err, data) => {
    if (err) {
      if (err.code === 'EEXIST') {
        console.error(`${filename} already exists`);
        // prompt to overwrite
        // code goes here
        return;
      }
      throw err;
    }
    fs.writeFile(filename, data, (err) => {
      if (err) throw err;
      console.log('The file has been saved');
    });
  })
}
fetcher(saveFile);