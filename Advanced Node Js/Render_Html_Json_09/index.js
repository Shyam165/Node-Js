const express = require('express');
const app = express();  //here we have make it in a executable states

app.get('', (req, res) =>{
    res.send(`
        <h1>welcome, to this Home page</h1>
        <a href="/about">Go to about page</a>
        <a href="/help">Go to help page</a>
        `);
});

app.get('/about', (req, res)=>{
    res.send(`
        <input type = "text" placeholder = "User name" value = "${req.query.name}"/>
        <button>click me!</button>
        <a href="/">Go to home page</a>
        `);
});


//to show json data 
app.get('/help', (req, res)=>{
    res.send([
        {
         name:'shyam',
         email:'shyam@gmail.com'
        },
        {
         name:'sam',
         email:'sam@gmail.com'
        }
    ]);
});

app.listen(5000);