import express from 'express';
import dotenv from '@dotenvx/dotenvx';
import fs from 'fs';
import https from 'https';
import axios from 'axios';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 443;
const ADMIN_API_URL = process.env.ADMIN_API_URL || 'http://localhost:5000';

const options: https.ServerOptions = {
  key: fs.readFileSync('./certs/server.key'),
  cert: fs.readFileSync('./certs/server.crt'),
  minVersion: 'TLSv1.2'
};


app.use(express.json()); // Allow JSON parsing


app.get('/get-profile/:id', async (req, res) => {
  try {
    const response = await axios.get(`${ADMIN_API_URL}/get-profile/${req.params.id}`);
    res.status(response.status).json(response.data);
  } catch (error: any) {
    console.error("Error fetching profile:", error.message);
    res.status(500).json({ error: "Failed to retrieve profile" });
  }});

// Start HTTPS server
https.createServer(options, app).listen(PORT, () => {
  console.log(`Secure Profile Service running at https://localhost:${PORT}`);
});
