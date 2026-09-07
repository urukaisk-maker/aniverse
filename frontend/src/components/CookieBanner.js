import React, { useState, useEffect } from 'react';

const CookieBanner = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setVisible(false);
  };

  const rejectCookies = () => {
    localStorage.setItem('cookieConsent', 'rejected');
    setVisible(false);
  };

  if (!visible) return null;

  const bannerStyle = {
    position: 'fixed',
    bottom: '20px',
    left: '20px',
    right: '20px',
    background: 'rgba(0, 0, 0, 0.95)',
    color: '#fff',
    padding: '20px',
    borderRadius: '12px',
    boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
    zIndex: 9999,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    gap: '10px'
  };

  const buttonStyle = {
    padding: '10px 20px',
    borderRadius: '20px',
    border: 'none',
    cursor: 'pointer',
    fontSize: '0.9rem',
    fontWeight: 'bold',
    transition: 'all 0.3s ease'
  };

  const acceptButton = {
    ...buttonStyle,
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    color: '#fff'
  };

  const rejectButton = {
    ...buttonStyle,
    background: 'transparent',
    color: '#aaa',
    border: '1px solid #aaa'
  };

  return (
    <div style={bannerStyle}>
      <p style={{ margin: 0, flex: 1, minWidth: '250px' }}>
        🍪 Usamos cookies para mejorar tu experiencia. Al continuar navegando, aceptas nuestra política de cookies.
      </p>
      <div style={{ display: 'flex', gap: '10px' }}>
        <button style={acceptButton} onClick={acceptCookies}>Aceptar</button>
        <button style={rejectButton} onClick={rejectCookies}>Rechazar</button>
      </div>
    </div>
  );
};

export default CookieBanner;
