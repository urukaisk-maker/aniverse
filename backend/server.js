const express = require('express');
const cors = require('cors');
const axios = require('axios');
const authRoutes = require('./routes/auth');

const app = express();
app.use(cors());
app.use(express.json());

// Rutas de autenticación
app.use('/api/auth', authRoutes);

// Ruta de búsqueda
app.get('/api/anime/search', async (req, res) => {
  const { q } = req.query;
  try {
    const response = await axios.get(`https://api.jikan.moe/v4/anime?q=${q}&limit=10`);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching from Jikan' });
  }
});

// Ruta de populares
app.get('/api/anime/popular', async (req, res) => {
  try {
    const response = await axios.get('https://api.jikan.moe/v4/top/anime?limit=10');
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching popular from Jikan' });
  }
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`✅ AniVerse Backend corriendo en http://localhost:${PORT}`));
