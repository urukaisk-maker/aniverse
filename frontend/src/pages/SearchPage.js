import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import axios from 'axios';

const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const query = searchParams.get('q') || '';

  useEffect(() => {
    if (query) {
      axios.get(`http://localhost:5000/api/anime/search?q=${query}`)
        .then(response => {
          setResults(response.data.data);
          setLoading(false);
        })
        .catch(error => {
          console.error('Error searching:', error);
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  }, [query]);

  const cardStyle = {
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    borderRadius: '12px',
    padding: '15px',
    margin: '10px',
    width: '200px',
    color: '#fff',
    animation: 'fadeIn 0.5s ease-out'
  };

  if (loading) return <div style={{padding: '50px', textAlign: 'center'}}>Buscando...</div>;

  return (
    <div style={{padding: '30px'}}>
      <h2 style={{color: '#667eea'}}>Resultados para: "{query}"</h2>
      <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}>
        {results.length > 0 ? results.map(anime => (
          <div key={anime.mal_id} style={cardStyle}>
            <img src={anime.images.jpg.image_url} alt={anime.title} style={{width: '100%', borderRadius: '8px'}} />
            <h3 style={{fontSize: '1rem'}}>{anime.title}</h3>
            <p>⭐ {anime.score || 'N/A'}</p>
          </div>
        )) : <p style={{color: '#fff'}}>No se encontraron resultados.</p>}
      </div>
    </div>
  );
};

export default SearchPage;
