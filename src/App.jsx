import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import PriceList from './components/PriceList/PriceList';


const App = () => {
  return (
    <div className='App'>
      <Navbar></Navbar>
       <h1 className='text-3xl text-purple-600'>Hello From Tailwind</h1>
       <PriceList></PriceList>
    </div>
  );
};

export default App;