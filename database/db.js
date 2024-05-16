import mongoose from "mongoose";

export const Connection = async (Url) => {
    try {
      
        await mongoose.connect(Url, { useUnifiedTopology: true, useNewUrlParser: true })
        console.log("data base connnected sucessfully")
    } catch (err) {
        console.log(err);
    }
}


export default Connection;