import React, { useEffect, useState } from 'react';
import axios from 'axios';

const HomePage = () => {
  const [animes, setAnimes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('http://localhost:5000/api/anime/popular')
      .then(response => {
        setAnimes(response.data.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching popular anime:', error);
        setLoading(false);
      });
  }, []);

  const cardStyle = {
    background: 'rgba(102, 126, 234, 0.1)',
    backdropFilter: 'blur(10px)',
    borderRadius: '12px',
    padding: '15px',
    margin: '10px',
    width: '200px',
    boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
    animation: 'slideUp 0.5s ease-out'
  };

  if (loading) return <div style={{padding: '50px', textAlign: 'center'}}>Cargando...</div>;

  return (
    <div style={{padding: '30px', display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}>
      <h2 style={{width: '100%', textAlign: 'center', color: '#667eea'}}>🔥 Animes Populares</h2>
      {animes.map(anime => (
        <div key={anime.mal_id} style={cardStyle}>
          <img src={anime.images.jpg.image_url} alt={anime.title} style={{width: '100%', borderRadius: '8px'}} />
          <h3 style={{fontSize: '1rem', color: '#fff'}}>{anime.title}</h3>
          <p style={{fontSize: '0.8rem', color: '#aaa'}}>⭐ {anime.score || 'N/A'}</p>
        </div>
      ))}
    </div>
  );
};

export default HomePage;
