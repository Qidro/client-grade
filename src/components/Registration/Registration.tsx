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
        setLogin(e.target.value)
        if(e.target.value.length < 3){
            setLoginError('Логин меньше 3 символов')
        }else if(!e.target.value){
            setLoginError('Логин не может быть пустым')
        }
        else{
            setLoginError('')
        }
    }

    //функция проверки имени
    const firstNameHander = (e: React.ChangeEvent<HTMLInputElement>) => {
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
        setPassword(e.target.value)
        if(e.target.value.length < 5){
            setPasswordError('Некорректный пароль. Пароль должен иметь более 5 символов')
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
        }
        else{
            setFormValid(true)
        }
    }
    )    

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
          
        await CreateUser(posts);
    };

    return (
        <form>
            <div className="reg">
            <h1>Регистрация пользователя</h1>
            <p></p>
            {/* Поле логина */}
            {(loginDirty && loginError) && <div style={{color:'red'}}>{loginError}</div>}
            <input onChange={e => loginHander(e)} value={login} onBlur={e => blurHandler(e)} name = "login" type="text" placeholder="Введите ваш логин" />
            {/* Поле имени */}
            <p></p>
            {(firstNameDirty && firstNameError) && <div style={{color:'red'}}>{firstNameError}</div>}
            <input onChange={e => firstNameHander(e)} value={firstName} onBlur={e => blurHandler(e)} name = "firstName" type="text" placeholder="Введите имя" />
            {/* Поле Фамилии */}
            <p></p>
            {(lastNameDirty && lastNameError) && <div style={{color:'red'}}>{lastNameError}</div>}
            <input onChange={e => lastNameHander(e)} value={lastName} onBlur={e => blurHandler(e)} name = "lastName" type="text" placeholder="Введите фамилию" />
            {/* Поле отчество */}
            <p></p>
            {(PatronymicDirty && PatronymicError) && <div style={{color:'red'}}>{PatronymicError}</div>}
            <input onChange={e => patronymicHander(e)} value={Patronymic} onBlur={e => blurHandler(e)} name = "patronymic" type="text" placeholder="Введите отчество" />
            {/* Поле почты */}
            <p></p>
            {(emailDirty && emailError) && <div style={{color:'red'}}>{emailError}</div>}
            <input onChange={e => emailHander(e)} value={email} onBlur={e => blurHandler(e)} name = "email" type="text" placeholder="Введите почту" />
            {/* Поле пароля */}
            <p></p>
            {(passwordDirty && passwordError) && <div style={{color:'red'}}>{passwordError}</div>}
            <input onChange={e => passwordHander(e)} value={password} onBlur={e => blurHandler(e)} name = "password" type="text" placeholder="Введите пароль" />
            <button onClick={CreateUsers} disabled={!formValid} type="button">Зарегистрироваться</button>
        </div>
        </form>
        
    );

}