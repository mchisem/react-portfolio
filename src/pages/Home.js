import React from 'react';
import Jumbotron from "../components/Jumbotron/Jumbotron";
import About from "../components/About/About";
import Reviews from "../components/Testimonials/Reviews";
import PortfolioSection from "../components/Portfolio/Portfolio";
import Footer from "../components/Footer/Footer";

function Home() {
    return (
        <main>
            <Jumbotron></Jumbotron>
            <About></About>
            <Reviews></Reviews>
            <PortfolioSection></PortfolioSection>
            <Footer></Footer>
        </main>
    )
}

export default Home;