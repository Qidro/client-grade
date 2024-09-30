import React, { useEffect, useState } from 'react';
import './App.css';
import { feact } from './services/nodes';
import { Route, Router, RouterProvider, Routes } from 'react-router-dom';
import { router } from './routes/router';
import Navbars from './components/NavigationPanel/Navbar';

function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const feactData = async() =>
    {
      await feact();
    }
    feactData();
  },[])
  return (
  //   <Routes>
  //     <Route path='/rec' element={<Rec />}>
  //     </Route>
  //     <Route path='/reg' element={<Reg />}>
  //     </Route>
  //     <Route path='/' element={<Aut />}>
  //     </Route>
  //     <Route path='/test' element={<Tests />}>
  //     </Route>
  // </Routes>
  loading ? <>
            
        </> : <>
            
            <RouterProvider router={router}/>
            
        </>

  );
}

export default App;
