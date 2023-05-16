import React, { useEffect, useState } from "react";
import "./Loading.scss";

const Loading = (props) => {
    const {onFinish = () => {}} = props;
    const [timeToLoad, setTimeToLoad] = useState(0);
    const [speed, setSpeed] = useState(100.0);
    const [bar, setBar] = useState("_");

    useEffect(() => {
        const interval = setInterval(() => {
            if (timeToLoad >= 100) {
                setTimeToLoad(100);
                return () => clearInterval(interval);
            }
            setTimeToLoad(prev => prev + 1);
            setBar(prev => prev + "_");
            setSpeed(prev => prev - 1.25);
        }, speed);

        return () => clearInterval(interval);
    }, [speed, timeToLoad]);

    useEffect(() => {
        if (timeToLoad >= 100) {
            onFinish();
        }
    }, [timeToLoad, onFinish])

    return <>
        <div className={`loader ${timeToLoad >= 100 ? "fade-out" : ""}`}>
            <span className="label">
                {timeToLoad}%
            </span>
            <span className="bar">
                {bar}
            </span>
        </div>
    </>
}


export default Loading;