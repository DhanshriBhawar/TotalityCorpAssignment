// src/components/PrivateRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../Context/AuthContex'; 

const PrivateRoute = ({ element, ...rest }) => {
  const { user } = useAuth(); 

  return user ? element : <Navigate to="/login" />;
};

export default PrivateRoute;
