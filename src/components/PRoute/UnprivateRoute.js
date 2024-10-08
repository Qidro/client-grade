import React, { useEffect, useRef, useState } from 'react';
import { Navigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import { UserAuthentication } from '../../services/node';


const UnPrivateRoute = ({ children }) => {
    const isAuthenticated = true; 
    const [isAuthorized, setIsAuthorized] = useState(false); 

    useEffect(() => { 
         const CheckUser = async() =>
    {
        try {
          let posts = 
            {
              token: Cookies.get('user')
            }
            //смотрим какая длина у токена
            let tokenLength = posts.token ? posts.token.length : 0;
            console.log("Длина перменной " , tokenLength);
            //если токена нет - перекидываем на форму регистрации
        if ( tokenLength == 0 )
          {
            setIsAuthorized(false);
          } 
          else
          {
            let message = await UserAuthentication(posts);
          console.log("Значение запроса: ",message);
          if(message == true )
            {
                setIsAuthorized(true); 
            }
          else
          {
            setIsAuthorized(false); 
          }
          }
        
    } catch (e) {}
      
    }
      
    
        
        console.log("Значение1", false); 
        CheckUser();
    }, []); 

    console.log("Значение2", isAuthorized); 
    return isAuthorized ? <Navigate to="/home" /> : children; 
}; 

export default UnPrivateRoute;