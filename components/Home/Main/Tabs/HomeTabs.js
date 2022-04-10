import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import InPlay from "./Inplay/Inplay";
import NextLive from "./NextLive/NextLive";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}>
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function HomeTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <div className="bg-sky-600 text-white py-1">
        <marquee className="text-1xl mt-1">
          This site under construction.we are coming soon.Thank you
        </marquee>
      </div>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons
          allowScrollButtonsMobile
          aria-label="scrollable force tabs example">
          <Tab label="In-Play" {...a11yProps(0)} />
          <Tab label="Next Live" {...a11yProps(1)} />
          <Tab label="Tomorrow" {...a11yProps(2)} />
          <Tab label="Advance" {...a11yProps(3)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <InPlay />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <NextLive />
      </TabPanel>
      <TabPanel value={value} index={2}>
        Tomorrow
      </TabPanel>
      <TabPanel value={value} index={3}>
        Advance
      </TabPanel>
    </Box>
  );
}
