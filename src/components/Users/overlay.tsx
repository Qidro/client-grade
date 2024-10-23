// src/Overlay.tsx
import React, { useEffect, useState } from 'react';
import './Overlay.css'; // Импортируем стили

interface OverlayProps {
  isVisible: boolean;
  onClose: () => void;

  Login: string;
  FirstName : string;
  LastName : string;
  patronymic : string;
  Email : string;
  Divisions: string;
  JobTitle: string;
}

const Overlay: React.FC<OverlayProps>= ({ isVisible, onClose, Login, FirstName, LastName, patronymic, Email, Divisions, JobTitle }) => {
  const [jobTitle, setjobTitle] = useState('')
  const [divisions, setDivisions] = useState('')
  const [message, setMessage] = useState('');
  const [styleButton, setStyleButton] = useState('col-span-2 col-end-9 bg-blue-500 text-white rounded-lg w-full h-10')
  console.log(Login,FirstName, LastName, patronymic, Email );
  const [styleJobTitle, setStyleJobTitle] = useState('col-span-3 shadow appearance-none border rounded w-full px-1 text-gray-400 leading-tight focus:outline-none focus:shadow-outline')
  const [styleDivisions, setStyleDivisions] = useState('col-span-3 shadow appearance-none border rounded w-full px-1 text-gray-400 leading-tight focus:outline-none focus:shadow-outline')
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

    const [StyleLogin, setStyleLogin] = useState('px-1 col-span-3 h-6 shadow appearance-none border rounded w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline')
    const [StyleFirstName, setStyleFirstName] = useState('px-1 col-span-3 h-6 shadow appearance-none border rounded w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline')
    const [StyleLastName, setStyleLastName] = useState('px-1 col-span-3 h-6 shadow appearance-none border rounded w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline')
    const [StylePatronymic, setStylePatronymic] = useState('px-1 col-span-3 h-6 shadow appearance-none border rounded w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline')
    const [StyleEmail, setStyleEmail] = useState('px-1 col-span-3 h-6 shadow appearance-none border rounded w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline')
    const [StylePassword, setStylePassword] = useState('px-1 col-span-3 h-6 shadow appearance-none border rounded w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline')

    useEffect( () =>{
      const UserParse = () =>
        {   
          setLogin(Login);
          setFirstName(FirstName);
          setLastName(LastName);
          setPatronymic(patronymic);
          setEmail(Email);
          setDivisions(Divisions);
          setjobTitle(JobTitle);
          
        };
        UserParse()
    },[isVisible]
    )

    //функция отвечающая за видимость кнопки по состоянию веденных полей 
useEffect( () =>{
  if(loginError || firstNameError || lastNameError || PatronymicError || emailError || passwordError || jobTitle === "Выберите должность" || jobTitle === "" || divisions === "Выберите подразделение" || divisions === "")
  {
      setFormValid(false)
      setStyleButton('col-span-2 col-end-9 bg-blue-300 text-white rounded-lg w-full h-10')
  }
  else{
      setFormValid(true)
      setStyleButton('col-span-2 col-end-9 bg-blue-500 text-white rounded-lg w-full h-10')
  }
}
)
  if (!isVisible) return null;

  // функция проверки логина
  const loginHander = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage("");
    setLogin(e.target.value)
    if(e.target.value.length < 3){
        setLoginError('Логин меньше 3 символов')
        setStyleLogin('border-2 border-red-500 px-1 col-span-3 h-6 shadow appearance-none border rounded w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline')
    }else if(e.target.value.length > 15){
        setLoginError('Логин больше 15 символов')
        setStyleLogin('border-2 border-red-500 px-1 col-span-3 h-6 shadow appearance-none border rounded w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline')
    }else if(!e.target.value){
        setLoginError('Логин не может быть пустым')
        setStyleLogin('border-2 border-red-500 px-1 col-span-3 h-6 shadow appearance-none border rounded w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline')
    }
    else{
      setStyleLogin('px-1 col-span-3 h-6 shadow appearance-none border rounded w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline')
      setLoginError('')
    }
}

//функция проверки имени
const firstNameHander = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage("");
    setFirstName(e.target.value)
    if(e.target.value.length < 3){
        setFirstNameError('Имя меньше 3 символов')
        setStyleFirstName('border-2 border-red-500 px-1 col-span-3 h-6 shadow appearance-none border rounded w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline')
    }else if(!e.target.value){
      setStyleFirstName('border-2 border-red-500 px-1 col-span-3 h-6 shadow appearance-none border rounded w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline')
        setFirstNameError('Имя не может быть пустым')
    }
    else{
      setStyleFirstName('px-1 col-span-3 h-6 shadow appearance-none border rounded w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline')
        setFirstNameError('')
    }
}

//функция проверки Фамилии
const lastNameHander = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage("");
    setLastName(e.target.value)
    if(e.target.value.length < 5){
      setStyleLastName('border-2 border-red-500 px-1 col-span-3 h-6 shadow appearance-none border rounded w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline')
        setLastNameError('Фамилия меньше 5 символов')
    }else if(!e.target.value){
      setStyleLastName('border-2 border-red-500 px-1 col-span-3 h-6 shadow appearance-none border rounded w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline')
        setLastNameError('Фамилия не может быть пустым')
    }
    else{
        setLastNameError('')
        setStyleLastName('px-1 col-span-3 h-6 shadow appearance-none border rounded w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline')
    }
}

//функция проверки Отчества
const patronymicHander = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage("");
    setPatronymic(e.target.value)
    if(e.target.value.length < 5){
        setPatronymicError('Отчество меньше 5 символов')
        setStylePatronymic('border-2 border-red-500 px-1 col-span-3 h-6 shadow appearance-none border rounded w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline')
    }else if(!e.target.value){
        setPatronymicError('Отчество не может быть пустым')
        setStylePatronymic('border-2 border-red-500 px-1 col-span-3 h-6 shadow appearance-none border rounded w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline')
    }
    else{
        setPatronymicError('')
        setStylePatronymic('px-1 col-span-3 h-6 shadow appearance-none border rounded w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline')
    }
}

//функция проверки email
const emailHander = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage("");
    setEmail(e.target.value)
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(!re.test(String(e.target.value).toLocaleLowerCase())){
        setEmailError('Некорректный email')
        setStyleEmail('border-2 border-red-500 px-1 col-span-3 h-6 shadow appearance-none border rounded w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline')
    }else{
        setEmailError('')
        setStyleEmail('px-1 col-span-3 h-6 shadow appearance-none border rounded w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline')
    }
}



//функция проверки пароля
const passwordHander = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage("");
    setPassword(e.target.value)
    if(e.target.value.length == 0 )
    {
        setPasswordError('')
        setStylePassword('px-1 col-span-3 h-6 shadow appearance-none border rounded w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline')
    }else if(!e.target.value)
    {
        setPasswordError('Некорректный пароль')
        setStylePassword('border-2 border-red-500 px-1 col-span-3 h-6 shadow appearance-none border rounded w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline')
    }else if(e.target.value.length < 8){
      setPasswordError('Некорректный пароль. Пароль должен иметь более 7 символов')
      setStylePassword('border-2 border-red-500 px-1 col-span-3 h-6 shadow appearance-none border rounded w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline')
      }
    else{
        setPasswordError('')
        setStylePassword('px-1 col-span-3 h-6 shadow appearance-none border rounded w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline')
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


  // const ClodeOverlay = () =>
  //   {   
  //     isVisible = false;
  //   };
//функция проверки выбора должности

const jobTitleHander = (e: React.ChangeEvent<HTMLSelectElement>) => {
  setjobTitle(e.target.value)
  if(jobTitle === "Выберите должность")
  {
      setStyleJobTitle('col-span-3 shadow appearance-none border rounded w-full px-1 text-gray-400 leading-tight focus:outline-none focus:shadow-outline');
  }
  else{
      setStyleJobTitle('col-span-3 shadow appearance-none border rounded w-full px-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline');
  }
}
//функция проверки выбора подразделения
const divisionsHander = (e: React.ChangeEvent<HTMLSelectElement>) => {
  setDivisions(e.target.value)
  if(jobTitle === "Выберите подразделение")
  {
      setStyleDivisions('col-span-3 shadow appearance-none border rounded w-full px-1 text-gray-400 leading-tight focus:outline-none focus:shadow-outline');
  }
  else{
      setStyleDivisions('col-span-3 shadow appearance-none border rounded w-full px-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline');
  }
} 
  return (
    <div className="overlay" >
      <div className="overlay-content w-3/5 h-2/5">
        {/* название формы и кнопка закрытия этой формы */}
        <div className='flow-root'>
          <div className='float-left font-medium'>Редактирование даных юзера</div>
          <button className='float-right' type="button" onClick={onClose}><img src="\icon\close\close.png" alt="Иконка" width="25" height="25"/></button>
        </div>
        {/* содержимое редактирования определенного пользователя */}
        <div className='mt-4 grid grid-cols-8 gap-4'>
          {/* поле фамилии */}
          <div>Фамилия</div>
          <input className={StyleLastName} onChange={e => lastNameHander(e)} value={lastName} onBlur={e => blurHandler(e)} name = "lastName" type="text"/>
          {/* border-2 border-red-500 px-1 col-span-3 h-6 shadow appearance-none border rounded w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline */}
          {/* поле логина */}
          <div className='col-end-6'>Логин</div>
          <input className={StyleLogin} onChange={e => loginHander(e)} value={login} onBlur={e => blurHandler(e)} name = "login" type="text"/>
          
          {/* поле имени */}
          <div>Имя</div>
          <input  className={StyleFirstName} onChange={e => firstNameHander(e)} value={firstName} onBlur={e => blurHandler(e)} name = "firstName" type="text"/>
          
          {/* поле почты */}
          <div className='col-end-6'>Почта</div>
          <input className={StyleEmail} onChange={e => emailHander(e)} value={email} onBlur={e => blurHandler(e)} name = "email" type="text" />
          
          {/* поле отчества */}
          <div>Отчество</div>
          <input className={StylePatronymic} onChange={e => patronymicHander(e)} value={Patronymic} onBlur={e => blurHandler(e)} name = "patronymic" type="text"/>
          
          {/* поле пароля */}
          <div className='col-end-6'>Пароль</div>
          <input className={StylePassword} onChange={e => passwordHander(e)} value={password} onBlur={e => blurHandler(e)} name = "password" type="text" />

          {/* поле выбора должности */}
          <div className=''>Должность</div>
          <select className={styleJobTitle} onChange={e => jobTitleHander(e)} value={jobTitle}>
            <option >Выберите должность</option>
            <option >Cотрудник подразделения УГМУ</option>
            <option >Руководитель подразделения УГМУ (АУП)</option>
          </select>
          
           {/* поле выбора подразделения */}
          <div className='col-end-6'>Подразделение</div>
            <select className={styleDivisions} onChange={e => divisionsHander(e)} value={divisions}>
              <option >Выберите подразделение</option>
              <option >Ректорат</option>
              <option >Управление/отдел/институт</option>
            </select>
          
          {/* редактировании роли пользователя */}
          <label className="col-span-2 relative flex items-center mb-5 cursor-pointer">
          <input type="checkbox" value="" className="sr-only peer"/>
          <div className="w-9 h-5 bg-gray-200 hover:bg-gray-300 peer-focus:outline-none  rounded-full peer transition-all ease-in-out duration-500 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600 hover:peer-checked:bg-blue-700 "></div>
          <span className="ml-3 text-sm font-medium text-gray-700 ">Администратор</span>
          </label>

          <button className={styleButton} disabled={!formValid} type="button">Изменить данные</button>
        </div>

      </div>
    </div>
  );
};

export default Overlay;