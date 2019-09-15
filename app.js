const chalk = require('chalk')
const getNotes = require('./notes.js')

const msg = getNotes()
console.log(msg)

const greenMsg = chalk.green.inverse.bold('Success!')
console.log(greenMsg)

console.log(process.argv[0])
console.log('elv')
console.log(process.argv[1])
console.log('elv')
console.log(process.argv[2])

const command = process.argv[2]

if(command === 'add'){
    console.log('Adding note!')
}else if(command == 'remove'){
    console.log('Removing note!')
}