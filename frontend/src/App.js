import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import CookieBanner from './components/CookieBanner';
import HomePage from './pages/HomePage';
import SearchPage from './pages/SearchPage';
import AuthPage from './pages/AuthPage';
import CategoryPage from './pages/CategoryPage';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import Cookies from './pages/Cookies';

const App = () => (
  <>
    <Header />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/search" element={<SearchPage />} />
      <Route path="/auth" element={<AuthPage />} />
      <Route path="/watchlist" element={<div style={{ padding: '50px', textAlign: 'center', color: '#fff' }}>Mi Lista (Próximamente)</div>} />
      <Route path="/category/:category" element={<CategoryPage />} />
      <Route path="/category/:category/:subcategory" element={<CategoryPage />} />
      <Route path="/privacy" element={<Privacy />} />
      <Route path="/terms" element={<Terms />} />
      <Route path="/cookies" element={<Cookies />} />
    </Routes>
    <Footer />
    <CookieBanner />
  </>
);

export default App;
