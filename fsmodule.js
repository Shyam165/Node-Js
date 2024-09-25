const fs = require('fs');


//this below is  non blocking
// fs.readFile('file.txt', 'utf8', (err, data)=>{
//     console.log(err, data)
// })        


//  this is blocking
// const a = fs.readFileSync('file.txt')
// console.log(a.toString())

// console.log("Finished reading file")


//this is non blocking
// fs.writeFile("file2.txt", "This is a data", ()=>{
//     console.log("Written to the file")
// });


const b = fs.writeFileSync("file2.txt", "This is a data2", ()=>{
    console.log("Written to the file")
});
console.log(b)
console.log("Finished writing file")