import { React } from 'react';
import "../carouitem.css"
import caroubird from '../resource/caroubird.svg';

const CarouItem2 = ({text}) => {
    return(
        <div className='carou-item'>
        <img src={caroubird} alt="caroubird" />
            <div>{text}</div>
        </div>

    )
}
export default CarouItem2;