import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const categories = [
  { name: 'Acción', subs: ['Artes Marciales', 'Superpoderes', 'Militar'] },
  { name: 'Aventura', subs: ['Fantasía', 'Mundos Paralelos', 'Viajes'] },
  { name: 'Comedia', subs: ['Parodia', 'Sitcom', 'Slapstick'] },
  { name: 'Drama', subs: ['Psicológico', 'Romance', 'Tragedia'] },
  { name: 'Fantasía', subs: ['Magia', 'Criaturas', 'Misterio'] },
  { name: 'Misterio', subs: ['Detectives', 'Suspense', 'Sobrenatural'] },
  { name: 'Romance', subs: ['Comedia Romántica', 'Drama Romántico', 'Escolar'] },
  { name: 'Ciencia Ficción', subs: ['Mecha', 'Espacio', 'Cyberpunk'] },
  { name: 'Slice of Life', subs: ['Escolar', 'Deportes', 'Recuentos de la vida'] },
  { name: 'Terror', subs: ['Sobrenatural', 'Gore', 'Suspense'] }
];

const Header = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [openCategory, setOpenCategory] = useState(null);
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchTerm)}`);
    }
  };

  const toggleCategory = (name) => {
    setOpenCategory(openCategory === name ? null : name);
  };

  const headerStyle = {
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    padding: '15px 30px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
    position: 'sticky',
    top: 0,
    zIndex: 1000
  };

  const logoStyle = {
    color: '#fff',
    fontSize: '1.5rem',
    fontWeight: 'bold',
    textDecoration: 'none',
    letterSpacing: '2px'
  };

  const inputStyle = {
    padding: '8px 12px',
    borderRadius: '20px',
    border: '2px solid rgba(255,255,255,0.3)',
    background: 'rgba(255,255,255,0.1)',
    color: '#fff',
    outline: 'none',
    fontSize: '1rem',
    width: '250px',
    transition: 'all 0.3s ease'
  };

  const buttonStyle = {
    background: 'rgba(255,255,255,0.2)',
    border: 'none',
    borderRadius: '50%',
    padding: '8px 12px',
    cursor: 'pointer',
    color: '#fff',
    fontSize: '1rem',
    transition: 'all 0.3s ease'
  };

  const categoryMenuStyle = {
    position: 'absolute',
    top: '100%',
    left: '0',
    background: '#2d2d2d',
    borderRadius: '8px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
    padding: '10px 0',
    minWidth: '200px',
    display: openCategory ? 'block' : 'none',
    zIndex: 1001
  };

  const subMenuStyle = {
    padding: '8px 20px',
    color: '#fff',
    display: 'block',
    textDecoration: 'none',
    cursor: 'pointer',
    transition: 'background 0.2s'
  };

  const categoryLinkStyle = {
    padding: '8px 20px',
    color: '#fff',
    display: 'block',
    textDecoration: 'none',
    cursor: 'pointer'
  };

  return (
    <header style={headerStyle}>
      <Link to="/" style={logoStyle}>AniVerse</Link>

      <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
        {categories.map(cat => (
          <div key={cat.name} style={{ position: 'relative' }}>
            <span
              style={categoryLinkStyle}
              onClick={() => toggleCategory(cat.name)}
            >
              {cat.name} ▾
            </span>
            {openCategory === cat.name && (
              <div style={categoryMenuStyle}>
                {cat.subs.map(sub => (
                  <Link
                    key={sub}
                    to={`/category/${cat.name}/${sub}`}
                    style={subMenuStyle}
                    onClick={() => setOpenCategory(null)}
                    onMouseEnter={(e) => e.target.style.background = '#764ba2'}
                    onMouseLeave={(e) => e.target.style.background = 'transparent'}
                  >
                    {sub}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      <form onSubmit={handleSearch} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <input
          type="text"
          placeholder="Buscar anime..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={inputStyle}
        />
        <button type="submit" style={buttonStyle}>🔍</button>
      </form>
    </header>
  );
};

export default Header;
