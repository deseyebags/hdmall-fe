import { React, useState } from 'react';
import smallpic from '../resource/smallpic.svg';
import smallarrow from '../resource/smallarrow.svg';
import zline from '../resource/zline.svg';
import DownArrow from '../resource/DownArrow.svg';
import hospital from '../resource/hospital.svg';
import location from '../resource/location.svg';

import "../smallbox.css";


const SmallRoundedBox = ({text,colour}) => {
    return(
        <div className='outer-box'>
            <div style={{display:"flex",flexDirection:"row",alignContent:"center",justifyContent:"space-between"}}>
                <div className='big-text'>Paraffin treatment for 2 hands, 1 time at Adora Hair salon 1 time at Adora Hair salon Hair salon Hair salon</div>
                <img src={smallpic} alt="smallpic" style={{width:"66px",height:"66px",paddingTop:"16px",paddingRight:"12px"}}/>
            </div>
            <div className="relative-box" style={{position:"relative"}}>
                <div className="orig-cost">1,500 THB</div>
                <img src={zline} alt="zline" style={{marginLeft:"12px"}} />
                <div className='complex-item'>
                    <div className='new-cost'>
                        <div style={{display:"flex",flexDirection:"row", alignContent:"center",justifyContent:"center"}}>
                            1,200 THB<img src={smallarrow} alt="smallarrow"/>
                        </div>
                    </div>
                    <img src={DownArrow} alt="DownArrow" style={{position:"relative",marginLeft:"42.5px", top:"-13.5px"}} />
                </div>
            </div>
            <div className='bottom-row' style={{display:"flex",flexDirection:"row",alignContent:"center",justifyContent:"space-between"}}>
                <div className='left-side' style={{display:"flex",flexDirection:"row",alignItems:"center",paddingLeft:"12px"}}>
                    <img src={hospital} alt="hospital" style={{width:"32px",height:"32px", paddingRight:"8px"}}/>
                    <div className='hopital-line' style={{color:"#879399",fontSize : "13px",fontStyle:"normal",fontWeight:"400",lineHeight:"140%",textAlign:"right"}}>
                        
                            Bangkok Beauty ViMUT Hospital
                        
                        </div>
                    </div>
                <div className='right-side' style={{display:"flex",flexDirection:"row",alignItems:"center",paddingRight:"12px"}}>
                    <img src={location} alt="location" style={{paddingRight:"4.5px"}}/>
                    <div className='dist-text'>1.8km</div>
                </div>
            </div>

          
            
        </div>

    )
}
export default SmallRoundedBox;