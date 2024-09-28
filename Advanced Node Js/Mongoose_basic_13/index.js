// SCHEMAS VS MODELS

const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/e-comm");
const ProductSchema = new mongoose.Schema({
    name: String,
    price: Number,
    brand: String,
    category: String
});

const saveInDB = async () => {
    const ProductsModel = mongoose.model('products', ProductSchema);
    let data = new ProductsModel(
        {
            name: "m11",
            price: 666,
            brand: "maxx",
            category: "mobile"
        }
    );
    let result = await data.save();
    console.log(result);
}

// saveInDB();

const updateInDB = async ()=>{
    const Product = mongoose.model('products', ProductSchema);
    let data = await Product.updateOne(
        {name:"m11"},
        {
            $set:{price:777, name:"max11"}
        }
    )
    console.log(data);
}

// updateInDB();

const deleteInDB = async ()=>{
    const Product = mongoose.model('products', ProductSchema);
    let data = await Product.deleteOne({name:"m8"});
    console.log(data);
}

// deleteInDB();

//find and search.
const findInDB = async ()=>{
    const Product = mongoose.model('products', ProductSchema);
    let data = await Product.find({name:"max11"});   //now it is searching data with name as max11 in database
    console.log(data);
}

findInDB();