// console.log("hello");

// const fs = require('fs');
// const input = process.argv;

// fs.writeFileSync(input[2], input[3])
//-------------------------------
//inputs-------->
//node index.js add orange.txt 'this is color and fruit'
// node index.js remove data.txt
//--------------------------------
// if(input[2]=='add'){
//     fs.writeFileSync(input[3], input[4])
// }else if(input[2] == 'remove'){
//     fs.unlinkSync(input[3])
// }
// else{
//     console.log("invalid input")
// }





//-------------------------------------------------------
//-----------------path module--------------------------------


const fs = require('fs');
const path = require('path');
const dirPath = path.join(__dirname, 'files');

// console.log(dirPath);

// for(i=0;i<5;i++){
//     fs.writeFileSync(dirPath+"/hello"+i+".txt", "a simple text file");
// }


fs.readdir(dirPath,(err, files)=>{
    // console.log(files);   //it will return a list of all files

    files.forEach((item)=>{
        console.log("file name is ", item);
    })
})