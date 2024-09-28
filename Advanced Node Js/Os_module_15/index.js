const os = require('os');

// console.log(os);
console.log(os.arch());    //64 bit
console.log(os.freemem()/(1024*1024*1024));   //by default it gives us in bytes
console.log(os.totalmem()/(1024*1024*1024));

console.log(os.hostname());
console.log(os.platform());   //win32

console.log(os.userInfo());
