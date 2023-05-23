import React, { useEffect, useState } from "react";
import Button from "../../../inputs/Button/Button";
import Circle from "../../../Circle/Circle";
import "./Cover.scss";

const Cover = ({onSectionClick = () => {}}) => {
    //const [display, setDisplay] = useState("fade-in");

    const scrollTo = (anchor) => {
        document.querySelector(".cover").classList.remove("fade-in-quick");
        document.querySelector(".cover").classList.add("inactive");
        const href = document.querySelector(anchor);
        if(!href) {
            document.querySelector(".cover").classList.add("fade-in-quick");
            document.querySelector(".cover").classList.remove("inactive");
            return;
        }
        href.scrollIntoView({
            behavior: "instant"
        });

        const { history } = window;

        if(history.pushState) {
            history.pushState({}, "", anchor);
        }

        onSectionClick();
    }

    return <div className={`cover fade-in-quick ${window.location.hash !== "#home" ? "inactive" : ""}`}>
        <div className="lhs">
            <span className="header">&lt;alecs-gaspar/&gt;</span>
            <span className="subheader">from ideas to reality</span>
            <span className="lhs-content">
                <div className="desc">
                    <ul className="tag-list">
                        <li className="tag-content"> Creating seamless experiences and bringing your vision to life through innovative web solutions. </li>
                    </ul>
                </div>
                <div className="button-list">
                    Know me more, and let's talk:
                    <ul className="tag-list">
                        <li className="btn-content">
                            <Button type={"btn-1"} onClick={()=>{
                                    scrollTo("#about");
                                }
                            } label={"About Me"}/>
                        </li>
                        <li className="btn-content">
                            <Button type={"btn-1"} onClick={()=>{
                                    scrollTo("#services");
                                }
                            } label={"What can I do for you?"}/>
                        </li>
                        <li className="btn-content">
                            <Button type={"btn-1"} onClick={()=>{
                                    scrollTo("#portfolio");
                                }
                            } label={"What have I done?"}/>
                        </li>
                        <li className="btn-content">
                            <Button type={"btn-1"} onClick={()=>{
                                    scrollTo("#services");
                                }
                            } label={"Life, Lifting, and Leisure"}/>
                        </li>
                        <li className="btn-content">
                            <Button type={"btn-1"} onClick={()=>{
                                    scrollTo("#contact");
                                }
                            } label={"Contact Me"}/>
                        </li>
                    </ul>
                </div>
            </span>
        </div>
        <div className="rhs">
            <div className="rhs-content">
                <Circle />
            </div>
        </div>
    </div>
}

export default Cover;