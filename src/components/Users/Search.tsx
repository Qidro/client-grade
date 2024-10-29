// src/SearchPopup.js
import React, { useState } from 'react';
import { SearchUser, SetUsers } from '../../services/node';
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
  
const SearchPopup = ({ user, setUser, request }: { user: DataItem[]; setUser: React.Dispatch<React.SetStateAction<DataItem[]>>; request: string }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');

    const togglePopup = () => {
        setIsOpen(!isOpen);
    };

    //получаем значение запроса
    const handleSearchChange = (event: any) => {
        setSearchTerm(event.target.value);
    };

    const UserSet = async() =>
        {   
          setUser(await SetUsers());
          setSearchTerm(''); // Очистить поле после отправки
          togglePopup(); // Закрыть форму после отправки
        };

    const handleSearchSubmit = async() => {
        console.log('Наш user', user);
        console.log('Наш запрос ', request);
        console.log('Отправленные значения', searchTerm);
        
        let posts = 
        {
            titleRequst: request,
            search: searchTerm
        }
        if (searchTerm.length >0)
        {
            setUser(await SearchUser(posts));
            //await SearchUser(posts);
            setSearchTerm(''); // Очистить поле после отправки
            togglePopup(); // Закрыть форму после отправки
        }

        
    };

    return (
        <div className=''>
            <button onClick={togglePopup} type="button"><img src="\icon\search\search.png" alt="Иконка" width="20" height="20"/></button>
            {isOpen && (
                <div className="absolute">
                    <div  className='border-solid rounded-lg border-2 px-2 py-2 border-gray-300'>
                        <input
                            type=""
                            value={searchTerm}
                            onChange={handleSearchChange}
                            placeholder="Введите запрос..."
                            className='shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                        />
                        <button type="button" onClick={handleSearchSubmit} className='ml-2'>Найти</button>
                        <div><button type="button" className='mt-1 bg-blue-500 text-white rounded-lg w-full h-6' onClick={UserSet}>Отчистить</button></div>
                        
                    </div>
                </div>
            )}
        </div>
    );
};

export default SearchPopup;