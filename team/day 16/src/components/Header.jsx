import React from "react";
import AppBar from "@mui/material/AppBar";
import MovieIcon from "@mui/icons-material/Movie";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <MovieIcon sx={{ mr: 2 }} />
          <Link to={"/"} style={{ textDecoration: "none", color: "#fff" }}>
            <Typography variant="h6" color="inherit" noWrap>
              MOVIE21
            </Typography>
          </Link>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
