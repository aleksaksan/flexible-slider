import React from 'react';
import './App.css';
import { FlexibleSlider } from './components/FlexibleSlider/FlexibleSlider';

function App() {
  return (
    <div className="App">
      <div className="sliders-container">
        <FlexibleSlider
          isHaveDots={true}
          isByContent={true}
          isLooped={true}
        >
        </FlexibleSlider>
        <FlexibleSlider
          isLooped={false}  
          isHaveDots={true}
          // customArrowButtonRight={<div style={{width: "50px", height: "50px", backgroundColor: "aqua", borderRadius: "50%", margin: "0"}}></div>} 
          // customDotsButtton={<div style={{width: "30px", height: "30px", backgroundColor: "aqua", borderRadius: "50%", marginTop: "-30px"}}></div>}
          isArrowButtonsOnHover={false}
          isDotsButtonsOnHover={false}
          isByContent={false}
        >
          <div style={{width: "200px", height: "50px", backgroundColor: "aqua"}}></div>
          <div style={{width: "200px", height: "50px",  backgroundColor: "gray"}}></div>
          <div style={{width: "200px", height: "50px",  backgroundColor: "aqua"}}></div>
          <div style={{width: "200px", height: "50px",  backgroundColor: "gray"}}></div>
          <div style={{width: "200px", height: "50px", backgroundColor: "aqua"}}></div>
          <div style={{width: "200px", height: "50px",  backgroundColor: "gray"}}></div>
          <div style={{width: "200px", height: "50px",  backgroundColor: "aqua"}}></div>
          <div style={{width: "200px", height: "50px",  backgroundColor: "gray"}}></div>
          <div style={{width: "200px", height: "50px", backgroundColor: "aqua"}}></div>
          <div style={{width: "200px", height: "50px",  backgroundColor: "gray"}}></div>
        </FlexibleSlider>
      </div>
    </div>
  );
}

export default App;
