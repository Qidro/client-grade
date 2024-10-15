import { useEffect, useState } from "react"
import { RecoveryPassword } from "../../services/node";


export function Rec()
{
    
    const [styleButton, setStyleButton] = useState('bg-blue-500')

    const [login, setLogin] = useState('')
    const [email, setEmail] = useState('')

    const [loginDirty, SetLoginDirty] = useState(false)
    const [emailDirty, SetEmailDirty] = useState(false)
    const[formValid, setFormValid] = useState(false)

    const [loginError, setLoginError] = useState('Логин не может быть пустым')
    const [emailError, setEmailError] = useState('Почта не может быть пустым')

    // функция проверки логина
    const loginHander = (e: React.ChangeEvent<HTMLInputElement>) => {
        setMessage("");
        setLogin(e.target.value)
        if(e.target.value.length < 3){
            setLoginError('Логин меньше 3 символов')
        }else if(e.target.value.length > 15){
            setLoginError('Логин больше 15 символов')
        }else if(!e.target.value){
            setLoginError('Логин не может быть пустым')
        }
        else{
            setLoginError('')
        }
    }

   

    //функция проверки email
    const emailHander = (e: React.ChangeEvent<HTMLInputElement>) => {
        setMessage("");
        setEmail(e.target.value)
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(!re.test(String(e.target.value).toLocaleLowerCase())){
            setEmailError('Некорректный email')
        }else{
            setEmailError('')
        }
    }

   
    

    //фукнция состояния (пользователь находится вы поле или нет)
    const  blurHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        switch(e.target.name){
            // case 'login':
            //     SetLoginDirty(true)
            //     break
            case 'email':
                SetEmailDirty(true)
                break

        }
    }

    //функция отвечающая за видимость кнопки по состоянию веденных полей 
    useEffect( () =>{
        // if(loginError ||  emailError )
        if(emailError )
        {
            setFormValid(false)
            setStyleButton('mt-1 bg-blue-300 w-full h-10 text-white rounded-lg')
        }
        else{
            setFormValid(true)
            setStyleButton('mt-1 bg-blue-500 w-full h-10 text-white rounded-lg')
        }
    }
    )
    //функция и состояние отправки post запроса на создание пользователя    
    const [message, setMessage] = useState('');
    const CreateUsers = async() =>
    {   
        // const posts = [
        //     {login: login, firstName: firstName, lastName: lastName, patronymic:Patronymic, email: email, password:password  }
        //   ];
        let posts = 
            {
            //   login: login,
              email: email,
            }
            setMessage(await RecoveryPassword(posts));
    };

    return (
        <form className='bg-gray-200'>
            <div className="h-screen flex justify-center items-center">
                <div className='w-1/4 p-16 border-solid border-0
            border-white-100 rounded-lg bg-white 2xl:w-1/4 lg:w-1/3 md:w-2/5 sm:w-1/2'>
                    <div className = "pb-4 flex justify-center items-center"><img  src="ugmu-logo.png" alt="неее" width={180} height={180}/></div>
                    <div className="text-center">
                        <h1 className="text-xl">Восстановление пароля</h1>
                        {/* Поле логина */}
                        {/* {(loginDirty && loginError) && <div style={{color:'red'}}>{loginError}</div>}
                        <input className="shadow appearance-none border rounded w-full mt-4 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" onChange={e => loginHander(e)} value={login} onBlur={e => blurHandler(e)} name = "login" type="text" placeholder="Введите ваш логин" />
                         */}
                        {/* Поле почты */}
                        {(emailDirty && emailError) && <div style={{color:'red'}}>{emailError}</div>}
                        <input className="shadow appearance-none border rounded w-full mt-2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" onChange={e => emailHander(e)} value={email} onBlur={e => blurHandler(e)} name = "email" type="text" placeholder="Введите почту" />
                        <button className={styleButton} onClick={CreateUsers} disabled={!formValid} type="button">Восстановить пароль</button>
                        {/* поле ошибки регистрации */}
                        <p className="text-xl text-red-600">{message}</p>
                    </div>
                </div>
            </div>
        </form>
        
    );

}