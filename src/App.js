// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { Container } from '@mui/material';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Cart from './Pages/Cart';
import PropertyListing from './Pages/PropertyListing';
import { CartProvider } from './Context/CartContext';
import { AuthProvider } from './Context/AuthContex'; 
import PrivateRoute from './Route/PrivateRoute'; 

function App() {
  return (
    <AuthProvider>
      <Router>
        <CartProvider>
          <Container>
            <Routes>
              <Route path="/" element={<Navigate to="/login" />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/cart" element={<PrivateRoute element={<Cart />} />} />
              <Route path="/properties" element={<PrivateRoute element={<PropertyListing />} />} />
            </Routes>
          </Container>
        </CartProvider>
      </Router>
    </AuthProvider>
  );
}

export default App;
