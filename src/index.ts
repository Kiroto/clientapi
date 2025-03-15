import express from 'express';
import dotenv from '@dotenvx/dotenvx';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json()); // Allow JSON parsing


app.get('/get-profile/:id', async (req, res) => {
  res.status(200).json({ message: 'Profile not found' });
});


app.listen(PORT, async () => {
    console.log(`Profile service running at port ${PORT}`);
});
