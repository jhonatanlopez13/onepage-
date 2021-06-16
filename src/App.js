import React from 'react';
import './style/App.scss';
import Navbar from './component/Navbar/Navbar'
import './icons/icomoon/style.css'
import Carrocel from './component/Carrocel/Carrocel';
import Lineicons from './component/Lineicons/Lineicons';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Carrocel/>
      <Lineicons/>
    </div>
  );
}

export default App;
