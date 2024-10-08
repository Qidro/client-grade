import React, { useEffect, useRef, useState } from 'react';
import './App.css';
import { feact, UserAuthentication } from './services/node';
import { Navigate, Route, Router, RouterProvider, Routes, useNavigate } from 'react-router-dom';
import { router } from './routes/router';
import Navbars from './components/NavigationPanel/Navbar';
import Cookies from 'js-cookie';

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
  
    // const CheckUser = async() =>
    // {
      
    //   // Проверка URL
    //   const currentUrl = window.location.pathname;
    //   if (currentUrl === '/registration' || currentUrl === '/recovery' || currentUrl === '/' ) {
    //     // Ваш код для обработки данного URL
    //     console.log('Находимся на нужном URL');
    // }
    // //првоерка на токен юзера
    // else{
    //     try {
    //       let posts = 
    //         {
    //           token: Cookies.get('user')
    //         }
    //         //смотрим какая длина у токена
    //         let tokenLength = posts.token ? posts.token.length : 0;
    //         console.log("Длина перменной " , tokenLength);
    //         //если токена нет - перекидываем на форму регистрации
    //     if ( tokenLength == 0 )
    //       {
    //         <Navigate to="/registration" />
    //       } 
    //       else
    //       {
    //         let message = await UserAuthentication(posts);
    //       console.log(message);
    //       if(message != "Токен успешно проверен" )
    //         {
    //           <Navigate to="/" />
    //         }
    //       }
        
    // } catch (e) {}
      
    // }
      
    // }
    // CheckUser();
  }, [])
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
