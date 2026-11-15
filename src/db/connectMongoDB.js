import mongoose from 'mongoose';

export const connectMongoDB = async () => {
  const dbUrl = process.env.MONGO_URL;
  try {
    await mongoose.connect(dbUrl);
    console.log('✅ MongoDB connection established successfully');
  } catch (error) {
    console.log('Error connecting', error.message);
    process.exit(1);
  }
};
