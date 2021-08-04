// CommonJS, every file is a module (by default)
// Modules - Encapsulated Code (Only share minimum)
const names = require('./4-names');
const sayHi = require('./5-utils')
const data = require('./6-alternative-flavor')
//console.log(data)

//sayHi('Susan')
//sayHi(names.jhon)
//sayHi(names.peter)

require('./7-mind-grenade')