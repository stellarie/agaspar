import React, { useState } from "react";
import "./Navigation.scss";

const Navigation = ({showNavigation, setShowNavigation}) => {
    const [activeSection, setActiveSection] = useState("");
    const [hash, setHash] = useState(window.location.hash);

    const linkMap = [
        {
            name: "Home",
            href: "#home"
        },
        {
            name: "About",
            href: "#about"
        },
        {
            name: "Services",
            href: "#services"
        },
        {
            name: "Portfolio",
            href: "#portfolio"
        },
        {
            name: "Misc",
            href: "#misc"
        },
        {
            name: "Contact",
            href: "#contact"
        },
    ]

    const linkComponentMap = linkMap.map((link, index) => {
        return {
            cmp: <a className={(link.href === activeSection) ? 'active' : ''} href={link.href} id={link.name} key={link.name} onClick={()=>{
                setActiveSection(link.href !== "#home" ? link.href : "");
                setHash(link.href);
                setShowNavigation(link.href !== "#home");
                if (link.href === "#home") {
                    document.querySelector(".cover").classList.remove("inactive");
                    document.querySelector(".cover").classList.add("fade-in");
                }
            }}>{link.name}</a>,
            index
        }
    })

    return <div className={`navigation ${(hash.length > 0 && !hash.includes("home")) || showNavigation ? "nav-active" : "nav-inactive"}`}>
        <div className="nav-items">
            {linkComponentMap.map(link => link.cmp)}
        </div>
    </div>
}

export default Navigation;