import React, { useState } from 'react';
import data from '../data/propertiesdata.json';
import PropertyCard from '../components/PropertyCard';
import { IconButton, Badge, TextField, MenuItem, Select, FormControl, InputLabel, Box } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../Context/CartContext';

const PropertyListing = () => {
  const { cart, addToCart } = useCart();
  const navigate = useNavigate();

  const [searchInput, setSearchInput] = useState('');
  const [filter, setFilter] = useState('title');

  const handleSearchChange = (event) => {
    setSearchInput(event.target.value);
  };

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const handleLogout = () => {
    navigate('/login');
  };

  const filteredData = data.filter((item) => {
    if (filter === 'title') {
      return item.title.toLowerCase().includes(searchInput.toLowerCase());
    } else if (filter === 'price') {
      return item.price.toString().includes(searchInput);
    } else {
      return item.description.toLowerCase().includes(searchInput.toLowerCase());
    }
  });

  return (
 <>
      <Box sx={{ position: 'fixed', top: 0, left: 50, right: 50, backgroundColor: 'white', padding: '16px', boxShadow: 1, zIndex: 1200 }}>
      <h1>Property List</h1>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <FormControl variant="outlined" sx={{ minWidth: 120 }}>
            <InputLabel id="filter-label">Filter By</InputLabel>
            <Select
              labelId="filter-label"
              id="filter"
              value={filter}
              onChange={handleFilterChange}
              label="Filter By"
            >
              <MenuItem value="title">Title</MenuItem>
              <MenuItem value="price">Price</MenuItem>
              <MenuItem value="description">Description</MenuItem>
            </Select>
          </FormControl>
          <TextField
            variant="outlined"
            placeholder="Search"
            value={searchInput}
            onChange={handleSearchChange}
            InputProps={{
              startAdornment: (
                <SearchIcon />
              ),
            }}
            sx={{ marginLeft: '16px', flex: 1 }}
          />
          <div>
            <IconButton
              color="primary"
              onClick={() => navigate('/cart')}
              sx={{ marginLeft: '16px' }}
            >
              <Badge badgeContent={cart.length} color="primary">
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
            <IconButton
              color="primary"
              onClick={handleLogout}
              sx={{ marginLeft: '16px' }}
            >
              <LogoutIcon />
            </IconButton>
          </div>
        </div>
      </Box>
      <div style={{ marginTop: '120px', padding: '16px' }}>
        <div style={{ marginTop: '50px', display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
          {filteredData.map((item) => (
            <PropertyCard
              key={item.id}
              property={item}
              addToCart={addToCart}
            />
          ))}
        </div>
      </div>
  
      </>
  );
};

export default PropertyListing;
