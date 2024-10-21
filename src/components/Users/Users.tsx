import { useEffect, useState } from "react"
import { Registration } from "../../data/Registration"
import {User} from "../../types/user";
import { title } from "process";
import Navbars from "../NavigationPanel/Navbar";
import { DeleteUser, SetUsers } from "../../services/node";
import Overlay from "./overlay";

interface DataItem {
  id: number;
  login: string;
  fullName: string;
  email: string;
  confirmedEmail: boolean;
  divisions: string;
  jogTitle: string;
  role: string;
}

export function Users()
{
  const [user, setUser] = useState<DataItem[]>([]);


    useEffect( () =>{
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
    const CheckParamUser = () =>
      {   
        setOverlayVisible(!isOverlayVisible);
      };
    
    return (
        <form className='bg-gray-200'>
            <div> <Navbars /></div>
            <div className="h-screen flex justify-center items-center">
                <div className='overflow-x-auto whitespace-nowrap w-5/6 h-5/6 p-0 border-solid border-0
            border-white-100 rounded-lg bg-white 2xl:w-5/6 h-5/6 lg:w-5/6 h-5/6 md:w-5/6 h-5/6 sm:w-full'>

                    <Overlay isVisible={isOverlayVisible} onClose={CheckParamUser}></Overlay>

                    <h1 className="ml-4 mt-4 text-xl">Пользователи сайта</h1>
                    <div className="text-center">
                    <div>
      <table className="mt-4 w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th scope="col" className="px-6 py-3">Логин</th>
            <th scope="col" className="px-6 py-3">ФИО</th>
            <th scope="col" className="px-6 py-3">Почта</th>
            <th scope="col" className="px-6 py-3">Подверждение почты</th>
            <th scope="col" className="px-6 py-3">Роль</th>
            <th scope="col" className="px-6 py-3">Подразделение</th>
            <th scope="col" className="px-6 py-3">Должность</th>
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
          {user.map(item => (
          <tr key={item.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <td className="px-6 py-4">{item.login}</td>
            <td className="px-6 py-4">{item.fullName}</td>
            <td className="px-6 py-4">{item.email}</td>
            <td className="px-6 py-4">{item.confirmedEmail.toString()}</td>
            <td className="px-6 py-4">{item.divisions}</td>
            <td className="px-6 py-4">{item.jogTitle}</td>
            <td className="px-6 py-4">{item.role}</td>
            <td className=""><button type="button" onClick={(e) => CheckParamUser()}><img src="\icon\pencil\pencil.png" alt="Иконка" width="25" height="25"/></button></td>
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
        </form>  
    );

}



