import {
  AppBar,
  Grid,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useSelector } from "react-redux";
const HeaderBar = () => {
  const Data = useSelector((state) => state.CallState.LoginData);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (data) => {
    setAnchorEl(null);
  };
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
          ></Typography>
          <IconButton
            id="dropdown-trigger"
            aria-label="dropdown"
            aria-controls="dropdown-menu"
            aria-haspopup="true"
            onClick={handleClick}
            size="normal"
          >
            <AccountCircleIcon size="normal"></AccountCircleIcon>
          </IconButton>
          <Menu
            id="dropdown-menu"
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
          >
            {" "}
            {Data &&
              Data.map((data, index) => (
                <MenuItem key={index} onClick={() => handleClose(data)}>
                  <Grid container spacing={2}>
                    <Grid item xs={2}>
                      <AccountCircleIcon size="normal"></AccountCircleIcon>
                    </Grid>
                    <Grid item xs={10}>
                      <Typography variant="subtitle2"> {data.email}</Typography>
                    </Grid>
                  </Grid>
                </MenuItem>
              ))}
            <MenuItem>
              <NavLink to="/login" style={{ textDecoration: "none" }}>
                Logout
              </NavLink>
            </MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
    </>
  );
};
export default HeaderBar;
