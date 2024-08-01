import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button, Divider, Box } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';

const PropertyCard = ({ property, addToCart }) => {
  const renderStars = (rating) => {
    return (
      <Box display="flex">
        {[1, 2, 3, 4, 5].map((star) => (
          <Box key={star}>
            {star <= rating ? (
              <StarIcon color="primary" />
            ) : (
              <StarBorderIcon color="primary" />
            )}
          </Box>
        ))}
      </Box>
    );
  };

  return (
    <Card sx={{ width: '400px', margin: '16px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      <CardMedia
        component="img"
        height="140"
        image={property.image}
        alt={property.title}
        sx={{
          transition: 'transform 0.6s ease-in-out',
          '&:hover': {
            transform: 'scale(1.2)',
          },
        }}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h5" component="div">
          {property.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {property.description}
        </Typography>
        <Typography variant="body1" color="text.primary">
          ${property.price} per night
        </Typography>
        <Divider sx={{ marginY: '16px' }} />
        <Box>
          <Typography variant="h6" component="div">
            Rating
          </Typography>
          {renderStars(property.rating)}
        </Box>
      </CardContent>
      <Button 
        variant="contained" 
        color="primary"
        onClick={() => addToCart(property)}
        sx={{ margin: '16px' }}
      >
        Add To Cart
      </Button>
    </Card>
  );
};  

export default PropertyCard;
