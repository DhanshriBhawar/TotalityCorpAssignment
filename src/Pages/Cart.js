import React, { useState } from 'react';
import { Card, CardContent, Typography, Button, List, ListItem, IconButton, CardMedia, Box, Divider } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LogoutIcon from '@mui/icons-material/Logout';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';
import UserInfoModal from '../components/UserInfoModal';
import { useCart } from '../Context/CartContext';

const Cart = () => {
  const { cart, removeFromCart, wishlist, toggleWishlist } = useCart();
  const [openModal, setOpenModal] = useState(false);
  const navigate = useNavigate();

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleLogout = () => {
    navigate('/login');
  };

  const handleBack = () => {
    navigate('/properties');
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price, 0).toFixed(2);
  };

  return (
    <Box sx={{ padding: { xs: 2, sm: 4 }, display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, justifyContent: 'center' }}>
      <Card sx={{ flex: 1, margin: { xs: 0, sm: '16px' }, padding: '16px', maxWidth: '600px', width: '100%' }}>
        <CardContent>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <IconButton color="primary" onClick={handleBack}>
              <ArrowBackIcon />
            </IconButton>
            <Typography gutterBottom variant="h5" component="div">
              Cart
            </Typography>
            <IconButton color="primary" onClick={handleLogout}>
              <LogoutIcon />
            </IconButton>
          </div>
          {cart.length === 0 ? (
            <Typography>Your cart is empty</Typography>
          ) : (
            <>
              <List>
                {cart.map((item, index) => (
                  <ListItem key={item.id} sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                    <CardMedia
                      component="img"
                      height="140"
                      image={item.image}
                      alt={item.title}
                      sx={{ width: '100%', maxWidth: '140px', marginBottom: { xs: '16px', sm: 0 }, marginRight: { sm: '16px' } }}
                    />
                    <Box sx={{ flex: 1, textAlign: { xs: 'center', sm: 'left' } }}>
                      <Typography gutterBottom variant="h6" component="div">
                        {item.title}
                      </Typography>
                      <Typography variant="body1" color="text.primary">
                        ${item.price} per night
                      </Typography>
                      <Button variant="text" color="primary" onClick={() => removeFromCart(index)} sx={{ display: 'block', margin: '8px auto' }}>
                        Remove
                      </Button>
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: { xs: '16px', sm: 0 } }}>
                      <IconButton
                        onClick={() => toggleWishlist(item)}
                        sx={{ color: wishlist.find(wishItem => wishItem.id === item.id) ? 'red' : 'inherit' }}
                      >
                        {wishlist.find(wishItem => wishItem.id === item.id) ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                      </IconButton>
                      <Button variant="contained" color="primary" onClick={handleOpenModal} sx={{ marginTop: '8px' }}>
                        BOOK HOUSE
                      </Button>
                    </Box>
                  </ListItem>
                ))}
              </List>
            </>
          )}
        </CardContent>
      </Card>
      {cart.length > 0 && (
        <Box sx={{ width: { xs: '100%', sm: '300px' }, margin: { xs: '16px 0', sm: '16px' }, padding: '16px', boxShadow: 3, borderRadius: 2 }}>
          <Typography variant="h6" component="div" sx={{ marginBottom: '16px' }}>
            The total amount of
          </Typography>
          <Divider />
          <Box sx={{ display: 'flex', flexDirection: 'column', marginTop: '16px' }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
              <Typography>Temporary amount</Typography>
              <Typography>${calculateTotal()}</Typography>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
              <Typography>Shipping</Typography>
              <Typography>Gratis</Typography>
            </Box>
            <Divider sx={{ marginTop: '16px' }} />
            <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: '16px' }}>
              <Typography>The total amount of (including VAT)</Typography>
              <Typography>${calculateTotal()}</Typography>
            </Box>
            <Button variant="contained" color="primary" sx={{ marginTop: '16px', width: '100%' }} onClick={handleOpenModal}>
              GOT TO CHECKOUT
            </Button>
          </Box>
        </Box>
      )}
      <UserInfoModal open={openModal} onClose={handleCloseModal} />
    </Box>
  );
};

export default Cart;
