const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let inputs = [];
rl.on('line', function (line) {
  inputs.push(parseInt(line));
}).on('close', function () {
  const a = parseInt(inputs[0]);
  const b = parseInt(inputs[1]);

  if (a > 0 && b > 0) {
    console.log(1);
  } else if (a < 0 && b > 0) {
    console.log(2);
  } else if (a < 0 && b < 0) {
    console.log(3);
  } else {
    console.log(4);
  }

  process.exit();
});
