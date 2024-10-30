import { React, useState } from 'react';
import "../index.css";
import "../bubble.css";
import bubble from '../resource/bubble.svg';

const Bubble = ({onClick, bubbleType, text}) => {
    return(
        <div 
        onClick={onClick} 
        className={bubbleType}
        >
            <p >{text}</p>
        </div>

    )
}
export default Bubble;