import { useEffect, useState } from "react"
import { CreateUser } from "../../services/nodes";
import { BrowserRouter, Route, Link  } from 'react-router-dom';

export function Tests()
{
    
    // const [styleButton, setStyleButton] = useState('bg-blue-500')

    // const [login, setLogin] = useState('')
    // const [password, setPassword] = useState('')

    // const [loginDirty, SetLoginDirty] = useState(false)
    // const [passwordDirty, SetPasswordDirty] = useState(false)
    // const[formValid, setFormValid] = useState(false)

    // const [loginError, setLoginError] = useState('Логин не может быть пустым')
    // const [passwordError, setPasswordError] = useState('Пароль не может быть пустым')

    // // функция проверки логина
    // const loginHander = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     setMessage("");
    //     setLogin(e.target.value)
    //     if(e.target.value.length < 3 || e.target.value.length > 15){
    //         setLoginError('Логин не соответсвует требованиям')
    //     }else if(!e.target.value){
    //         setLoginError('Логин не может быть пустым')
    //     }
    //     else{
    //         setLoginError('')
    //     }
    // }



    // //функция проверки пароля
    // const passwordHander = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     setMessage("");
    //     setPassword(e.target.value)
    //     if(e.target.value.length < 8){
    //         setPasswordError('Некорректный пароль.')
    //     }else if(!e.target.value)
    //     {
    //         setPasswordError('Пароль не должен быть пустым')
    //     }
    //     else{
    //         setPasswordError('')
    //     }
    // }

    // //фукнция состояния (пользователь находится вы поле или нет)
    // const  blurHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     switch(e.target.name){
    //         case 'login':
    //             SetLoginDirty(true)
    //             break
    //         case 'password':
    //             SetPasswordDirty(true)
    //             break
    //     }
    // }


    //функция отвечающая за видимость кнопки по состоянию веденных полей 
    // useEffect( () =>{
    //     if(loginError || passwordError)
    //     {
    //         setFormValid(false)
    //         setStyleButton('mt-1 bg-blue-300 px-20 py-2 text-white rounded-lg')
    //     }
    //     else{
    //         setFormValid(true)
    //         setStyleButton('mt-1 bg-blue-500 px-20 py-2 text-white rounded-lg')
    //     }
    // }
    // )
    // //функция и состояние отправки post запроса на создание пользователя    
    // const [message, setMessage] = useState('');
    // const CheckUsers = async() =>
    // {   
    //     // const posts = [
    //     //     {login: login, firstName: firstName, lastName: lastName, patronymic:Patronymic, email: email, password:password  }
    //     //   ];
    //     let posts = 
    //         {
    //           login: login,
    //           password: password
    //         }
    //     console.log("Все прошло успешно");
    //       setMessage(await CreateUser(posts));
    // };

    return (
        <form className='bg-gray-200'>
            <div className="h-screen flex justify-center items-center">
                <div className='w-5/6 h-5/6 p-0 border-solid border-0
            border-white-100 rounded-lg bg-white'>
                    <div className = "pb-4 flex justify-center items-center"><img  src="ugmu-logo.png" alt="неее" width={180} height={180}/></div>
                    <div className="text-center">
                        <h1 className="text-xl">Тип главная страница</h1>
                        {/* Поле логина */}
                        {/* {(loginDirty && loginError) && <div style={{color:'red'}}>{loginError}</div>} */}
                        
                    </div>
                </div>
            </div>
        </form>
        
    );

}