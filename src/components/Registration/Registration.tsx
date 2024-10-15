import { useEffect, useState } from "react"
import { Registration } from "../../data/Registration"
import {User} from "../../types/user";
import { CreateUser } from "../../services/nodes";
import { title } from "process";
interface ProductProps{
    product: Registration

}

export function Reg()
{
    
    const [styleButton, setStyleButton] = useState('bg-blue-500')

    const [login, setLogin] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [Patronymic, setPatronymic] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [loginDirty, SetLoginDirty] = useState(false)
    const [firstNameDirty, SetFirstNameDirty] = useState(false)
    const [lastNameDirty, SetLastNameDirty] = useState(false)
    const [PatronymicDirty, SetPatronymicDirty] = useState(false)
    const [emailDirty, SetEmailDirty] = useState(false)
    const [passwordDirty, SetPasswordDirty] = useState(false)
    const[formValid, setFormValid] = useState(false)

    const [loginError, setLoginError] = useState('Логин не может быть пустым')
    const [firstNameError, setFirstNameError] = useState('Имя не может быть пустым')
    const [lastNameError, setLastNameError] = useState('Фамилия не может быть пустым')
    const [PatronymicError, setPatronymicError] = useState('Отчество не может быть пустым')
    const [emailError, setEmailError] = useState('Почта не может быть пустым')
    const [passwordError, setPasswordError] = useState('Пароль не может быть пустым')

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

    //функция проверки имени
    const firstNameHander = (e: React.ChangeEvent<HTMLInputElement>) => {
        setMessage("");
        setFirstName(e.target.value)
        if(e.target.value.length < 3){
            setFirstNameError('Имя меньше 3 символов')
        }else if(!e.target.value){
            setFirstNameError('Имя не может быть пустым')
        }
        else{
            setFirstNameError('')
        }
    }

    //функция проверки Фамилии
    const lastNameHander = (e: React.ChangeEvent<HTMLInputElement>) => {
        setMessage("");
        setLastName(e.target.value)
        if(e.target.value.length < 5){
            setLastNameError('Фамилия меньше 5 символов')
        }else if(!e.target.value){
            setLastNameError('Фамилия не может быть пустым')
        }
        else{
            setLastNameError('')
        }
    }

    //функция проверки Отчества
    const patronymicHander = (e: React.ChangeEvent<HTMLInputElement>) => {
        setMessage("");
        setPatronymic(e.target.value)
        if(e.target.value.length < 5){
            setPatronymicError('Отчество меньше 5 символов')
        }else if(!e.target.value){
            setPatronymicError('Отчество не может быть пустым')
        }
        else{
            setPatronymicError('')
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

    //функция проверки пароля
    const passwordHander = (e: React.ChangeEvent<HTMLInputElement>) => {
        setMessage("");
        setPassword(e.target.value)
        if(e.target.value.length < 8){
            setPasswordError('Некорректный пароль. Пароль должен иметь более 7 символов')
        }else if(!e.target.value)
        {
            setPasswordError('Пароль не должен быть пустым')
        }
        else{
            setPasswordError('')
        }
    }

    //фукнция состояния (пользователь находится вы поле или нет)
    const  blurHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        switch(e.target.name){
            case 'login':
                SetLoginDirty(true)
                break
            case 'firstName':
                SetFirstNameDirty(true)
                break
            case 'lastName':
                SetLastNameDirty(true)
                break
            case 'patronymic':
                SetPatronymicDirty(true)
                break
            case 'email':
                SetEmailDirty(true)
                break
            case 'password':
                SetPasswordDirty(true)
                break
        }
    }

    //функция отвечающая за видимость кнопки по состоянию веденных полей 
    useEffect( () =>{
        if(loginError || firstNameError || lastNameError || PatronymicError || emailError || passwordError)
        {
            setFormValid(false)
            setStyleButton('mt-1 bg-blue-300 text-white rounded-lg w-full h-10')
        }
        else{
            setFormValid(true)
            setStyleButton('mt-1 bg-blue-500 text-white rounded-lg w-full h-10')
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
              login: login,
              firstName: firstName,
              lastName: lastName,
              patronymic: Patronymic,
              email: email,
              password: password
            }
            setMessage(await CreateUser(posts));
    };

    return (
        <form className='bg-gray-200'>
            <div className="h-screen flex justify-center items-center">
                <div className='w-1/4 p-16 border-solid border-0
            border-white-100 rounded-lg bg-white 2xl:w-1/4 lg:w-1/3 md:w-2/5 sm:w-1/2'>
                    <div className = "pb-4 flex justify-center items-center"><img  src="ugmu-logo.png" alt="неее" width={180} height={180}/></div>
                    <div className="text-center">
                        <h1 className="text-xl">Регистрация пользователя</h1>
                        {/* Поле логина */}
                        {(loginDirty && loginError) && <div style={{color:'red'}}>{loginError}</div>}
                        <input className="shadow appearance-none border rounded w-full mt-4 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" onChange={e => loginHander(e)} value={login} onBlur={e => blurHandler(e)} name = "login" type="text" placeholder="Введите ваш логин" />
                        {/*                         <input className="mt-4 pl-40 pr-4 py-1 border rounded-lg" onChange={e => loginHander(e)} value={login} onBlur={e => blurHandler(e)} name = "login" type="text" placeholder="Введите ваш логин" /> */}
                        {/* Поле имени */}
                        {(firstNameDirty && firstNameError) && <div style={{color:'red'}}>{firstNameError}</div>}
                        <input className="shadow appearance-none border rounded w-full mt-2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" onChange={e => firstNameHander(e)} value={firstName} onBlur={e => blurHandler(e)} name = "firstName" type="text" placeholder="Введите имя" />
                        {/* Поле Фамилии */}
                        {(lastNameDirty && lastNameError) && <div style={{color:'red'}}>{lastNameError}</div>}
                        <input className="shadow appearance-none border rounded w-full mt-2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" onChange={e => lastNameHander(e)} value={lastName} onBlur={e => blurHandler(e)} name = "lastName" type="text" placeholder="Введите фамилию" />
                        {/* Поле отчество */}
                        {(PatronymicDirty && PatronymicError) && <div style={{color:'red'}}>{PatronymicError}</div>}
                        <input className="shadow appearance-none border rounded w-full mt-2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" onChange={e => patronymicHander(e)} value={Patronymic} onBlur={e => blurHandler(e)} name = "patronymic" type="text" placeholder="Введите отчество" />
                        {/* Поле почты */}
                        {(emailDirty && emailError) && <div style={{color:'red'}}>{emailError}</div>}
                        <input className="shadow appearance-none border rounded w-full mt-2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" onChange={e => emailHander(e)} value={email} onBlur={e => blurHandler(e)} name = "email" type="text" placeholder="Введите почту" />
                        {/* Поле пароля */}
                        {(passwordDirty && passwordError) && <div style={{color:'red'}}>{passwordError}</div>}
                        <input className="shadow appearance-none border rounded w-full mt-2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" onChange={e => passwordHander(e)} value={password} onBlur={e => blurHandler(e)} name = "password" type="text" placeholder="Введите пароль" />
                        <button className={styleButton} onClick={CreateUsers} disabled={!formValid} type="button">Зарегистрироваться</button>
                        {/* поле ошибки регистрации */}
                        <p className="text-xl text-red-600">{message}</p>
                    </div>
                </div>
            </div>
        </form>
        
    );

}