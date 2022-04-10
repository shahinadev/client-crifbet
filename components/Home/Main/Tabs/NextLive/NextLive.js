import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SubAccordion from "../subAccordion/SubAccordion";
import { Divider } from "@mui/material";

export default function NextLive() {
  const [expanded, setExpanded] = React.useState(false);
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header">
          <Typography sx={{ width: "5%", flexShrink: 0 }}>
            <img src="/logo/foodball.png" alt="food ball" />
          </Typography>
          <Typography sx={{ color: "text.secondary", fontWeight: "600" }}>
            Football
            <Divider />
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <SubAccordion data={{ name: "Spanish LaLiga" }} />
          <SubAccordion data={{ name: "UEFA Europa League" }} />
          <SubAccordion data={{ name: "Indian I-League" }} />
        </AccordionDetails>
      </Accordion>
    </>
  );
}
