const fs = require('fs');
const request = require('request');

const args = process.argv.slice(2);
const url = args[0];
const filename = args[1];

// console.log(args);

const fetcher = function() {
  request(url + filename, (error, response, body) => {
    // console.log('error:', error); // Print the error if one occurred
    // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    // console.log('body:', body); // Print the HTML for the Google homepage.

    fs.writeFile(filename, body, (err) => {
      if (err) throw err;
      console.log('The file has been saved');
    })

  })
  // fs()
}


fetcher();