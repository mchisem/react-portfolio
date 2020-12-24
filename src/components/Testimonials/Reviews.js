import React from 'react';
import "./Reviews.css";
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function ImageAvatars() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Avatar alt="Remy Sharp" src="https://avatars3.githubusercontent.com/u/57122209?s=460&u=98c6df52c701d97f4ad472ec554e3fb5753e1f9f&v=4" />
      <Avatar alt="Travis Howard" src="https://avatars3.githubusercontent.com/u/42880531?s=460&u=0cce595e85fac2ccb168f1c639cec74a408f8eb7&v=4" />
      <Avatar alt="Cindy Baker" src="https://media-exp1.licdn.com/dms/image/C5603AQHz48mm5e4mQA/profile-displayphoto-shrink_400_400/0/1571379644976?e=1614211200&v=beta&t=wWzjEdGFENxetdO3z1hE494tzmpF38mayFD5X7lsweY" />
    </div>
  );
}