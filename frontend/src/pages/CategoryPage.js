import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

const CategoryPage = () => {
  const { category, subcategory } = useParams();
  const [animes, setAnimes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    // Usamos el nombre de la subcategoría como query para la búsqueda (simulado)
    // También podrías hacer una llamada filtrada, pero aquí solo mostramos resultados
    axios.get(`http://localhost:5001/api/anime/search?q=${subcategory || category}`)
      .then(response => {
        setAnimes(response.data.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching category:', error);
        setLoading(false);
      });
  }, [category, subcategory]);

  const cardStyle = {
    background: 'rgba(102, 126, 234, 0.1)',
    backdropFilter: 'blur(10px)',
    borderRadius: '12px',
    padding: '15px',
    margin: '10px',
    width: '200px',
    boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
    animation: 'slideUp 0.5s ease-out',
    textAlign: 'center'
  };

  if (loading) return <div style={{ padding: '50px', textAlign: 'center', color: '#fff' }}>Cargando...</div>;

  return (
    <div style={{ padding: '30px', color: '#fff' }}>
      <h2 style={{ color: '#667eea' }}>{category} {subcategory ? `> ${subcategory}` : ''}</h2>
      <p>Mostrando resultados para: {subcategory || category}</p>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {animes.length > 0 ? animes.map(anime => (
          <div key={anime.mal_id} style={cardStyle}>
            <img src={anime.images.jpg.image_url} alt={anime.title} style={{ width: '100%', borderRadius: '8px' }} />
            <h3 style={{ fontSize: '1rem' }}>{anime.title}</h3>
            <p>⭐ {anime.score || 'N/A'}</p>
          </div>
        )) : <p style={{ color: '#aaa' }}>No se encontraron resultados.</p>}
      </div>
    </div>
  );
};

export default CategoryPage;
