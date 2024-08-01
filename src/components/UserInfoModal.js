import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, TextField, Button } from '@mui/material';

const UserInfoModel = ({ open, onClose }) => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [cardExpiry, setCardExpiry] = useState('');
  const [cardCVC, setCardCVC] = useState('');
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!name) newErrors.name = 'Name is required';
    if (!address) newErrors.address = 'Address is required';
    if (!phoneNumber) newErrors.phoneNumber = 'Phone number is required';
    if (!cardNumber || !cardExpiry || !cardCVC) newErrors.paymentMethod = 'Complete credit card details are required';
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    alert("Your order is placed!");
    console.log({ name, address, phoneNumber, cardNumber, cardExpiry, cardCVC });
    onClose(); 
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>User Information</DialogTitle>
      <DialogContent>
        <form onSubmit={handleSubmit}>
          <TextField
            margin="normal"
            label="Name"
            fullWidth
            variant="outlined"
            value={name}
            onChange={(e) => setName(e.target.value)}
            error={!!errors.name}
            helperText={errors.name}
          />
          <TextField
            margin="normal"
            label="Address"
            fullWidth
            variant="outlined"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            error={!!errors.address}
            helperText={errors.address}
          />
          <TextField
            margin="normal"
            label="Phone Number"
            fullWidth
            variant="outlined"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            error={!!errors.phoneNumber}
            helperText={errors.phoneNumber}
          />
          <TextField
            margin="normal"
            label="Card Number"
            fullWidth
            variant="outlined"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            error={!!errors.paymentMethod}
            helperText={errors.paymentMethod}
          />
          <TextField
            margin="normal"
            label="Expiration Date (MM/YY)"
            fullWidth
            variant="outlined"
            value={cardExpiry}
            onChange={(e) => setCardExpiry(e.target.value)}
            error={!!errors.paymentMethod}
            helperText={errors.paymentMethod}
          />
          <TextField
            margin="normal"
            label="CVC"
            fullWidth
            variant="outlined"
            value={cardCVC}
            onChange={(e) => setCardCVC(e.target.value)}
            error={!!errors.paymentMethod}
            helperText={errors.paymentMethod}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            sx={{ marginTop: '16px' }}
          >
            Place Order
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default UserInfoModel;
