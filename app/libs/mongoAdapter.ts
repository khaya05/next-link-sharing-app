import mongoose from 'mongoose';

const url = process.env.MONGODB_URI as string;

const startDb = async () => {
  try {
    await mongoose.connect(url);
    console.log('Connected to the database');
  } catch (error) {
    console.error('Database connection error:', error);
  }
};

export default startDb;
