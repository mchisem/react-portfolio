import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import StarIcon from '@material-ui/icons/Star';
import "./About.css";


export default function RecipeReviewCard() {

  return (
    <div id="about-cont">
    <Card id="about-card-cont">
      <CardHeader
        title="About Maya Chisem"
        subheader="Boss Bitch"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
            "I'm a dynamic, full stack developing, photo taking QUEEN"
        </Typography>
      </CardContent>
      <CardActions id="card-actions">
          <StarIcon></StarIcon>
          <StarIcon></StarIcon>
          <StarIcon></StarIcon>
          <StarIcon></StarIcon>
          <StarIcon></StarIcon>
      </CardActions>
      <a href="https://docs.google.com/document/d/1PtiQZwzOEzbH0tE27GN5v6nI0eb3fZMtttzrr2C-asE/edit">
        Resume
      </a>
    </Card>
    </div>
  );
}