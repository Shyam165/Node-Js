const dbConnect = require('./mongodb');

const insert = async () => {
    const db = await dbConnect();
    const result = await db.insertMany(
       [
         {
            name: 'max1',
            brand: 'micromax',
            price: 3453,
            category: 'mobile'
        },
        {
            name: 'max 2',
            brand: 'micromax',
            price: 3435,
            category: 'mobile'
        },
        {
            name: 'max 3',
            brand: 'micromax',
            price: 3245,
            category: 'mobile'
        }

    ]
    );
    if(result.acknowledged){
        console.log("data inserted");
    }
}

insert();
