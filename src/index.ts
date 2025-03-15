import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI as string)
  .then(() => console.log('User Service connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

// Define a User schema
const userSchema = new mongoose.Schema({
  name: String,
  email: String
});
const User = mongoose.model('User', userSchema);

app.get('/users', async (req, res) => {
  const users = await User.find();
  res.json(users);
});

app.listen(PORT, () => {
  console.log(`User Service running at http://localhost:${PORT}`);
});