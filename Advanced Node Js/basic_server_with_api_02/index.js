const http = require('http')

http.createServer((req, res)=>{
    res.write("<h1> Hello, This is shyam singh</h1>");
    res.end();
}).listen(4500);