const fs = require('fs');
module.exports = function (filename) {
  fs.readFile(`./${filename}`, 'utf8', (err, file) => {
    if (err) throw err;
    else {
      process.stdout.write(file);
      process.stdout.write('prompt > ');
    }
  });
}
