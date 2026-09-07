import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchTerm)}`);
    }
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const headerStyle = {
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    padding: '15px 30px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
  };

  const logoStyle = {
    color: '#fff',
    fontSize: '1.5rem',
    fontWeight: 'bold',
    textDecoration: 'none',
    letterSpacing: '2px',
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
    transition: 'all 0.3s ease',
  };

  const buttonStyle = {
    background: 'rgba(255,255,255,0.2)',
    border: 'none',
    borderRadius: '50%',
    padding: '8px 12px',
    cursor: 'pointer',
    color: '#fff',
    fontSize: '1rem',
    transition: 'all 0.3s ease',
  };

  const dropdownStyle = {
    position: 'absolute',
    top: '100%',
    right: '20px',
    background: '#2d2d2d',
    borderRadius: '8px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
    padding: '10px 0',
    minWidth: '180px',
    opacity: dropdownOpen ? 1 : 0,
    visibility: dropdownOpen ? 'visible' : 'hidden',
    transform: dropdownOpen ? 'translateY(0)' : 'translateY(-10px)',
    transition: 'all 0.3s ease',
  };

  const linkStyle = {
    display: 'block',
    padding: '10px 20px',
    color: '#fff',
    textDecoration: 'none',
    transition: 'background 0.2s',
  };

  return (
    <header style={headerStyle}>
      <a href="/" style={logoStyle}>AniVerse</a>

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

      <div style={{ position: 'relative' }}>
        <button onClick={toggleDropdown} style={{ ...buttonStyle, fontSize: '1.2rem' }}>
          ☰
        </button>
        <div style={dropdownStyle}>
          <a href="/season" style={linkStyle} onMouseEnter={(e) => e.target.style.background = '#764ba2'} onMouseLeave={(e) => e.target.style.background = 'transparent'}>
            Temporada
          </a>
          <a href="/popular" style={linkStyle} onMouseEnter={(e) => e.target.style.background = '#764ba2'} onMouseLeave={(e) => e.target.style.background = 'transparent'}>
            Popular
          </a>
          <a href="/manga" style={linkStyle} onMouseEnter={(e) => e.target.style.background = '#764ba2'} onMouseLeave={(e) => e.target.style.background = 'transparent'}>
            Manga
          </a>
          <a href="/watchlist" style={linkStyle} onMouseEnter={(e) => e.target.style.background = '#764ba2'} onMouseLeave={(e) => e.target.style.background = 'transparent'}>
            Mi Lista
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
