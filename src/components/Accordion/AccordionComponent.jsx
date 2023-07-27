import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import React from "react";
import styles from "./AccordionComponent.module.css";

const AccordionComponet = ({ expanded, handleChange, id, title, answer }) => {
  return (
    <div>
      <Accordion
        sx={{ backgroundColor: "#1d1d1d", border: "none" }}
        expanded={expanded === id}
        onChange={handleChange(id)}
        square="false"
        className={
          expanded === id ? styles.removeShadow : styles.MuiPapeElevation
        }
      >
        <AccordionSummary
          expandIcon={
            expanded === id ? "" : <button className={styles.btn}>+</button>
          }
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ color: "white" }}>{title}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{ color: "gray" }}>{answer}</Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default AccordionComponet;
