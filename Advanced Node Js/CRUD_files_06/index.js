const fs = require('fs')
const path = require('path');
const dirPath = path.join(__dirname, 'crud')
const filePath = `${dirPath}/apple.txt`;

// fs.writeFileSync(filePath, 'This is a simple text file');


// fs.readFile(filePath,'utf8', (err, item)=>{
//     console.log(item)
// })


// fs.appendFile(filePath, ' and the name of the file is apple.xt', (err)=>{
//     if(!err){
//         console.log("file is updated");
//     }
// })


// fs.rename(filePath, `${dirPath}/fruit.txt`, (err)=>{
//     if(!err){
//         console.log("file name is updated");
//     }
// })



fs.unlinkSync(`${dirPath}/fruit.txt`);
