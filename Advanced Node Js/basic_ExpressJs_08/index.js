const express = require('express');
const app = express();  //here we have make it in a executable states

app.get('', (req, res) =>{
    console.log("data sent by browser =>> ", req.query.name);  //here query return all objects data.
    res.send('welcome, to this Home page ' + req.query.name);
});

app.get('/about', (req, res)=>{
    res.send('hello, this is a about page');
});

app.get('/help', (req, res)=>{
    res.send('hello, this is a help page');
});

app.listen(5000);