require('dotenv').config();

const express= require('express');
const app= express();

const PORT= process.env.PORT || 5000;

const connect_DB= require('./db/connect');

app.get("/", (req,res)=>{
    res.send("Hi, I am live");
})

const product_routes= require('./routes/products');

app.use('/api/products', product_routes);

const start= async()=>{
    try{
        await connect_DB(process.env.MONGODB_URL);
        app.listen(PORT, ()=>{
            console.log(PORT,'Yes I am Connected');
        })
    }
    catch(error){
        console.log(error);
    }
}

start();