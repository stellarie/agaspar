import React, { useState, useEffect } from 'react';
import './Circle.scss';

const Circle = () => {
  const [rot1, setRot1] = useState(0);
  const [rot2, setRot2] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setRot1(prev => prev + 1);
    }, 50)
  }, []);

  useEffect(() => {
    setInterval(() => {
      const randomRotation = Math.floor(Math.random() * 360);
      setRot2(randomRotation);
    }, 2000);
  },[])

  return <div className="circle-top-container">
    <div className="circle-container">
      <div className="circle-1" style={{ transform: `rotate(${rot1}deg)` }} />
      <div className="circle-2" style={{ transform: `rotate(${rot2}deg)` }} /> 
    </div>

    <div className="circle-status">
      {`circle_1: ${rot1%360} deg, circle_2: ${rot2} deg`}
    </div>
  </div>
};

export default Circle;
