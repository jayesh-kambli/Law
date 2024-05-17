import React from "react";
import { Stack } from "@mui/material";
import Grid from "@mui/material/Grid";
import "./faq.style.css";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import AddIcon from "@mui/icons-material/Add";

const DropDown = ({ title, disc }) => {
  return (
    <Accordion className="Accordion">
      <AccordionSummary
        expandIcon={<AddIcon className="addIcon" />}
        aria-controls="panel1-content"
        id="panel1-header"
      >
        <Typography className="dropTitle">{title}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography className="dropDesc">{disc}</Typography>
      </AccordionDetails>
    </Accordion>
  );
};

export default function Faq() {
  const dess = `Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer.`;
  return (
    <Stack className="faqBg" alignItems="center" justifyContent="center">
      <Stack className="faqSUBDIV">
        <h1 style={{ color: "white", fontSize: "5rem" }}>FAQ</h1>
        <Grid container>
          <Grid xs={6} item>
            <p className="dropDesc">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint.
            </p>
          </Grid>
          <Grid xs={6} item>
            <DropDown
              title={"Do I need a personal injury report?"}
              disc={dess}
            />
            <DropDown title={"How much is my case worth?"} disc={dess} />
            <DropDown
              title={"What should I do right after car accidect"}
              disc={dess}
            />
            <DropDown title={"How much is my case worth?"} disc={dess} />
          </Grid>
        </Grid>
      </Stack>
    </Stack>
  );
}
