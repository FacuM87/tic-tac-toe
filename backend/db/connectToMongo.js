import mongoose from 'mongoose'

export const connectToMongo = async () => {
   try {
        await mongoose.connect(process.env.MONGO_URI, { dbName: process.env.MONGO_DB_NAME })
        console.log("Mongo DB connected");
   } catch (error) {
        console.error("Connection with MongoDB has failed");
   }
   
}