// const { stdin, stdout } = require('process');
// const readlne = require('readline');

// const rl = readlne.createInterface({
//   input: stdin,
//   output: stdout,
// });

// rl.question('Please enter your name:', (ans) => {
//   console.log(`Hello `, ans);
// });

const { stdin, stdout } = require('process')
const readline = require('readline')

const rl = readline.createInterface({
  input:stdin,
  output:stdout
})

rl.question('please enter your name:',(ans)=>{
  console.log('hello ',ans)
  rl.close()
})