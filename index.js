// function personJob() {
//     const fs = require('fs')
//     const data = fs.readFileSync('data.json', 'utf-8')

//     return data
// }
// console.log(personJob())

// function personJob() {
//     const fs = require ('fs')
//     fs.readFile ('data.json', 'utf-8')
//         if (err) throw err
//         return data
//     }
// }
// console.log(personJob())

/// async
function readJobfile() {
    const fs = require("fs");
  fs.readFile("data.json", "utf-8", (err, data) => {
    if (err) throw err;
    console.log(data);
}) 
}
console.log(readJobfile())