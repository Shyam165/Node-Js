const express = require('express');
const path = require('path');

const app = express();
const publicPath = path.join(__dirname, 'public')
// console.log(publicPath);



// app.use(express.static(publicPath));




//----------------------------------------------------------------

//--------how to remove the extension from the url-----------------
//------------template engine uses to make the dynamic pages which means that should be conected with some data or databases-------------

app.set('view engine', 'ejs');   
app.set('views', path.join(__dirname, 'views')); // Ensures the correct path to the views directory


app.get('',(_, res)=>{
    res.sendFile(`${publicPath}/index.html`)
})
app.get('/aboutme',(_, res)=>{
    res.sendFile(`${publicPath}/about.html`)
})
app.get('/profile',(_, res)=>{
    const user = {
        name: 'shyam singh',
        email: 'shyam@gmai.com',
        city: 'jaipur',
        skills:['php', 'js','c++','java', 'node js']
    }
    res.render('profile', {user});
})
app.get('/login',(_, res)=>{
    res.render('login');
})
app.get('/help',(_, res)=>{
    res.sendFile(`${publicPath}/help.html`)
})
app.get('*',(_, res)=>{
    res.sendFile(`${publicPath}/nopage.html`)
})

app.listen(5000);