import React from 'react';
import './landing.css'
const Landing = () => {
    return (
        <>
            <div className="landingPageMain">
                <div className="landingHome">
                    <div className="landingWelcomeMsgContainer">
                        <h1 className="landingWelcomeMessage">Let's Make Better Trades Through StonksUp</h1>
                        <h6 className="landingParagraph">Get Real Time Simulation On Live Stocks Trading With our wide Range of Choices</h6>
                    </div>
                    <div className="landingHomeImages">
                        <div className="landingCircle1"></div>
                        <div className="landingCircle2"></div>
                        <img className="landingImage1" src="../assets/image3.jpg" alt=""/>
                        <img className="landingImage2" src="../assets/image1.webp" alt=""/>
                        <img className="landingImage3" src="../assets/image2.jpg" alt="" />
                    </div>
                </div>
            </div>
        </>
    );
};
export default Landing;