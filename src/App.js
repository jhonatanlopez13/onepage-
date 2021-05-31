import React from 'react';
import './style/App.scss';
import Navbar from './component/Navbar/Navbar'
import './icons/icomoon/style.css'
import Carrocel from './component/Carrocel/Carrocel';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Carrocel/>
    </div>
  );
}

export default App;
