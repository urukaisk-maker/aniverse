import React from 'react';

const Cookies = () => {
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
      <h1 style={headingStyle}>Política de Cookies</h1>
      <p>Última actualización: 7 de septiembre de 2026</p>
      <p>Explicamos qué cookies usamos y cómo puedes gestionarlas.</p>
      
      <h2>1. ¿Qué son las cookies?</h2>
      <p>Son pequeños archivos que se almacenan en tu navegador para mejorar la experiencia.</p>
      
      <h2>2. Tipos que usamos</h2>
      <p>- Cookies técnicas: necesarias para el funcionamiento.</p>
      <p>- Cookies de análisis: para estadísticas anónimas (si aceptas).</p>
      
      <h2>3. Gestión</h2>
      <p>Puedes aceptar o rechazar desde el banner o configurando tu navegador.</p>
      
      <h2>4. Contacto</h2>
      <p>urukaisk@gmail.com</p>
    </div>
  );
};

export default Cookies;
