const express = require('express');
const con = require("./config");
const app = express();

app.use(express.json());
//get api
app.get("/", (req, res)=>{
    con.query("select * from users", (err, result)=>{
        if(err){
            res.send("error");
        }
        else{
            res.send(result);
        }
    })
});

app.post("/", (req, res)=>{
//   const data = {name:"bhasker", password:'3300', user_type:"user"};  //here it is static data will be sent to database.

 const data = req.body;  //dynamic data from postman


  con.query('insert into users set ?', data, (err, result, fields)=>{
    if(err) throw err;
    res.send(result);
  })
})


app.put("/:id", (req, res)=>{
    const data = [req.body.name, req.body.password, req.body.user_type, req.params.id];
    con.query("update users set name = ?, password = ?, user_type = ? where id = ?", data, (err, result, fields)=>{
        if(err) throw err;
        res.send(result);
      })
});


app.delete("/:id", (req, res)=>{
    con.query("delete from users where id = "+ req.params.id, (err, result, fields)=>{
        if(err) throw err;
        res.send(result);
      })
})

app.listen(5000);