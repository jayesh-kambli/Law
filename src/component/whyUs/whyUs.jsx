import React, { useEffect, useState } from "react";
import { Stack } from "@mui/material";
import "./whyUs.style.css";
import Gift from "./gift.png";

export default function WhyUs() {

  const Card = ({ heading, para, classNm }) => {

    return (
      <div className={classNm}>
        <div>
          <div className="giftBg">
            <img src={Gift} alt="gift" className="giftLogo" />
          </div>
          <h1 className="cardHead">{heading}</h1>
          <p className="cardPara">{para}</p>
          <button className="readMoreBtn">Read More</button>
        </div>
      </div>
    );
  };

  return (
    <Stack
      direction="column"
      justifyContent="center"
      alignItems="center"
      className="whyUsBg"
    >
      <div className="whyusHeading">
        <h1>Why Choose us?</h1>
      </div>
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        className="whyUsBg"
      >
        <Card
          heading={"98% Success Rate"}
          para={
            "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer."
          }
          classNm={"card"}
        />
        <Card
          heading={"100% Success Rate"}
          para={
            "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer."
          }
          classNm={"card specialCard"}
        />
        <Card
          heading={"99% Success Rate"}
          para={
            "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer."
          }
          classNm={"card"}
        />
      </Stack>
    </Stack>
  );
}
