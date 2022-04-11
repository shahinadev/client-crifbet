import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import LeftSidebar from "./LeftSidebar/LeftSidebar";
import RightSidebar from "./RightSidebar/RightSidebar";
import Main from "./Main/Main";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function AutoGrid() {
  return (
    <Box sx={{ flexGrow: 1, mt: 8.8 }}>
      <Grid container spacing={1}>
        <Grid item xs={12} sm>
          <Item sx={{ padding: 0 }}>
            <LeftSidebar />
          </Item>
        </Grid>
        <Grid item xs={12} sm={7}>
          <Item sx={{ padding: 0 }}>
            <Main />
          </Item>
        </Grid>
        <Grid item xs={12} sm>
          <Item sx={{ padding: 0, width: "100%" }}>
            <RightSidebar />
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
