import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const footerStyle = {
    background: '#000',
    padding: '40px 20px 20px',
    color: '#fff',
    textAlign: 'center'
  };

  const linkStyle = {
    color: '#667eea',
    textDecoration: 'none',
    margin: '0 10px',
    transition: 'color 0.3s'
  };

  const sectionStyle = {
    marginBottom: '20px'
  };

  const socialLinks = [
    { name: 'GitHub', url: 'https://github.com/urukaisk-maker' },
    { name: 'Portafolio', url: 'https://unique-biscochitos-31bcea.netlify.app/' },
    { name: 'Urukais Klick', url: 'https://thriving-otter-cc1e25.netlify.app/' },
    { name: 'Los Guardianes Silenciosos', url: 'https://rad-dolphin-182dfb.netlify.app/' }
  ];

  return (
    <footer style={footerStyle}>
      <div style={sectionStyle}>
        <h3>Enlaces del proyecto</h3>
        <Link to="/" style={linkStyle}>Inicio</Link>
        <Link to="/search" style={linkStyle}>Buscador</Link>
        <Link to="/watchlist" style={linkStyle}>Mi Lista</Link>
      </div>
      <div style={sectionStyle}>
        <h3>Legal</h3>
        <Link to="/privacy" style={linkStyle}>Privacidad</Link>
        <Link to="/terms" style={linkStyle}>Términos de Uso</Link>
        <Link to="/cookies" style={linkStyle}>Política de Cookies</Link>
      </div>
      <div style={sectionStyle}>
        <h3>Proyectos personales</h3>
        {socialLinks.map(link => (
          <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer" style={linkStyle}>
            {link.name}
          </a>
        ))}
      </div>
      <p style={{ marginTop: '20px', fontSize: '0.9rem', color: '#aaa' }}>
        © 2026 Manuel Casimiro Carrasco. Todos los derechos reservados.
      </p>
    </footer>
  );
};

export default Footer;
