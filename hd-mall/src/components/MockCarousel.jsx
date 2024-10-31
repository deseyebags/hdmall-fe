import { React } from 'react';
import "../carousel.css";
import carou1 from '../resource/carou1.svg';
import carou2 from '../resource/carou2.svg';
import carou3 from '../resource/carou3.svg';    
import carou4 from '../resource/carou4.svg';

const MockCarousel = () => {
    return(
        <div className='carousel'>
            <img src={carou1} alt="Carousel" className="Carousel"/>
            <img src={carou2} alt="Carousel" className="Carousel"/>
            <img src={carou3} alt="Carousel" className="Carousel"/>
            <img src={carou4} alt="Carousel" className="Carousel"/>
        </div>

    )
}
export default MockCarousel;