import React, { useEffect } from 'react';
import './App.css';
import { Reg } from'./components/Registration/Registration';
import { feact } from './services/nodes';

function App() {
  useEffect(() => {
    const feactData = async() =>
    {
      await feact();
    }
    feactData();
  },[])

  return (
    <Reg/>
  );
}

export default App;
