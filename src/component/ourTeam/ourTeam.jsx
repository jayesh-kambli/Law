import React from "react";
import "./ourTeam.style.css";
import { Stack } from "@mui/material";
import Grid from '@mui/material/Grid';
import One from "./img/0a24632f9dad48719238ddf2884a0863.png";
import Two from "./img/10f4e73f38a7ff1fab32f2fc0db010f9.png";
import Three from "./img/4ce30b5d2f2773c5785f9dc061ceff73.jpeg";
import Four from "./img/7eb6afb7619fa84a07e3dd6f32a0f3d2.jpeg";
import Five from "./img/9f9936fa68f41c17b224a071bea60ef2.png";
import Six from "./img/f2e5d156c527337371de70eef0230a60.jpeg";
import "./ourTeam.style.css";

export default function OurTeam() {
  const Pill = ({ img, name, cases, type }) => {
    return <Grid item xs={4} sx={{justifyContent: "center", alignItems: "center", display: "flex"}}>
        <Stack direction="row" alignItems="center" justifyContent="stat" className={type}>
            <img src={img} alt={name} className={"pillImage"}/>
            <div className="innderPillDiv">
                <h3 style={{margin: "0.3rem", color: "white"}}>{name}</h3>
                <h4 style={{margin: "0.3rem"}} className="OnlyPillColor">{cases}</h4>
            </div>
        </Stack>
    </Grid>;
  };

  const data = [
    {
      img: One,
      name: "Danial Def",
      cases: "301 Cases",
      type: "mainPill",
    },
    {
      img: Two,
      name: "Sanfole",
      cases: "850 Cases",
      type: "mainPill spPill",
    },
    {
      img: Three,
      name: "Cesforila",
      cases: "470 Cases",
      type: "mainPill",
    },
    {
      img: Four,
      name: "Colleen",
      cases: "180 Cases",
      type: "mainPill",
    },
    {
      img: Five,
      name: "Haldone",
      cases: "212 Cases",
      type: "mainPill",
    },
    {
      img: Six,
      name: "Nik Joe",
      cases: "350 cases",
      type: "mainPill",
    },
  ];

  return (
    <Stack className="teamBackgroundMain" justifyContent="center" alignItems="center">
      <h1 className="teamMainHeading">Our Team</h1>
      <Stack>
        <Grid container>
            {data.map((ele) => (
                <Pill img={ele.img} name={ele.name} cases={ele.cases} type={ele.type}/>
            ))}
        </Grid>
      </Stack>
    </Stack>
  );
}
