import React from 'react';
import './App.css';
import Header from './components/Header'
import ImgSlider from './components/Slider'
import Movies from './components/Movies'
import LogosWraper from './components/LogosWraper'

function App() {
  return (
    <div className="App">
      <Header />
      <ImgSlider />
      <LogosWraper />
      <Movies />
      
    </div>
  );
}

export default App;
