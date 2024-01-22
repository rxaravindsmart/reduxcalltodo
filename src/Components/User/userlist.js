import { Box, Fab, Grid, Typography } from "@mui/material";
import "./userlist.css";
import CallIcon from "@mui/icons-material/Call";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

import React from "react";
import { NavLink } from "react-router-dom";
import HeaderBar from "./Header";

const UserList = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <HeaderBar />
      </Box>
      <Grid container spacing={2}>
        <Grid item xs={1} textAlign={"center"} sx={{ mt: 4 }}>
          <NavLink to="/call">
            <Fab color="success" size="small">
              <CallIcon></CallIcon>
            </Fab>
          </NavLink>
          <Typography variant="subtitle2">Call log</Typography>
        </Grid>
        <Grid item xs={1} textAlign={"center"} sx={{ mt: 4 }}>
          <Fab color="success" size="small">
            <WhatsAppIcon></WhatsAppIcon>
          </Fab>
          <Typography variant="subtitle2">WhatsApp</Typography>
        </Grid>
      </Grid>
    </>
  );
};
export default UserList;
