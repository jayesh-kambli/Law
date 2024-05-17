import React from "react";
import "./area.style.css";
import { Stack } from "@mui/material";
import One from "./img/one.jpeg";
import Two from "./img/two.jpeg";
import Three from "./img/three.jpeg";
import Four from "./img/four.jpeg";
import Five from "./img/five.jpeg";
import Six from "./img/six.jpeg";
import { Margin } from "@mui/icons-material";

const Areas = ({ img, text }) => {
  return (
    <div class="image-container" style={{ margin : "1rem"}}>
      <img className="areaImage" src={img} alt="Description" />
      <div class="overlay">
        <div class="text">{text}</div>
      </div>
    </div>
  );
};

const Areas2 = ({ img, text }) => {
  return (
    <div class="image-container2" style={{ margin : "1rem"}}>
      <img className="areaImage2" src={img} alt="Description" />
      <div class="overlay2">
        <div class="text">{text}</div>
      </div>
    </div>
  );
};

export default function Area() {
  return (
    <Stack className="mainAreaBg">
      <h1 className="HeadingArea">Area of Practices</h1>
      <Stack direction="row" justifyContent="center" alignContent="center">
        <Areas img={One} text={"BUSINESS LAW"}/>
        <Areas2 img={Two} text={"PARTNERSHIP LAW"} />
      </Stack>
      <Stack direction="row" justifyContent="center" alignContent="center">
        <Areas2 img={Three} text={"PARTNERSHIP LAW"} />
        <Areas img={Four} text={"BUSINESS LAW"}/>
      </Stack>
      <Stack direction="row" justifyContent="center" alignContent="center">
        <Areas img={Five} text={"BUSINESS LAW"}/>
        <Areas2 img={Six} text={"PARTNERSHIP LAW"} />
      </Stack>
    </Stack>
  );
}
