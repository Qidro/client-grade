import { useEffect, useState } from "react"
import { Registration } from "../../data/Registration"
import {User} from "../../types/user";
import { title } from "process";
import Navbars from "../NavigationPanel/Navbar";
import { SetUsers } from "../../services/node";
interface ProductProps{
    product: Registration

}

export function Users()
{
  const [user, setUser] = useState("")


    useEffect( () =>{
      const CreateUsers = async() =>
        {   
      
          setUser(await SetUsers());
          console.log("Нашы данные юзера", user);
        };
        CreateUsers()
    },[]
    )
    
    
    

    return (
        <form className='bg-gray-200'>
            <div> <Navbars /></div>
            <div className="h-screen flex justify-center items-center">
                <div className='w-5/6 h-5/6 p-0 border-solid border-0
            border-white-100 rounded-lg bg-white 2xl:w-5/6 h-5/6 lg:w-5/6 h-5/6 md:w-5/6 h-5/6 sm:w-full'>
                    
                    <h1 className="ml-4 mt-4 text-xl">Пользователи сайта</h1>
                    <div className="text-center">
                    <div>
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th scope="col" className="px-6 py-3">Логин</th>
            <th scope="col" className="px-6 py-3">ФИО</th>
            <th scope="col" className="px-6 py-3">Почта</th>
            <th scope="col" className="px-6 py-3">Роль</th>
            {/* <th scope="col" className="px-6 py-3">Департамент</th> */}
          </tr>
        </thead>
        <tbody>
          {/* {data.map(user => ( */}
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            {/* <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Apple MacBook Pro 17"
                </th> */}
              <td className="px-6 py-4">aga</td>
              <td className="px-6 py-4">Осинцев Павел Алексеевич</td>
              <td className="px-6 py-4">pavel.osincev04@mail.ru</td>
              <td className="px-6 py-4">Админ</td>
            </tr>
          {/* ))} */}
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



