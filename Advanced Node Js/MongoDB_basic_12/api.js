const express = require('express');
const dbConnect = require('./mongodb');
const mongodb = require('mongodb');
const app = express();

app.use(express.json());

app.get('/', async (req, res)=>{
    let data = await dbConnect();
    data = await data.find().toArray();
    // console.log(data);
    res.send(data);
});

app.post('/', async (req, res)=>{
    // console.log(req.body);    //we are getting data from postman using post by body in json format.
    let data = await dbConnect();
    let result = await data.insertOne(req.body);  //save data in the database coming from postman
    res.send(result);   //sends back acknowledge to the postman 
});


app.put('/:name', async (req, res)=>{
    let data = await dbConnect();
    let result = data.updateOne({name:req.params.name},{$set:req.body})
    res.send({result:"update"});
})


app.delete('/:id', async (req, res)=>{
    const data = await dbConnect();
    const result = await data.deleteOne({_id: new mongodb.ObjectId(req.params.id)})
    res.send(result);
})

app.listen(5000);