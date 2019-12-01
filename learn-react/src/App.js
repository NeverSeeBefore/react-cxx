import React from 'react';
import './App.css';
import Banner from './Component/common/Banner';
import src1 from './assets/sona.jpg';
import src2 from './assets/sona-2.jpg';
import src3 from './assets/sona-3.jpg';

function App() {
  // let imgSrcs

  return (
    <div className="App">
      <Banner imgSrcs={[src1, src2, src3]}></Banner>
    </div>
  );
}

export default App;
