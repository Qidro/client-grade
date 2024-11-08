import { useEffect, useState } from "react"
import { CreateUser } from "../../services/nodes";
import { BrowserRouter, Route, Link, useNavigate  } from 'react-router-dom';
import Navbars from "../NavigationPanel/Navbar";
import { Console } from "console";
import Cookies from "js-cookie";
import { CheckRole, SetSurveysList } from "../../services/node";
import './loader.css'; // Импортируем стили

export function Home()
{


    const [surveys, setSurveys] = useState<{ id: number; title: string; description: string}[]>([]);

    const [loading, setLoading] = useState(false);
    const [result, setResult]  = useState(true);
    useEffect ( ()=>{
//
        setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1);
        //проверка пользователя на роль, пределяющая получит ли пользователь создавать тесты
        const CheckUserRole = async() =>
        {
            let posts = 
            {
              token: Cookies.get('user')
            }
            setResult(await CheckRole(posts));
        // console.log("Значение"+result);
        };

        const SetListSurveys = async() =>
            {
               
                setSurveys(await SetSurveysList());
                console.log("Получение массива ", surveys);
            // console.log("Значение"+result);
            };
        SetListSurveys()
        CheckUserRole()
    },[])
    const navigate = useNavigate();
   const CreateTest = () =>
   {
    console.log('маршрут перестраивается');
    navigate("/create");
   }
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
        <div>
             {loading ? 
        <div className="loader-container">
            <div className="spinner"></div>
        </div> :
        <form className='bg-gray-200'>
            {/*вывод навиг. панель на экран   */}
            <div> <Navbars  access = {result}/></div>
            <div className="h-screen flex justify-center items-center">
                <div className='overflow-x-auto w-5/6 h-5/6 p-0 border-solid border-0
            border-white-100 rounded-lg bg-white 2xl:w-5/6 h-5/6 lg:w-5/6 h-5/6 md:w-5/6 h-5/6 sm:w-full'>
                    <div className = "pb-4 flex justify-center items-center"><img  src="ugmu-logo.png" alt="неее" width={180} height={180}/></div>
                    <div className="text-center">
                        <h1 className="text-xl">Тип главная страницаа</h1>
                        {/* Поле логина */}
                        {/* {(loginDirty && loginError) && <div style={{color:'red'}}>{loginError}</div>} */}
                        
                    </div>
                    {/* grid grid-cols-5 gap-4 gap-x-0 place-items-start */}
           <div   className="grid grid-cols-5 gap-4 gap-x-0 place-items-start ">
           {surveys.map(item => (
                <div key={item.id}  className='ml-8 w-64 h-80 p-0 border-solid border-2
                     border-slate-950 rounded-lg bg-white '> 
                <div className="flex justify-center mt-2"><img src="\icon\videoPreview.png" alt="" width="225" height="200" /></div>
                <div className="ml-2 font-bold">{item.title}</div>
                <div className="ml-2 font-semibold">{item.description}</div>
                <div className="flex justify-end"> <button  type="button" className=" bg-blue-500  w-32 h-10 text-white rounded-lg">Пройти опрос</button></div>
           
            </div>
             ))}
              { result ? <button  onClick={CreateTest} type="button"><div className='ml-8 w-64 h-80 p-0 border-dashed border-2
   border-gray-600 rounded-lg bg-white 2xl:ml-8 lg:ml-40 md:ml-8 sm:ml-8' ><img className="mt-16 opacity-75" src="plus1.png" alt="my image" width={300} height={300} /></div></button>: null }
       </div>
              
            



                 

                
                </div>
            </div>
        </form>
}
        </div>
    );

}