import React, { useState } from "react";
import Button from "../../../inputs/Button/Button";
import "./Cover.scss";

const Cover = ({onSectionClick = () => {}}) => {
    const [transition, setTransition] = useState(true);

    const scrollTo = (anchor) => {
        const href = document.querySelector(anchor);
        if(!href) return;
        setTransition(false);
        href.scrollIntoView({
            behavior: "smooth"
        });

        const { history } = window;

        if(history.pushState) {
            history.pushState({}, "", anchor);
        }

        onSectionClick();
    }

    return <div className={`cover ${transition ? "fade-in" : "inactive"}`}>
        <div className="lhs">
            <span className="header">&lt;alecs-gaspar/&gt;</span>
            <span className="subheader">from ideas to reality</span>
            <span className="lhs-content">
                <div className="desc">
                    <ul className="tag-list">
                        <li className="tag-content"> Transform ideas into digital realities. </li>
                        <li className="tag-content"> Create seamless experiences and bring your vision to life through innovative web solutions. </li>
                        <li className="tag-content"> Bridge the gap between imagination and tangible online journeys. </li>
                    </ul>
                </div>
                <div className="button-list">
                    Know me more, and let's talk:
                    <ul className="tag-list">
                        <li className="btn-content">
                            <Button type={"btn-1"} onClick={()=>scrollTo("#about")} label={"About Me"}/>
                        </li>
                        <li className="btn-content">
                            <Button type={"btn-1"} onClick={()=>scrollTo("#services")} label={"What can I do for you?"}/>
                        </li>
                        <li className="btn-content">
                            <Button type={"btn-1"} onClick={()=>scrollTo("#portfolio")} label={"What have I done?"}/>
                        </li>
                        <li className="btn-content">
                            <Button type={"btn-1"} onClick={()=>scrollTo("#misc")} label={"Life, Lifting, and Leisure"}/>
                        </li>
                        <li className="btn-content">
                            <Button type={"btn-1"} onClick={()=>scrollTo("#contact")} label={"Contact Me"}/>
                        </li>
                    </ul>
                </div>
            </span>
        </div>
        <div className="rhs">

        </div>
    </div>
}

export default Cover;