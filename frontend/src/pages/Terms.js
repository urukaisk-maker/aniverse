import React from 'react';

const Terms = () => {
  const containerStyle = {
    maxWidth: '800px',
    margin: '40px auto',
    padding: '20px',
    background: 'rgba(255,255,255,0.05)',
    borderRadius: '12px',
    color: '#fff'
  };

  const headingStyle = {
    color: '#667eea',
    borderBottom: '2px solid #667eea',
    paddingBottom: '10px'
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>Términos de Uso</h1>
      <p>Última actualización: 7 de septiembre de 2026</p>
      <p>Al usar AniVerse aceptas estos términos. Si no estás de acuerdo, por favor no uses el sitio.</p>
      
      <h2>1. Uso permitido</h2>
      <p>El sitio se ofrece para información y entretenimiento. Prohibido el uso con fines ilegales.</p>
      
      <h2>2. Propiedad intelectual</h2>
      <p>Los datos de anime provienen de Jikan API. El diseño y código son propiedad de Manuel Casimiro Carrasco.</p>
      
      <h2>3. Responsabilidad</h2>
      <p>No nos hacemos responsables de daños derivados del uso del sitio.</p>
      
      <h2>4. Contacto</h2>
      <p>Para más información: urukaisk@gmail.com</p>
    </div>
  );
};

export default Terms;
