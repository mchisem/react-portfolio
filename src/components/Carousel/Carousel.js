import React from "react";
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView, MDBContainer } from
"mdbreact";
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import "./Carousel.css";


const CarouselPage = () => {


  return (
    <MDBContainer style={{height:"100vh"}}>
      <MDBCarousel
        activeItem={1}
        length={9}
        showControls={true}
        showIndicators={true}
        interval={false}
        className="z-depth-1"
        slide
        id="outer-car"
      >
        <MDBCarouselInner id="inner-car">
          <MDBCarouselItem itemId="1">
          < MDBView>
              <img
                className="image"
                src="https://mayachisem-portfolio.herokuapp.com/assets/images/web/sneaker.png"
                alt="Second slide"
              />
            </MDBView>
            <MDBView className="content">
                <Typography component="h5" variant="h5">
                    Sneaker Freakers
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                    Sneaker Freakers is a React Library based 
                    interactive application, that allows users to 
                    search for sneakers by brand, through a third 
                    party API.
                </Typography>
                <Button className="project-btn">
                    <a href="https://secret-beyond-86832.herokuapp.com/home">
                        View Project
                    </a>
                </Button>
              </MDBView>
          </MDBCarouselItem>

          <MDBCarouselItem itemId="2">
            <MDBView>
              <img
                className="image"
                src="https://mayachisem-portfolio.herokuapp.com/assets/images/web/ff.png"
                alt="Second slide"
              />
            </MDBView>
            <MDBView className="content">
                <Typography component="h5" variant="h5">
                    Food Finder
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                    Find Finder is a collaborative Javascript based 
                    application, that allows users to 
                    search for restaurants in their local area.
                </Typography>
                <Button className="project-btn">
                    <a href="https://acarcentes.github.io/bestappintheworld/">
                        View Project
                    </a>
                </Button>
            </MDBView>
          </MDBCarouselItem>

          <MDBCarouselItem itemId="3">
            <MDBView>
              <img
                className="image"
                src="https://mchisem.github.io/NewPortfolio/public/assets/images/web/wtw.png"
                alt="Second slide"
              />
            </MDBView>
            <MDBView className="content">
                <Typography component="h5" variant="h5">
                    Where's the Weed?
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                    Sneaker Freakers is a React Library based 
                    interactive application, that allows users to 
                    search for sneakers by brand, through a third 
                    party API.
                </Typography>
                <Button className="project-btn">
                    <a href="https://shielded-wave-79654.herokuapp.com/signup.html">
                        View Project
                    </a>
                </Button>
            </MDBView>
          </MDBCarouselItem>

          <MDBCarouselItem itemId="4">
            <MDBView>
              <img
                className="image"
                src="https://mayachisem-portfolio.herokuapp.com/assets/images/web/5stardevelopment.png"
                alt="Second slide"
              />
            </MDBView>
            <MDBView className="content">
                <Typography component="h5" variant="h5">
                    5 Star Development
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                    Sneaker Freakers is a React Library based 
                    interactive application, that allows users to 
                    search for sneakers by brand, through a third 
                    party API.
                </Typography>
                <Button className="project-btn">
                    <a href="http://5stardevelopmentgroup.com/">
                        View Project
                    </a>
                </Button>
            </MDBView>
          </MDBCarouselItem>

          <MDBCarouselItem itemId="5">
          <MDBView>
              <img
                className="image"
                src="https://mchisem.github.io/NewPortfolio/public/assets/images/web/empl-dir.png"
                alt="Second slide"
              />
            </MDBView>
            <MDBView className="content">
                <Typography component="h5" variant="h5">
                    Employee Directory
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                    Sneaker Freakers is a React Library based 
                    interactive application, that allows users to 
                    search for sneakers by brand, through a third 
                    party API.
                </Typography>
                <Button className="project-btn">
                    <a href="https://emp-direc.herokuapp.com/">
                        View Project
                    </a>
                </Button>
            </MDBView>
          </MDBCarouselItem>

          <MDBCarouselItem itemId="6">
          <MDBView>
              <img
                className="image"
                src="https://mayachisem-portfolio.herokuapp.com/assets/images/web/password-generator.png"
                alt="Second slide"
              />
            </MDBView>
            <MDBView className="content">
                <Typography component="h5" variant="h5">
                    Password Generator
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                    Sneaker Freakers is a React Library based 
                    interactive application, that allows users to 
                    search for sneakers by brand, through a third 
                    party API.
                </Typography>
                <Button className="project-btn">
                    <a href="https://mchisem.github.io/password-maker/develop/index.html">
                        View Project
                    </a>
                </Button>
            </MDBView>
          </MDBCarouselItem>

          <MDBCarouselItem itemId="7">
          <MDBView>
              <img
                className="image"
                src="https://mchisem.github.io/NewPortfolio/public/assets/images/web/javascript-quiz-screenshot.png"
                alt="Second slide"
              />
            </MDBView>
            <MDBView className="content">
                <Typography component="h5" variant="h5">
                    Javascript Quiz
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                    Sneaker Freakers is a React Library based 
                    interactive application, that allows users to 
                    search for sneakers by brand, through a third 
                    party API.
                </Typography>
                <Button className="project-btn">
                    <a href="https://mchisem.github.io/JavascriptTest/develop/index.html">
                        View Project
                    </a>
                </Button>
            </MDBView>
          </MDBCarouselItem>

          <MDBCarouselItem itemId="8">
          <MDBView>
              <img
                className="image"
                src="https://mchisem.github.io/NewPortfolio/public/assets/images/web/day-planner.png"
                alt="Second slide"
              />
            </MDBView>
            <MDBView className="content">
                <Typography component="h5" variant="h5">
                    Daily Planner
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                    Sneaker Freakers is a React Library based 
                    interactive application, that allows users to 
                    search for sneakers by brand, through a third 
                    party API.
                </Typography>
                <Button className="project-btn">
                    <a href="https://mchisem.github.io/Planning-in-Pink-HMW-Five/">
                        View Project
                    </a>
                </Button>
            </MDBView>
          </MDBCarouselItem>

          <MDBCarouselItem itemId="9">
          <MDBView>
              <img
                className="image"
                src="https://mchisem.github.io/NewPortfolio/public/assets/images/web/weather-dashboard%20(2).png"
                alt="Second slide"
              />
            </MDBView>
            <MDBView className="content">
                <Typography component="h5" variant="h5">
                    Weather Dashboard
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                    Sneaker Freakers is a React Library based 
                    interactive application, that allows users to 
                    search for sneakers by brand, through a third 
                    party API.
                </Typography>
                <Button className="project-btn">
                    <a href="https://mchisem.github.io/WeatherDashboard/">
                        View Project
                    </a>
                </Button>
            </MDBView>
          </MDBCarouselItem>

        </MDBCarouselInner>
      </MDBCarousel>
    </MDBContainer>
  );
}

export default CarouselPage;