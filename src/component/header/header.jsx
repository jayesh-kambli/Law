import React from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import "./header.style.css";
import logo from "./logo.png";
import Stack from '@mui/material/Stack';

export default function Header() {

    return (
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static" className="bg">
                <Stack
                className="setHeght"
                direction="row"
                justifyContent="space-between"
                alignItems="center">
                    <Stack
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    >
                        <img src={logo} className="logo"/>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1, mx: 2 }}>IGSTUDIO</Typography>
                    </Stack>
                    <Stack
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    >
                        <Button className="inherit">Home</Button>
                        <Button className="inherit">Attorneys</Button>
                        <Button className="inherit">Practice Areas</Button>
                        <Button className="inherit">About Us</Button>
                    </Stack>
                    <Button className="inherit contact">Contact Now</Button>
              </Stack>
          </AppBar>
        </Box>
      );
}