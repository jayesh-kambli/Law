import { Stack } from "@mui/material";
import React from "react";
import "./footer.style.css";
import logo from "./logo.png";
import Button from "@mui/material/Button";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Facbook from "./img/facebook.png";
import Twitter from "./img/twitter.png";
import Pintrest from "./img/pintrest.png";
import Instagram from "./img/insta.png";

export default function Footer() {
  return (
    <Stack className="footerMainBg">
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" className="bg">
          <Stack
            className="setHeght"
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Stack direction="row" justifyContent="center" alignItems="center">
              <img src={logo} className="logo" />
              <Typography
                variant="h6"
                component="div"
                sx={{ flexGrow: 1, mx: 2 }}
              >
                IGSTUDIO
              </Typography>
            </Stack>
            <Stack direction="row" justifyContent="center" alignItems="center">
              <Button className="inherit">Home</Button>
              <Button className="inherit">Attorneys</Button>
              <Button className="inherit">Practice Areas</Button>
              <Button className="inherit">About Us</Button>
            </Stack>
            {/* <Button className="inherit contact">Contact Now</Button> */}
            <div>
              <img src={Facbook} className="socialIcon" />
              <img src={Twitter} className="socialIcon" />
              <img src={Pintrest} className="socialIcon" />
              <img src={Instagram} className="socialIcon" />
            </div>
          </Stack>
          <Stack direction="row" alignItems="center" justifyContent="center" className="footerCopyright" sx={{ my: 7}}>
            <p>© 2020 Acme. All right reserved.</p>
            <p>Privacy Policy</p>
            <p>Terms of Service</p>
          </Stack>
        </AppBar>
      </Box>
    </Stack>
  );
}
