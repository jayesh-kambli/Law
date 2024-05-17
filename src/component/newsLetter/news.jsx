import { Stack } from "@mui/material";
import React from "react";
import "./news.style.css";

export default function News() {
  return (
    <Stack justifyContent="center" alignItems="center" className="newsMainBg">
      <Stack justifyContent="center" alignItems="center" className="newsinnerdiv">
        <h1 className="newsHeading">Subscribe Our Newsletter</h1>
        <Stack direction="row" justifyContent="center" alignItems="center">
          <input type="text" className="newsInp1" placeholder="Name" />
          <input
            type="text"
            className="newsInp2"
            placeholder="Enter your Email"
          />
          <button className="newsBtn">SEND</button>
        </Stack>
      </Stack>
    </Stack>
  );
}
