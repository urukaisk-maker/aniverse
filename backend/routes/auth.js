const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const db = require('../config/database');

const router = express.Router();

// Registro
router.post('/register', (req, res) => {
  const { email, password } = req.body;
  
  // Verificar si el email ya existe
  db.get('SELECT * FROM users WHERE email = ?', [email], async (err, row) => {
    if (err) return res.status(500).json({ error: 'Error del servidor' });
    if (row) return res.status(400).json({ error: 'Email ya registrado' });
    
    try {
      const hashedPassword = await bcrypt.hash(password, 10);
      db.run('INSERT INTO users (email, password) VALUES (?, ?)', [email, hashedPassword], function(err) {
        if (err) return res.status(500).json({ error: 'Error del servidor' });
        
        const token = jwt.sign({ userId: this.lastID }, process.env.JWT_SECRET || 'secret', { expiresIn: '1h' });
        res.status(201).json({ 
          token, 
          user: { id: this.lastID, email } 
        });
      });
    } catch (error) {
      res.status(500).json({ error: 'Error al crear usuario' });
    }
  });
});

// Login
router.post('/login', (req, res) => {
  const { email, password } = req.body;
  
  db.get('SELECT * FROM users WHERE email = ?', [email], async (err, row) => {
    if (err) return res.status(500).json({ error: 'Error del servidor' });
    if (!row) return res.status(401).json({ error: 'Credenciales inválidas' });
    
    try {
      const valid = await bcrypt.compare(password, row.password);
      if (!valid) return res.status(401).json({ error: 'Credenciales inválidas' });
      
      const token = jwt.sign({ userId: row.id }, process.env.JWT_SECRET || 'secret', { expiresIn: '1h' });
      res.json({ 
        token, 
        user: { id: row.id, email: row.email } 
      });
    } catch (error) {
      res.status(500).json({ error: 'Error del servidor' });
    }
  });
});

module.exports = router;
