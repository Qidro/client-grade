import { useEffect, useState } from "react"
import { Registration } from "../../data/Registration"
import {User} from "../../types/user";
import { title } from "process";
import Navbars from "../NavigationPanel/Navbar";
import { DeleteUser, SetUsers } from "../../services/node";
import Overlay from "./overlay";
import SearchPopup from "./Search";

//интерфейс данных которые будут приняты от сервера и выведены на форму
interface DataItem {
  id: number;
  login: string;
  fullName: string;
  email: string;
  confirmedEmail: boolean;
  divisions: string;
  jobTitle: string;
  role: string;
}

export function Users()
{
  const [loading, setLoading] = useState(true);

  const [user, setUser] = useState<DataItem[]>([]);

  //состояния, которые будут привязаны к определенному пользователю и отправлены в overlay
  const [Id, setId] = useState(0);
  const [Login, setLogin] = useState("");
  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [patronymic, setpatronymic] = useState("");
  const [Email, setEmail] = useState("");
  const [Role, setRole]= useState(false);
  const [Divisions, setDivisions] = useState("");
  const [JobTitle, setJobTitle] = useState("");

  //получение данных юзеров
    useEffect( () =>{
      setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);
      const UserSet = async() =>
        {   
      

          setUser(await SetUsers());
        };
        UserSet()
    },[]
    )
    useEffect(() => {
      console.log("Нашы данные юзера", user);
  }, [user]);
    
  //удаление юзера из БД
  const DeleteUsers = async(id: number) =>
    {   
       
        // const posts = [
        //     {login: login, firstName: firstName, lastName: lastName, patronymic:Patronymic, email: email, password:password  }
        //   ];
        let posts = 
            {
                Id: id
            }
        console.log("Все прошло успешно");
          await DeleteUser(posts);
          window.location.reload();
    };
    const [isOverlayVisible, setOverlayVisible] = useState(false);

    //состяние видимости формы overlay изменяется
    const CheckParamUsers = () =>
      {   


        setOverlayVisible(!isOverlayVisible);
      };

      //получение данных о определенном пользователи
    const CheckParamUser = (id: number, login: string, fullName: string, email: string, role: string, divisions: string, jobTitle: string) =>
      {   
        setId(id);
        setLogin(login);
        var last = fullName.split(' ');
        setFirstName(last[1]);
        setLastName(last[0]);
        setpatronymic(last[2]);
        setEmail(email);
        setDivisions(divisions);
        setJobTitle(jobTitle);

        if (role == "Администратор")
        {
          setRole(true);
        }
        else{
          setRole(false);
        }
        
        setOverlayVisible(!isOverlayVisible);
      };
    
    return (
      <div>
        {loading ? 
        <div className="loader-container">
            <div className="spinner"></div>
        </div> :
        <form className='bg-gray-200'>
            <div> <Navbars access = {true}/></div>
            <div className="h-screen flex justify-center items-center">
                <div className='overflow-x-auto whitespace-nowrap w-5/6 h-5/6 p-0 border-solid border-0
            border-white-100 rounded-lg bg-white 2xl:w-5/6 h-5/6 lg:w-5/6 h-5/6 md:w-5/6 h-5/6 sm:w-full'>
                    {/* отправка данных о пользователи и видимости в функцию overlay */}
                    <Overlay isVisible={isOverlayVisible} onClose={CheckParamUsers} Id={Id} Login={Login} FirstName={FirstName} LastName={LastName} patronymic={patronymic} Email={Email} Role={Role} Divisions={Divisions} JobTitle={JobTitle}></Overlay>
                    <h1 className="ml-4 mt-4 text-xl">Пользователи сайта</h1>
                    <div className="text-center">
                    <div>
      <table className="mt-4 w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th scope="col" className="px-6 py-3">
              <ul className='flex md:flex-row flex-col'>Логин <SearchPopup  user={user} setUser={setUser} request="Login"/></ul> 
             </th>
            <th scope="col" className="px-6 py-3"><ul className='flex md:flex-row flex-col'>ФИО <SearchPopup  user={user} setUser={setUser}  request="FullName"/></ul>  </th>
            <th scope="col" className="px-6 py-3"><ul className='flex md:flex-row flex-col'>Почта <SearchPopup  user={user} setUser={setUser} request="Email"/></ul> </th>
            <th scope="col" className="px-6 py-3">Подверждение почты</th>
            <th scope="col" className="px-6 py-3">Должность</th>
            <th scope="col" className="px-6 py-3">Подразделение</th>
            <th scope="col" className="px-6 py-3">Роль</th>
            <th scope="col" className="px-4 py-3"></th>
            <th scope="col" className="px-6 py-3"></th>
            {/* <th scope="col" className="px-6 py-3">Департамент</th> */}
          </tr>
        </thead>
        <tbody>
          {/* {data.map(user => ( */}
            {/* <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"> */}

              {/* <td className="px-6 py-4">aga</td>
              <td className="px-6 py-4">Осинцев Павел Алексеевич</td>
              <td className="px-6 py-4">pavel.osincev04@mail.ru</td>
              <td className="px-6 py-4">Админ</td>
            </tr> */}
          {/* ))} */}

          {/* вывод данных пользователей в форму */}
          {user.map(item => (
          <tr key={item.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <td className="px-6 py-4">{item.login}</td>
            <td className="px-6 py-4">{item.fullName}</td>
            <td className="px-6 py-4">{item.email}</td>
            <td className="px-6 py-4">{item.confirmedEmail.toString()}</td>
            <td className="px-6 py-4">{item.divisions}</td>
            <td className="px-6 py-4">{item.jobTitle}</td>
            <td className="px-6 py-4">{item.role}</td>
            <td className=""><button type="button" onClick={(e) => CheckParamUser(item.id, item.login, item.fullName, item.email, item.role ,item.divisions,item.jobTitle )}><img src="\icon\pencil\pencil.png" alt="Иконка" width="25" height="25"/></button></td>
            <td className=""><button type="button" onClick={(e) => DeleteUsers(item.id)}><img src="\icon\trash\trash.png" alt="Иконка" width="30" height="30"/></button></td>
          </tr>
        ))}
        </tbody>
      </table>
    </div>
                        {/* Поле логина */}
                        
                    </div>
                </div>
            </div>
        </form>}  
        </div>
    );

}



