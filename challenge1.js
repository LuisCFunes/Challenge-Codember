const fs = require('fs')
const list = fs.readFileSync('./users.txt', 'utf8');

const users = list.split('\n\n')

cont = 0

const check = (list) => {
   for (let index = 0; index < list.length; index++) {
      if (list[index].includes('usr') && list[index].includes('eme') && list[index].includes('psw') && list[index].includes('age') && list[index].includes('loc') && list[index].includes('fll')){
         indexUser = index 
         cont += 1
      }
 } 
   lastUser = list[indexUser]
   return [cont,lastUser]
}

console.log(check(users))

