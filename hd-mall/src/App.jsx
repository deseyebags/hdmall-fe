import './App.css';
import Header from './components/NavBar';
import BubbleBar from './components/BubbleBar';
import BigRoundBox from './components/BigRoundBox';
import doctor1 from './resource/doctor1.svg';
import doctor2 from './resource/doctor2.svg';
import girlright from './resource/girlright.svg';
import girlbg from './resource/girlbg.svg';
import logowithbird from './resource/logowithbird.svg';
import MockCarousel from './components/MockCarousel';
import MockCarou2 from './components/MockCarou2';
import ReviewRow from './components/ReviewRow';

function App() {
  return (
    <div className="App" backgroundColor="#EAE6F5">
      <Header />
      <div className="Main-content" padding={100} >
          <div style={{alignItems: 'center',justifyItems: 'center'}}>
              <div className='main-graphic'>
                <div style={{display: "flex", flexDirection: "row", justifyContent: "center",position: "relative"}}>
                  <div>
                    <div className='text-left-1'>Cancel Cancer</div>
                    <div className='text-left-2'>Bangkok Medical Examination</div>
                    <div className='text-left-3'>9 Vaccination Course 3 Needles<br/> subtitle text</div>
                    <div className='text-left-4'>One Price</div>
                    <div className='text-left-price'>16,999 <span style={{fontSize: "16px"}}>THB</span></div>
                  </div>
                  <img className="girlbg" src={girlbg} alt="girlbg" />
                  <img className='girl' src={girlright} alt="girlright" />
                </div>
                <div>
                  <MockCarousel/>
                  <MockCarou2/>
                  <div className='blue-box'>
                    <div className='blue-row-1'> <img src={logowithbird} alt='logowithbird'/><div className='text-beside-logo'>10,000 health have been shared</div></div>
                    <div className='reviews'> 
                      <ReviewRow></ReviewRow>
                    </div>

                  </div>
                </div>
              </div>
          </div>
          <div className="container" style={{ justifyContent: 'center', alignItems: 'center',gap:"20px"}}>
              <BubbleBar className="component" style={{ paddingTop: '20px', marginBottom: '20px' }}/>
              <BigRoundBox
              className="component"
              big="rect1"
              small="box1"
              icon = {doctor1}
              text1="Large medical examination package"
              text2="The bivalent HPV vaccine targets HPV 16 and 18, the main causes of cervical cancer."
              />
              <BigRoundBox
              className="component"
              big="rect2"
              small="box2"
              icon = {doctor2}
              text1="Medium physical examination"
              text2="The bivalent HPV vaccine targets HPV 16 and 18, the main causes of cervical cancer."
              />
          </div>
      </div>
      
    </div>
  );
}

export default App;
