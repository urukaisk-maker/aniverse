// server.js
const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
app.use(cors());
app.use(express.json());

// Ruta de búsqueda de anime
app.get('/api/anime/search', async (req, res) => {
  const { q } = req.query;
  try {
    const response = await axios.get(`https://api.jikan.moe/v4/anime?q=${q}&limit=10`);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching from Jikan' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
