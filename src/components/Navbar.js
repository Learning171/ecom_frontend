import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  MenuItem,
  Button,
} from "@mui/material";
import { ShoppingCart, AccountCircle } from "@mui/icons-material";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Track user's authentication status

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

 

  const handleLogout = () => {
    // Implement logic for handling logout
    setIsLoggedIn(false);
    setAnchorEl(null);
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Project Name
        </Typography>
        <Button color="inherit">Home</Button>
        <Button color="inherit">Become Seller</Button>
        <IconButton color="inherit">
          <ShoppingCart />
        </IconButton>
        {isLoggedIn ? (
          // Display user's avatar if logged in
          <IconButton color="inherit">
            <AccountCircle onClick={handleClick} />
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleClose}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
            >
              <MenuItem onClick={handleClose}>My Profile</MenuItem>
              <MenuItem onClick={handleClose}>Orders</MenuItem>
              <MenuItem onClick={handleClose}>Change Password</MenuItem>
              <MenuItem onClick={handleLogout}>Logout</MenuItem>
            </Menu>
          </IconButton>
        ) : (
          // Display "Login" and "Register" menu items if not logged in
          <>
             
              <div>
                <Link to="/login">
                <Button color="inherit" >
                <Typography sx={{ color: "white", padding: 0 }}>Login</Typography>
                </Button>
                </Link>

              </div><div>
                <Link to="/register">
                  <Typography sx={{ color: "white", padding: 0 }}>Register</Typography>
                </Link>
              </div></>
            
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

// import IconButton from '@mui/material/IconButton';
// import Button from '@mui/material/Button';
// import { ShoppingCart } from "@mui/icons-material";
// import { Link } from 'react-router-dom';

{/* <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Online Grocery Store
        </Typography>
        <IconButton color="inherit">
          <ShoppingCart />
        </IconButton>
        <Link to='/login'>
            <Button
                color="primary"
                variant="contained"
                size="small"
                component="a"
                target="_blank"
            >
            Sign in
            </Button></Link>
            <Link to="/register">
            <Button
                color="primary"
                variant="contained"
                size="small"
                component="a"
                target="_blank"
            >
            Sign up
            </Button></Link> */}