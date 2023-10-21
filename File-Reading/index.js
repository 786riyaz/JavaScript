const fs = require('fs')
let fileData
try {
    fileData = JSON.parse(fs.readFileSync('Test.json'))
}
catch {
    console.log("Error")
}
console.log(fileData)