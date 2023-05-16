import React from "react";
import "./Button.scss";

const Button = (props) => {
    const { type, label, onClick = () => {} } = props;

    return <div className={`btn ${type}`} onClick={() => onClick()}>
        {label}
    </div>
}

export default Button;