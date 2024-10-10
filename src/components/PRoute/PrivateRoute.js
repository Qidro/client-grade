// import React, { useEffect, useRef, useState } from 'react';
// import { Navigate } from 'react-router-dom';

// const PrivateRoute = ({ children }) => {
//     const isAuthenticated = true; 
//     const [isAuthorized, setIsAuthorized] = useState(true); 

//     useEffect(() => { 
        
//         setIsAuthorized(false); 
//         console.log("Значение1", isAuthorized); 
//     }, []); 

//     console.log("Значение2", isAuthorized); 
//     return isAuthorized ? children : <Navigate to="/login" />; 
// }; 

// export default PrivateRoute;



import React, { useEffect, useRef, useState } from 'react';
import { Navigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import { UserAuthentication } from '../../services/node';


const PrivateRoute = ({ children }) => {
    const isAuthenticated = true; 
    const [isAuthorized, setIsAuthorized] = useState(true); 

    useEffect(() => { 
         const CheckUser = async() =>
    {
      console.log("Начал проверку");
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
        
    } catch (e) { setIsAuthorized(false); }
      
    }
      
    
        
        //console.log("Значение1", false); 
        CheckUser();
    }); 

    console.log("Значение2", isAuthorized); 
    return isAuthorized ? children : <Navigate to="/login" />; 
}; 

export default PrivateRoute;