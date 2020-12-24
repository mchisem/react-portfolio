import React from "react";
import { MDBContainer, MDBFooter } from "mdbreact";
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

import "./Footer.css";


function FooterDisplay() {
    return (
        <MDBFooter id="footer" color="blue" className="font-small pt-4 mt-4" id="footer"> 
        <div id="icons">
          <MDBContainer fluid>
            <a href="https://github.com/mchisem">
                <GitHubIcon></GitHubIcon>
            </a>
            <a href="https://www.linkedin.com/in/maya-chisem-030827132/?senderId=ana-valdivia-69ab8b106">
                <LinkedInIcon></LinkedInIcon>
            </a>
            <a href="https://www.instagram.com/mayachizam/">
                <InstagramIcon></InstagramIcon>
            </a>
          </MDBContainer>
        </div>
   
        <div className="footer-copyright text-center py-3">
          <MDBContainer fluid>
            &copy; {new Date().getFullYear()} Copyright: <a href="" style={{textDecoration:"none"}}>Maya Chisem</a>
          </MDBContainer>
        </div>
      </MDBFooter>
    )
}

export default FooterDisplay;