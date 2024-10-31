import { React, useState } from 'react';
import arrow from '../resource/arrow.svg';
import arrow2 from '../resource/arrow2.svg';
import SmallRoundedBox from './SmallRoundedBox';
import DownArrow from '../resource/DownArrow.svg';

import "../box.css";


const BigRoundBox = ({big,small,icon,text1,text2}) => {
    return(
        <div>
            <div className={big} >
                <div style={{display:"flex",flexDirection:"row",alignContent:"center",justifyContent:"space-between", position:"relative"}}>
                    <div style={{display:"block"}}>
                        <div className='text1'>{text1}</div>
                        <div className='text2'>{text2}</div>
                        <div className='button1'>
                            <div className='button-text'>View more information</div> 
                            <img src={arrow}/>
                        </div>
                    </div>
                    <img className='doc' src={icon} alt="doctor"/>
                </div>
                
                <div className={small}
                style={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
                    <div className='grid-box' >
                        <SmallRoundedBox className='small-box'></SmallRoundedBox>
                        <SmallRoundedBox className='small-box'></SmallRoundedBox>
                        <SmallRoundedBox className='small-box'></SmallRoundedBox>
                        <SmallRoundedBox className='small-box'></SmallRoundedBox>   
                    </div>
                    <div className='big-button' style={{marginBottom:"16px", gap:"16px"}}><div style={{display:"flex",color: "#16191A", textAlign: "center",fontWeight: "500", fontStyle: "normal", lineHeight: "140%"}}>View all <img style={{paddingLeft:"10px"}} src={arrow2} alt="DownArrow" /></div></div>
                </div>
            </div>
            
        </div>

    )
}
export default BigRoundBox;