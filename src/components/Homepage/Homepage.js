import React, { useState } from "react";
import Loading from "./Loading/Loading";
import Navigation from "./Navigation/Navigation";
import "./Homepage.scss";
import Cover from "./sections/Cover/Cover";
import About from "./sections/About/About";

const Homepage = () => {
    const [showContent, setShowContent] = useState(false);
    const [showNavigation, setShowNavigation] = useState(false);

    return <div className="home">
        <Loading onFinish={() => setShowContent(true)} />
        <div className={`content ${showContent ? "fade-in" : ""}`}>
            <Navigation showNavigation={showNavigation} setShowNavigation={setShowNavigation}/>
            <div className="sections">
                <div className="section" id="home">
                    <Cover onSectionClick={() => setShowNavigation(true)}/>
                </div>
                <div className="section" id="about">
                    <About />
                </div>
            </div>
        </div>
    </div>
}

export default Homepage;