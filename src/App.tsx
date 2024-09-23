import React, { useEffect } from 'react';
import './App.css';
import { Reg } from'./components/Registration/Registration';
import { feact } from './services/nodes';
import { Route, Router, Routes } from 'react-router-dom';
import { Aut } from './components/Authorization/Authorization';
import { Rec } from './components/RecoveryPassword/Recovery';

function App() {
  useEffect(() => {
    const feactData = async() =>
    {
      await feact();
    }
    feactData();
  },[])
  return (
    <Routes>
      <Route path='/rec' element={<Rec />}>
      </Route>
      <Route path='/reg' element={<Reg />}>
      </Route>
      <Route path='/' element={<Aut />}>
      </Route>
  </Routes>
  );
}

export default App;
