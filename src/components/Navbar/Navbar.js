// import React from 'react';
// import PropTypes from 'prop-types';
// import Button from '@material-ui/core/Button';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';
// import CssBaseline from '@material-ui/core/CssBaseline';
// import useScrollTrigger from '@material-ui/core/useScrollTrigger';
// import Box from '@material-ui/core/Box';
// import Container from '@material-ui/core/Container';
// import Fab from '@material-ui/core/Fab';
// import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
// import Zoom from '@material-ui/core/Zoom';

// import "./Navbar.css";

// function ScrollTop(props) {
//   const { children, window } = props;
//   // Note that you normally won't need to set the window ref as useScrollTrigger
//   // will default to window.
//   // This is only being set here because the demo is in an iframe.
//   const trigger = useScrollTrigger({
//     target: window ? window() : undefined,
//     disableHysteresis: true,
//     threshold: 100,
//   });

//   const handleClick = (event) => {
//     const anchor = (event.target.ownerDocument || document).querySelector('#back-to-top-anchor');

//     if (anchor) {
//       anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
//     }
//   };

//   return (
//     <Zoom in={trigger}>
//       <div onClick={handleClick} role="presentation" id="root" >
//         {children}
//       </div>
//     </Zoom>
//   );
// }

// // ScrollTop.propTypes = {
// //   children: PropTypes.element.isRequired,
// //   /**
// //    * Injected by the documentation to work in an iframe.
// //    * You won't need it on your project.
// //    */
// //   window: PropTypes.func,
// // };

// export default function BackToTop(props) {
//   return (
//     <React.Fragment>
//       <CssBaseline />
//       <AppBar>
//         <Toolbar>
//           <Typography variant="h6">MC</Typography>
//         </Toolbar>
//       </AppBar>
//       <Toolbar id="back-to-top-anchor" />
//     </React.Fragment>
//   );
// }


import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
// import MenuIcon from '@material-ui/icons/Menu';
import "./Navbar.css";

export default function ButtonAppBar() {

  return (
    <div id="root">
      <AppBar position="fixed">
        <Toolbar>
          <Button edge="start" id="title" color="inherit" aria-label="menu">
            MC
          </Button>
          <Typography variant="h6" id="middle-title">
            {/* News */}
          </Typography>
          <Button edge="end" color="inherit">Contact</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}