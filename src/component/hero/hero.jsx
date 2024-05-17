import { Stack } from "@mui/material";
import React from "react";
import "./hero.style.css";
import Avatar from "./avatar.png";
import AvatarBg from "./avatarBg.png";
import Grid from "@mui/material/Grid";
import { OutlinedInput } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';

export default function Hero() {
  return (
    <Stack
      className="heroMain"
      direction="row"
      justifyContent="center"
      alignItems="center"
    >
      <Grid container className="heroSub">
        <Grid item md={6} className="gridItem">
          <div style={{ width: "40vw" }}>
            <h1 className="heading">
              You don’t have to
              <br />
              Fight them Alone.
            </h1>
            <p className="subHeading">
              Lorem ipsum dolor sit amet consectetur adipiscing elit blandit,
              curabitur sodales conubia ut inceptos faucibus himenaeos tortor
              eget, hac massa gravida arcu interdum proin curae.
            </p>
          </div>
          <div style={{ width: "40vw"}}>
            <Stack
              className="letsTalk"
              direction="row"
              justifyContent="center"
              alignItems="center"
            >
                {/* <OutlinedInput /> */}
                <EmailIcon className="mailIcon"/>
              <input
                type="text"
                className="letsTalkInput"
                placeholder="Enter your email address"
              />
              <button className="letsTalkButton">Let's Talk</button>
            </Stack>
          </div>
        </Grid>
        <Grid item md={6}>
          <img src={Avatar} alt="Avatar" className="avatar avcommon" />
          <img src={AvatarBg} alt="AvatarBG" className="avatarbg avcommon" />
        </Grid>
      </Grid>
    </Stack>
  );
}
