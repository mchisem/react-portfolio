import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import StarIcon from '@material-ui/icons/Star';
import "./Reviews.css";

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
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
    <div className={classes.root} style={{paddingBottom:"5%", justifyContent:"center"}}>
      <Paper className="review">
        <p>
            "‘Creative’ is the word that comes to mind when I think about Maya. I had the pleasure of working with Maya during our time at UCLA Extension full-stack coding bootcamp. Maya’s ability to handle multiple projects was unlike any I’ve seen before. Maya would be an asset to any company. She is truly one of a kind."
        </p>
        <Avatar className="avatar" alt="Taylor Johnson" src="https://avatars3.githubusercontent.com/u/57122209?s=460&u=98c6df52c701d97f4ad472ec554e3fb5753e1f9f&v=4" />
        <div className="stars">
            <StarIcon></StarIcon>
            <StarIcon></StarIcon>
            <StarIcon></StarIcon>
            <StarIcon></StarIcon>
            <StarIcon></StarIcon>
        </div>
        <h4>Taylor Johnson</h4>
        <p style={{padding:"0", margin:"0"}}>Sr. Content Creator at Shopkick</p>
      </Paper>
      <Paper className="review">
        <p>
            "Maya's ability to create beautiful and striking app designs is truly impressive. I had the pleasure of attending the UCLA Full Stack Coding Bootcamp with Maya, while we did not work on any projects together, I was able to see her passion for design in all of her work. Maya embodies the essence of what an ideal team player is, her ability to encourage people and create a supportive and inviting environment is a true value. No matter the situation, I know Maya is someone I can go to who will be ready to listen and ready to lend a helping hand. I would recommend Maya for any role as a Software Developer, she would be a valuable asset to any company."
        </p>
        <Avatar className="avatar" alt="Ana Valdivia" src="https://avatars3.githubusercontent.com/u/42880531?s=460&u=0cce595e85fac2ccb168f1c639cec74a408f8eb7&v=4" />
        <div className="stars">
            <StarIcon></StarIcon>
            <StarIcon></StarIcon>
            <StarIcon></StarIcon>
            <StarIcon></StarIcon>
            <StarIcon></StarIcon>
        </div>
        <h4>Ana Valdivia</h4>
        <p style={{padding:"0", margin:"0"}}>Business Analyst at Amazon</p>
      </Paper>
      <Paper className="review">
        <p>"Maya is a charismatic, detail-oriented creative. I have worked with Maya on several projects and she has always brought fresh innovative ideas and isn't scared to take the necessary risks to get them done. She is proactive and diligent in her work, this makes project flow very easy. I will continue working with Maya in the future."</p>
        <Avatar className="avatar" alt="Taylor Miranda" src="https://media-exp1.licdn.com/dms/image/C5603AQHz48mm5e4mQA/profile-displayphoto-shrink_400_400/0/1571379644976?e=1614211200&v=beta&t=wWzjEdGFENxetdO3z1hE494tzmpF38mayFD5X7lsweY" />
        <div className="stars">
            <StarIcon></StarIcon>
            <StarIcon></StarIcon>
            <StarIcon></StarIcon>
            <StarIcon></StarIcon>
            <StarIcon></StarIcon>
        </div>
        <h4>Taylor Miranda</h4>
        <p style={{padding:"0", margin:"0"}}>Digital Marketer</p>
      </Paper>
    </div>
  );
}