import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://hamedmiri2025:85192577@cluster0.0zjiy.mongodb.net/blog-next-app')
    
}