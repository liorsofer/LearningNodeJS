const os = require('os')

// info about current user
const user = os.userInfo()
//console.log(user)

// method return the system uptime in seconds
console.log(`the system uptime is: ${os.uptime()} seconds`)

const currentOS = {
    name:os.type(),
    realse:os.release(),
    totalMem:os.totalmem(),
    freeMem:os.freemem(),
}
console.log(currentOS);