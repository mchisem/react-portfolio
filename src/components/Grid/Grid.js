import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    // flexGrow: 1,
    maxWidth: "100%",
    justifyContent: "center",
    overflow: "hidden",
    padding: "5%"
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    borderRadius: 0,
    border:"none",
    margin: "1%"
  },
}));

export default function GridDisplay() {

    const classes = useStyles();

    function FormRow() {
      return (
        <React.Fragment>
          <Grid item xs={4}>
            <Paper className={classes.paper} style={{ height:"40vh", backgroundImage:"url(https://mayachisem-portfolio.herokuapp.com/assets/images/web/javascript-quiz-screenshot.png)", backgroundPosition:"center", backgroundRepeat:"no-repeat", backgroundSize:"cover"}}>
            </Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper className={classes.paper} style={{ height:"40vh", backgroundImage: "url(https://mayachisem-portfolio.herokuapp.com/assets/images/web/password-generator.png)", backgroundPosition:"center", backgroundRepeat:"no-repeat", backgroundSize:"cover" }}>
            </Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper className={classes.paper} style={{ height:"40vh", backgroundImage: "url(https://mayachisem-portfolio.herokuapp.com/assets/images/web/day-planner.png)", backgroundPosition:"top", backgroundRepeat:"no-repeat", backgroundSize:"cover" }}>
            </Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper className={classes.paper} style={{ height:"40vh", backgroundImage: "url(https://mayachisem-portfolio.herokuapp.com/assets/images/web/5stardevelopment.png)", backgroundPosition:"center", backgroundRepeat:"no-repeat", backgroundSize:"cover" }}>
            </Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper className={classes.paper} style={{ height:"40vh", backgroundImage: "url(https://mayachisem-portfolio.herokuapp.com/assets/images/web/wtw.png)", backgroundPosition:"center", backgroundRepeat:"no-repeat", backgroundSize:"cover" }}>
            </Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper className={classes.paper} style={{ height:"40vh", backgroundImage: "url(https://mayachisem-portfolio.herokuapp.com/assets/images/web/ff.png)", backgroundPosition:"center", backgroundRepeat:"no-repeat", backgroundSize:"cover" }}>
            </Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper className={classes.paper} style={{ height:"40vh", backgroundImage: "url(https://mayachisem-portfolio.herokuapp.com/assets/images/web/sneaker.png)", backgroundPosition:"center", backgroundRepeat:"no-repeat", backgroundSize:"cover" }}>
            </Paper>
          </Grid>
        </React.Fragment>
      );
    }
  
    return (
    <div>
      <div id="web-port-cont" className={classes.root} style={{marginTop:"5%"}}>
        <Grid container spacing={1}>
          <Grid container item xs={12} spacing={3}>
            <FormRow />
          </Grid>
          <Grid container item xs={12} spacing={3}>
            {/* <FormRow /> */}
          </Grid>
          <Grid container item xs={12} spacing={3}>
            {/* <FormRow /> */}
          </Grid>
        </Grid>
      </div>
      </div>
    );
}