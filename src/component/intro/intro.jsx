import { Stack } from "@mui/material";
import React from "react";
import "./intro.style.css";
import Grid from "@mui/material/Grid";

export default function Intro() {
  return (
    <Stack className="bgIntro">
      <Grid container className="introMain">
        <Grid item xs={6} className="makeHorizontal">
          <h1 className="introMainHeading">Let's Introduce<br />Ourself</h1>
            <div className="lineLight"></div>
        </Grid>
        <Grid item xs={6} sx={{ p:4}} className="gridForCriminalLawyer">
          <Stack direction="row" justifyContent="center" alignItems="center">
            <div>
              <h2>Criminal Lawyer</h2>
              <h3 className="pText">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequatduis enim velit mollit
                Exercitation.
              </h3>
            </div>
          </Stack>
        </Grid>
      </Grid>
    </Stack>
  );
}
