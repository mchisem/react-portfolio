// import React from 'react';
// import Card from '@material-ui/core/Card';
// import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
// import Typography from '@material-ui/core/Typography';
// import "./About.css";

// export default function MediaControlCard() {

//   return (
//     <Card id="about-cont">
//       <div id="details">
//         <CardContent id="content">
//           <Typography component="h5" variant="h5">
//             About Maya
//           </Typography>
//           <Typography variant="subtitle1" color="textSecondary">
//             Mac Miller
//           </Typography>
//         </CardContent>
//       </div>
//       <CardMedia
//         id="cover"
//         image={Image}
//         title="Live from space album cover"
//       />
//     </Card>
//   );
// }

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
// import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
// import Collapse from '@material-ui/core/Collapse';
// import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
// import MoreVertIcon from '@material-ui/icons/MoreVert';
// import Image from "../../assets/images/me-standing.jpg";
import StarIcon from '@material-ui/icons/Star';
import "./About.css";

const useStyles = makeStyles((theme) => ({
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
}));

export default function RecipeReviewCard() {
  const classes = useStyles();
//   const [expanded, setExpanded] = React.useState(false);

  return (
    <div id="about-cont">
    <Card id="about-card-cont">
      <CardHeader
        // avatar={
        //   <Avatar aria-label="recipe">
        //     <CardMedia
        //     image={Image}
        //     title="Paella dish"
        //     />
        //   </Avatar>
        // }
        // action={
        //   <IconButton aria-label="settings">
        //     <MoreVertIcon />
        //   </IconButton>
        // }
        title="About Maya Chisem"
        subheader="Boss Bitch"
      />
      {/* <CardMedia
        className={classes.media}
        image="/static/images/cards/paella.jpg"
        title="Paella dish"
      /> */}
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
            "I'm a dynamic full stack developing, photo taking QUEEN"
        </Typography>
      </CardContent>
      <CardActions id="card-actions">
          <StarIcon></StarIcon>
          <StarIcon></StarIcon>
          <StarIcon></StarIcon>
          <StarIcon></StarIcon>
          <StarIcon></StarIcon>
      </CardActions>
    </Card>
    </div>
  );
}