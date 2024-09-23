import React, { useEffect } from 'react';
import './App.css';
import { Reg } from'./components/Registration/Registration';
import { feact } from './services/nodes';
import { Aut } from './components/Authorization/Authorization';

function App() {
  useEffect(() => {
    const feactData = async() =>
    {
      await feact();
    }
    feactData();
  },[])

  return (
    <Aut/>
  );
}

export default App;
