process.stdout.write('prompt >');
const pwd = require('./pwd');
const ls = require('./ls')
const cat = require('./cat');
const curl = require('./curl')
process.stdin.on('data', (data) => {
  const cmd = data.toString().trim();
  const cmdArr = cmd.split(' ');

  if (cmdArr[0] === 'pwd') pwd();
  else if(cmdArr[0] === 'ls') ls();
  else if (cmdArr[0] === 'cat') cat(cmdArr[1]);
  else if (cmdArr[0] === 'curl') curl(cmdArr[1])
})
