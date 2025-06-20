const mongoose= require('mongoose');

//uri= "mongodb+srv://Aayutayal:Aayu001421@cluster0.o3uvkoe.mongodb.net/Aayutayal?retryWrites=true&w=majority&appName=Cluster0";

const connectDB = (uri) => {
    console.log("mongoDB connected")
    return mongoose.connect(uri);
};

module.exports= connectDB;