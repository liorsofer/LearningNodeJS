const { readFile, writeFile } = require('fs')

console.log('start');

// reads the file and has a callback incase of an error
readFile('./content/first.txt','utf8', (err, result) => 
{
    if (err)
    {
        console.log(err);
        return
    }
    const first = result
    readFile('./content/second.txt','utf8', (err, result) =>
    {
        if (err)
        {
            console.log(err);
            return
        }
        const second = result
        writeFile('./content/result-async.txt', `here is the result: ${first} , ${second}`,
        (err, result) =>
        {
            if (err)
            {
                console.log(err);
                return
            }
            console.log(result);
        })
        writeFile('./content/result-async.txt', `\nhere is the result: ${first} , ${second}`, {flag: 'a'},
        (err, result) =>
        {
            if (err)
            {
                console.log(err);
                return
            }
            console.log('done with this task');
        })
    })
})

console.log('starting the next tast');
