import React, { useState } from 'react';
import { auth } from '../Config/firebaseConfig';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { TextField, Button, Typography, Box, Grid, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert('Registration successful');
      navigate("/login");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <Grid container sx={{ height: '100vh' }}>
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
          onSubmit={handleRegister}
          sx={{ 
            display: 'flex', 
            flexDirection: 'column', 
            gap: 2, 
            width: { xs: '90%', sm: '400px' } 
          }}
        >
          <Typography variant="h5" align="center">Register</Typography>
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
          <TextField
            label="Confirm Password"
            variant="outlined"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            fullWidth
          />
          <Button type="submit" variant="contained" color="primary" fullWidth>Register</Button>
          <Typography align="center" variant="body2" sx={{ mt: 2 }}>
            Already have an account? <Button onClick={() => navigate("/login")} color="primary">Login</Button>
          </Typography>
        </Box>
      </Grid>
      <Grid 
        item 
        xs={12} 
        sm={6}
        sx={{ 
          backgroundImage: `url(https://t4.ftcdn.net/jpg/05/11/68/39/360_F_511683943_6lAmAH1aPLGuQtwuyST7bEKyR5YoaiFL.jpg)`, 
          backgroundRepeat: 'no-repeat', 
          backgroundSize: 'fit', 
          backgroundPosition: 'center' 
        }} 
      />
    </Grid>
  );
};

export default Register;
