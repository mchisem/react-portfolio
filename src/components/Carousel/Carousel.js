import React from "react";
import { MDBCard, MDBCardImage, MDBCardBody, MDBCarousel, MDBCarouselInner, 
    MDBCarouselItem, MDBContainer,MDBView, MDBCardTitle, MDBCardGroup, MDBCardText } from "mdbreact";

import "./Carousel.css"

const CarouselPage = () => {

  return (
    <div id="carousel-cont">
    <MDBContainer>
      <MDBCarousel
        activeItem={1}
        length={3}
        showControls={true}
        showIndicators={false}
        interval={false}
        className="z-depth-1"
      >
        <MDBCarouselInner>
          <MDBCarouselItem itemId="1">
            <MDBView id="card-view">

            <MDBCardGroup>
                <MDBCard>
                    <a href="https://secret-beyond-86832.herokuapp.com/home">
                        <MDBCardImage 
                        src="https://mayachisem-portfolio.herokuapp.com/assets/images/web/sneaker.png"
                        alt="MDBCard image cap" 
                        style={{ height:"40vh", backgroundImage: "url(https://mayachisem-portfolio.herokuapp.com/assets/images/web/sneaker.png)", backgroundPosition:"center", backgroundRepeat:"no-repeat", backgroundSize:"cover" }}
                        overlay="white-slight" />
                        <MDBCardBody>
                        <MDBCardTitle tag="h5">Sneaker Freakers</MDBCardTitle>
                            <MDBCardText></MDBCardText>
                        </MDBCardBody>
                    </a>
                    </MDBCard>

                    <MDBCard>
                    <a href="https://shielded-wave-79654.herokuapp.com/signup.html">
                        <MDBCardImage 
                        src="https://mayachisem-portfolio.herokuapp.com/assets/images/web/wtw.png"
                        alt="MDBCard image cap" 
                        style={{ height:"40vh", backgroundImage: "url(https://mayachisem-portfolio.herokuapp.com/assets/images/web/wtw.png)", backgroundPosition:"center", backgroundRepeat:"no-repeat", backgroundSize:"cover" }}
                        overlay="white-slight" />
                        <MDBCardBody>
                        <MDBCardTitle tag="h5">Where's the Weed?</MDBCardTitle>
                            <MDBCardText></MDBCardText>
                        </MDBCardBody>  
                    </a>
                    </MDBCard>

                    <MDBCard>
                    <a href="https://acarcentes.github.io/bestappintheworld/">
                        <MDBCardImage 
                        src="https://mayachisem-portfolio.herokuapp.com/assets/images/web/ff.png"
                        alt="MDBCard image cap" 
                        style={{ height:"40vh", backgroundImage:"url(https://mayachisem-portfolio.herokuapp.com/assets/images/web/ff.png)", backgroundPosition:"center", backgroundRepeat:"no-repeat", backgroundSize:"cover"}}                        overlay="white-slight" />
                        <MDBCardBody>
                        <MDBCardTitle tag="h5">Food Finder</MDBCardTitle>
                            <MDBCardText></MDBCardText>
                        </MDBCardBody>
                    </a>
                    </MDBCard>
                </MDBCardGroup>
              
            </MDBView>
          </MDBCarouselItem>

          <MDBCarouselItem itemId="2">
            <MDBView>
            <MDBCardGroup>
                
                <MDBCard>
                    <a href="http://5stardevelopmentgroup.com/">
                        <MDBCardImage 
                        src="https://mayachisem-portfolio.herokuapp.com/assets/images/web/5stardevelopment.png"
                        alt="MDBCard image cap" 
                        style={{ height:"40vh", backgroundImage: "url(https://mayachisem-portfolio.herokuapp.com/assets/images/web/5stardevelopment.png)", backgroundPosition:"center", backgroundRepeat:"no-repeat", backgroundSize:"cover" }}
                        overlay="white-slight" />
                        <MDBCardBody>
                        <MDBCardTitle tag="h5">5 Star Development</MDBCardTitle>
                            <MDBCardText></MDBCardText>
                        </MDBCardBody>  
                    </a>
                </MDBCard>

                <MDBCard>
                    <a href="https://mchisem.github.io/Planning-in-Pink-HMW-Five/">
                        <MDBCardImage 
                        src="https://mayachisem-portfolio.herokuapp.com/assets/images/web/day-planner.png"
                        alt="MDBCard image cap" 
                        style={{ height:"40vh", backgroundImage: "url(https://mayachisem-portfolio.herokuapp.com/assets/images/web/day-planner.png)", backgroundPosition:"top", backgroundRepeat:"no-repeat", backgroundSize:"cover" }}                       
                        overlay="white-slight" />
                        <MDBCardBody>
                        <MDBCardTitle tag="h5">Day Planner</MDBCardTitle>
                            <MDBCardText></MDBCardText>
                        </MDBCardBody>
                    </a>
                    </MDBCard>

                    <MDBCard>
                    <a href="https://mchisem.github.io/WeatherDashboard/">
                        <MDBCardImage 
                        src="https://mayachisem-portfolio.herokuapp.com/assets/images/web/weather-dashboard%20(2).png"
                        alt="MDBCard image cap" 
                        style={{ height:"40vh", backgroundImage: "url(https://mayachisem-portfolio.herokuapp.com/assets/images/web/weather-dashboard%20(2).png)", backgroundPosition:"center", backgroundRepeat:"no-repeat", backgroundSize:"cover" }}
                        overlay="white-slight" />
                        <MDBCardBody>
                        <MDBCardTitle tag="h5">Weather Dashboard</MDBCardTitle>
                            <MDBCardText></MDBCardText>
                        </MDBCardBody>
                    </a>
                    </MDBCard>
                </MDBCardGroup>
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="3">
            <MDBView>

                
            <MDBCardGroup>
                <MDBCard>
                    <a href="https://mchisem.github.io/JavascriptTest/develop/index.html">
                        <MDBCardImage 
                        src="https://mayachisem-portfolio.herokuapp.com/assets/images/web/javascript-quiz-screenshot.png"
                        alt="MDBCard image cap" 
                        style={{ height:"40vh", backgroundImage: "url(https://mayachisem-portfolio.herokuapp.com/assets/images/web/javascript-quiz-screenshot.png)", backgroundPosition:"center", backgroundRepeat:"no-repeat", backgroundSize:"cover" }}
                        overlay="white-slight" />
                        <MDBCardBody>
                        <MDBCardTitle tag="h5">Javascript Quiz</MDBCardTitle>
                            <MDBCardText></MDBCardText>
                        </MDBCardBody>
                    </a>
                    </MDBCard>

                    <MDBCard>
                    <a href="https://mchisem.github.io/password-maker/develop/index.html">
                        <MDBCardImage 
                        src="https://mayachisem-portfolio.herokuapp.com/assets/images/web/password-generator.png"
                        alt="MDBCard image cap" 
                        style={{ height:"40vh", backgroundImage: "url(https://mayachisem-portfolio.herokuapp.com/assets/images/web/password-generator.png)", backgroundPosition:"center", backgroundRepeat:"no-repeat", backgroundSize:"cover" }}                        
                        overlay="white-slight" />
                        <MDBCardBody>
                        <MDBCardTitle tag="h5">Password Generator</MDBCardTitle>
                            <MDBCardText></MDBCardText>
                        </MDBCardBody>
                    </a>
                    </MDBCard>

                    {/* <MDBCard>
                    <a href="">
                        <MDBCardImage 
                        src="https://mayachisem-portfolio.herokuapp.com/assets/images/web/ff.png"
                        alt="MDBCard image cap" 
                        style={{ height:"40vh", backgroundImage: "url(https://mayachisem-portfolio.herokuapp.com/assets/images/web/ff.png)", backgroundPosition:"center", backgroundRepeat:"no-repeat", backgroundSize:"cover" }}
                        overlay="white-slight" />
                        <MDBCardBody>
                        <MDBCardTitle tag="h5">Sneaker Freakers</MDBCardTitle>
                            <MDBCardText></MDBCardText>
                        </MDBCardBody>  
                    </a>
                    </MDBCard> */}

                </MDBCardGroup>

            </MDBView>
          </MDBCarouselItem>
        </MDBCarouselInner>
      </MDBCarousel>
    </MDBContainer>
    </div>
  );
}

export default CarouselPage;