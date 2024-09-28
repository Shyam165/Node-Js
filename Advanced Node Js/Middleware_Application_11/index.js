const express = require('express');
const app = express();
const reqFilter = require('./middleware');
const route = express.Router();


//---------------we can use this below reqfilter in another file also---------------------------------
// const reqFilter = (req, res, next)=>{
//     if(!req.query.age){
//         res.send("Please provide age")
//     }
//     else if(req.query.age<18){
//         res.send("you can not access this web page")
//     }
//     else{
//         next();
//     }
// }



// app.use(reqFilter)  //this will be used if we want to apply this condition for all routes

route.use(reqFilter);
app.get('/',  (req, res)=>{
    res.send('Welcome to Home Page')
})
// app.get('/users', reqFilter, (req, res)=>{
//     res.send('Welcome to User Page')
// })  //here in this condition will be apply only this page
app.get('/users', (req, res)=>{
    res.send('Welcome to User Page')
})
// app.get('/about', reqFilter, (req, res)=>{
//     res.send('Welcome to about Page') 
// })   //here in this condition will be apply only this page
route.get('/about', (req, res)=>{
    res.send('Welcome to about Page') 
})
route.get('/contact', (req, res)=>{
    res.send('Welcome to contact Page') 
}) 

app.use('/', route);
app.listen(5000);