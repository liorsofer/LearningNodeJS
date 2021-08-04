const { readFileSync, writeFileSync } = require('fs')
console.log('start');
// reading the files
const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf8')

// creating new file
writeFileSync('./content/result-sync.txt', `here is the result: ${first} , ${second}`)

// append to a file
writeFileSync('./content/result-sync.txt', `\nhere is the result: ${first} , ${second}`, {flag: 'a'})

console.log('done with this task');
console.log('starting the next one');