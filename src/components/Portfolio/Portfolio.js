import React from 'react';
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import "./Portfolio.css";

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(16),
      height: theme.spacing(16),
    },
  },
}));

export default function SimplePaper() {
  const classes = useStyles();

  return (
    <div id="cont" className={classes.root} style={{height:"100vh", width:"100%"}}>
      <Paper id="web" elevation={0} style={{borderRadius:"0", padding:"0", margin:"0", width:"50vw", height:"auto", backgroundImage:"url(https://images.unsplash.com/photo-1449247709967-d4461a6a6103?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2102&q=80)", backgroundPosition:"center", backgroundRepeat:"no-repeat", backgroundSize:"cover"}}>
        <Link to="/web" style={{textDecoration:"none"}}>
          <h5 className="port-link">
            Web
          </h5>
        </Link>
      </Paper>

      <Paper id="photo" elevation={3} style={{borderRadius:"0", padding:"0", margin:"0", width:"50vw", height:"auto", backgroundImage:"url(https://images.unsplash.com/photo-1523467327888-a8a445992901?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2100&q=80)", backgroundPosition:"center", backgroundRepeat:"no-repeat", backgroundSize:"cover"}}>
        <a href="https://mchisem.github.io/MayaChisem/public/index.html" style={{textDecoration:"none"}}>
          <h5 className="port-link">
            Photography
          </h5>
        </a>
      </Paper>
    </div>
  );
}