import React from 'react';

import "./Jumbotron.css";


export default function JumbotronDisplay() {
    return(
        <div id="jumbotron">
            <div id="jumbo-name">
                Maya Chisem
                <br></br>
                <span style={{fontSize: "1.25rem", letterSpacing: "3px"}}>Web Developer & Photographer</span>
            </div>
        </div>
    )
}