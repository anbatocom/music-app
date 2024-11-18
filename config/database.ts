import mongoose from "mongoose";

export const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("KẾT NỐI THÀNH CÔNG");
    } catch (error) {
        console.log("KẾT NỐI KHÔNG THÀNH CÔNG");
        console.log(error);
    }
}