import React from "react";
import "./About.scss";

const About = () => {
    return <div className="about-me">
        <div className="am-lhs">
            <div className="am-header">
                about me
            </div>
        </div>
        <div className="am-rhs">
            <div className="am-content">
                <div className="am-section">
                    I am primarily a full-stack developer specializing in <b>ReactJS</b> and <b>Java</b>. I have developed components and RESTful APIs for several projects (both professional and personal), and kept several personal projects as my testbed for new ideas I might have. You can view some of my projects at my <a href="https://github.com/stellarie">GitHub</a>.
                </div>
                <div className="am-section">
                    For frontend development, I use HTML and CSS (primarily <b>SASS</b>) everyday, and keep myself updated with the latest updates on ReactJS and ES6. I focus on <b>clean design</b> and <b>user experience.</b>
                </div>
                <div className="am-section">
                    I use Java regularly for backend development, mainly for creating RESTful APIs with seamless integration in mind. Also, I specialize in <b>OSGi</b> development, keeping modular architecture and service maintainability in mind.
                </div>
                <div className="am-section">
                    Lately, I have been enamored with the <b>Spring</b> framework - and is currently learning it on a deeper level. Also, I create (mostly) utility scripts in <b>bash</b> and <b>Python</b>, mostly for personal use and better quality-of-life professionally.
                </div>
            </div>
        </div>
    </div>
}

export default About;