import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import './Card.css'

export default function MediaControlCard() {

  return (
    <Card className="root">
      <div className="details">
        <CardContent className="content">
          <Typography component="h5" variant="h5">
            Javascript Quiz
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            This is a timed quiz I made using Html, CSS, and Javascript <br>
            </br>
            Feel free to try it out yourself!
          </Typography>
        </CardContent>
        <div className="controls">
        </div>
      </div>
      <CardMedia
        className="cover"
        title="Live from space album cover"
      />
    </Card>
  );
}