import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import "./Navbar.css";

export default function ButtonAppBar() {

  return (
    <div id="root">
      <AppBar position="fixed">
        <Toolbar>
          <Button edge="start" color="inherit" aria-label="menu">
            <Link id="title" to="/home">
                MC
            </Link>
          </Button>
          <Typography variant="h6" id="middle-title">
            {/* News */}
          </Typography>
          <Button edge="end" color="inherit">
              <a href="mailto:chisem.maya@gmail.com" style={{textDecoration:"none", color:"black"}}>
                Contact
              </a>
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}