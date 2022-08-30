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
        
      </div>
    </div>
  );
}

export default App;
