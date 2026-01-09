const fs = require('fs')
let fInput = "You are reading the content from Tutorials Point"
fs.writeFile('write.txt', fInput, (err) => {
    if (err) throw err;
    else {
        console.log("The file is updated with the given data")
    }
})