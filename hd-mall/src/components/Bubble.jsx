import { React, useState } from 'react';
import "../index.css";
import "../bubble.css";
import activebubble from '../resource/bubble.svg';
import bubble from  '../resource/bubble.svg';

const Bubble = ({onClick, bubbleType, text}) => {
    return(
        <div 
        onClick={onClick} 
        className={bubbleType}
        style={{position:"relative"}}
        >
            <div className='bubble-text'>{text}</div>
            {/* <img 
                src={bubbleType === "active-bubble" ? activebubble : bubble} 
                alt="Bubble Shape" 
                style={{ position: 'absolute'}} 
            />
            <span style={{ position: 'relative', zIndex: 1 }}>{text}</span> */}
            
            
        </div>

    )
}
export default Bubble;