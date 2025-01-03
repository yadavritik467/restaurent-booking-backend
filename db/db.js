import mongoose from "mongoose";

export const connectDb = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://yadavritik467:yadavritik467@cluster0.iy1uimq.mongodb.net/"
    );
    console.log("db connected");
  } catch (error) {
    console.log("db not connected", error.message);
  }
};
