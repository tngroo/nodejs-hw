import mongoose from 'mongoose';
import dns from 'node:dns';
dns.setServers(['8.8.8.8', '1.1.1.1']);

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
