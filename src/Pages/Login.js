import React, { useState } from 'react';
import { auth } from '../Config/firebaseConfig'; 
import { signInWithEmailAndPassword } from 'firebase/auth';
import { TextField, Button, Typography, Box, Grid, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/properties");
    } catch (error) {
      alert(error.message);
    }
  };

  const handleSignUp = () => {
    navigate("/register");
  };

  return (
    <Grid container sx={{ height: '100vh' }}>
      <Grid 
        item 
        xs={12} 
        sm={6}
        sx={{ 
          backgroundImage: `url(https://t4.ftcdn.net/jpg/04/82/12/93/360_F_482129392_oyRFboFmhUrhbLRkbMoQV2RH1oyeSZsl.jpg)`, 
          backgroundRepeat: 'no-repeat', 
          backgroundSize: 'fit', 
          backgroundPosition: 'center' 
        }} 
      />
      <Grid 
        item 
        xs={12} 
        sm={6} 
        component={Paper} 
        elevation={6} 
        square 
        sx={{ 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center', 
          justifyContent: 'center', 
          padding: { xs: 2, sm: 4 }, 
          boxSizing: 'border-box' 
        }}
      >
        <Box
          component="form"
          onSubmit={handleLogin}
          sx={{ 
            display: 'flex', 
            flexDirection: 'column', 
            gap: 2, 
            width: { xs: '90%', sm: '400px' } 
          }}
        >
          <Typography variant="h5" align="center">Login</Typography>
          <TextField
            label="Email"
            variant="outlined"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            fullWidth
          />
          <TextField
            label="Password"
            variant="outlined"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            fullWidth
          />
          <Button type="submit" variant="contained" color="primary" fullWidth>Login</Button>
          <Typography align="center" variant="body2" sx={{ mt: 2 }}>
            Don't have an account? <Button onClick={handleSignUp} color="primary">Sign Up</Button>
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Login;
