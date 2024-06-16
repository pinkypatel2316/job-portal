import mongoose from "mongoose";


export const dbConnection =()=>{
    mongoose.connect(process.env.MONGO_URI, {
        dbName: "JOB"
    })
    .then(()=>{
        console.log('Connected to the database')
    })
    .catch((err)=>{
        console.log(`Some error occured while connecting to database:${err}`);
    });
}