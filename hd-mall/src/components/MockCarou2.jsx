import { React } from 'react';
import "../carousel2.css";
import CarouItem2 from './CarouItem2';


const MockCarousel = () => {
    return(
        <div className='carousel2'>
            <CarouItem2
            text={"Effective & essential for health."}/>
            <CarouItem2
            text={"Safe, convenient, peace of mind."}/>
            <CarouItem2
            text={"Safe, convenient, peace of mind."}/>
          
        </div>

    )
}
export default MockCarousel;