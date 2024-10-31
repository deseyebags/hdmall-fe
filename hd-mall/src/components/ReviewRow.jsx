import { React } from 'react';
import "../review.css";
import Review from './Review';
import review1 from '../resource/review1.svg';
import review2 from '../resource/review2.svg';
import review3 from '../resource/review3.svg';


const ReviewRow = () => {
    return(
        <div className='review-row'>
            <Review
            text="0% interest installment"
            icon={review1}/>
            <Review 
            text="HDMall sold 10,000 units"
            icon={review2}/>
            <Review 
            text="Real user reviews"
            icon={review3}/>
            
        </div>

    )
}
export default ReviewRow;