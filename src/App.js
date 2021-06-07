import React from 'react';
import './App.css';
import Header from './components/Header'
import ImgSlider from './components/Slider'
import Movies from './components/Movies'

function App() {
  return (
    <div className="App">
      <Header />
      <ImgSlider />
      <Movies />
      
    </div>
  );
}

export default App;
