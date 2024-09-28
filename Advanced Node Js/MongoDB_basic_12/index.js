//-------------------------------------------------------
// async function getData() {
//     let result = await client.connect();
//     let db = result.db(database);
//     let collection = db.collection('products');
//     let response = await collection.find({}).toArray();
//     console.log(response);
// }


// getData();

//-----------------------------------------------------




// dbConnect().then((resp)=>{
//     resp.find({name:'m 40'}).toArray().then((data)=>{
//         console.warn(data);
//     })
// })

const dbConnect = require('./mongodb');
//by using main function
const main = async ()=>{
    let data = await dbConnect();
    data = await data.find().toArray();
    console.warn(data);
}

main();
