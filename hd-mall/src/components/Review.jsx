import { React } from 'react';
import "../review.css";
import review1 from '../resource/review1.svg';


const Review = ({icon, text}) => {
    return(
        <div className='review'>
            <img className='review-svg' src={icon} alt='svg image'/><div className='review-text'>{text}</div>
        </div>
    )
}
export default Review;
