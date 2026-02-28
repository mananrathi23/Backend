import mongoose from "mongoose";

export const connection = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      dbName: "Alumni-Portal",
      serverSelectionTimeoutMS: 30000, // ✅ added
      socketTimeoutMS: 45000,          // ✅ added
    });
    console.log("Connected to database.");
  } catch (err) {
    console.log(`Some error occurred while connecting to database: ${err}`);
  }
};