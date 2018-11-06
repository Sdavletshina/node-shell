

const request = require('request');
module.exports = function(url){
  request(url, (error, response, body) => {
    console.log('error', error);
    console.log('response', response);
    process.stdout.write(body);
    process.stdout.write('prompt > ');
  })

}

