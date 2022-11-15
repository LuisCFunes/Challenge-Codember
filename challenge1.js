const fs = require('fs')
const list = fs.readFileSync('./users.txt', 'utf8');

const users = list.split('\n\n')

cont = 0
for (let index = 0; index < users.length; index++) {
     if (users[index].includes('usr') && users[index].includes('eme') && users[index].includes('psw') &&users[index].includes('age') && users[index].includes('loc') && users[index].includes('fll')){
        indexUser = index 
        cont += 1
     }
}

lastUser = users[indexUser]
console.log(cont)
console.log(lastUser)