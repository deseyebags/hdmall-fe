import React, { useState } from 'react';
// import "../bubble.css";
import bubble from '../resource/bubble.svg';
import Bubble from './Bubble';

const BubbleBar = () => {
    const text = ["All regions", "Bangkok city center", "Su Weikun","Bangkok city center","Bangkok city center",];
    const [activeBubble, setActiveBubble] = useState('All regions');

    const handleClick = (bubble) => {
        setActiveBubble(bubble);
    };

    return (
        <div className="BubbleBar" width={"100%"} style={{paddingTop:"16px"}} >
            {/* <img src={bubble} alt="Bubble" className="Bubble" /> */}
    
            {text.map((item, index) => (
                <Bubble
                    text={item}
                    key={index}  // Adding a unique key prop for each item
                    onClick={() => handleClick(index)}
                    bubbleType={activeBubble === index ? 'active-bubble' : 'bubble'}
                />    
            ))}
        </div>
    );
};

export default BubbleBar;