import { Box, Button, Grid } from "@mui/material";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import PersonAddAltOutlinedIcon from "@mui/icons-material/PersonAddAltOutlined";
import "./login.css";
import { Outlet } from "react-router";
import { NavLink } from "react-router-dom";
const LoginPage = () => {
  return (
    <div className="login-container">
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Box className="login-box-contents">
            <Box className="header-box">
              <NavLink to="/login/">
                <Button
                  activeClassName="active"
                  className="login-btn"
                  startIcon={<PersonOutlineOutlinedIcon />}
                >
                  Sign in
                </Button>
              </NavLink>
              <NavLink to="/login/singup">
                <Button
                  activeClassName="active"
                  className="login-btn"
                  startIcon={<PersonAddAltOutlinedIcon />}
                >
                  Sign Up
                </Button>
              </NavLink>
            </Box>
            <Outlet />
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};
export default LoginPage;
