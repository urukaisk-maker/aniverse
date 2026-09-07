import React from 'react';

const Privacy = () => {
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
      <h1 style={headingStyle}>Política de Privacidad</h1>
      <p>Última actualización: 7 de septiembre de 2026</p>
      <p>En AniVerse respetamos tu privacidad. Esta política explica qué datos recopilamos y cómo los usamos.</p>
      
      <h2>1. Datos que recopilamos</h2>
      <p>No recopilamos datos personales excepto los que nos proporcionas voluntariamente al registrarte o contactar con nosotros.</p>
      
      <h2>2. Uso de cookies</h2>
      <p>Usamos cookies para mejorar tu experiencia y analizar el tráfico. Puedes aceptar o rechazar las cookies desde el banner.</p>
      
      <h2>3. Almacenamiento de datos</h2>
      <p>Los datos se almacenan de forma segura en servidores locales. No compartimos datos con terceros.</p>
      
      <h2>4. Contacto</h2>
      <p>Para cualquier duda, contacta: urukaisk@gmail.com</p>
    </div>
  );
};

export default Privacy;
