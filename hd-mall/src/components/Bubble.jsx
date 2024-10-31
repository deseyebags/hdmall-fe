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
        >
            <div className='bubble-text'>{text}</div>
            
            
        </div>

    )
}
export default Bubble;