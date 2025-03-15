import express from 'express';
import dotenv from '@dotenvx/dotenvx';
import axios from 'axios';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;
const ADMIN_API_URL = process.env.ADMIN_API_URL || 'http://localhost:5000';

app.use(express.json()); // Allow JSON parsing


app.get('/get-profile/:id', async (req, res) => {
  try {
    const response = await axios.get(`${ADMIN_API_URL}/get-profile/${req.params.id}`);
    res.status(response.status).json(response.data);
  } catch (error: any) {
    console.error("Error fetching profile:", error.message);
    res.status(500).json({ error: "Failed to retrieve profile" });
  }});


app.listen(PORT, async () => {
    console.log(`Profile service running at port ${PORT}`);
});
