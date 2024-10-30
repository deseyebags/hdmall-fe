import './App.css';
import Header from './components/NavBar';
import BubbleBar from './components/BubbleBar';
import BigRoundBox from './components/BigRoundBox';
import doctor1 from './resource/doctor1.svg';
import doctor2 from './resource/doctor2.svg';

function App() {
  return (
    <div className="App" backgroundColor="#EAE6F5">
      <Header />
      <div className="Main-content" padding={100} >
          <div style={{flex: 1.8, backgroundColor: 'red', justifyContent: 'center', alignItems: 'center'}}>
              <h1>chunk 1 goes here</h1>
          </div>
          <div className="container" style={{flex: 3.6, justifyContent: 'center', alignItems: 'center',gap:"20px"}}>
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
