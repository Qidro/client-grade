import { useEffect, useState } from "react"
import { BrowserRouter, Route, Link, useNavigate  } from 'react-router-dom';
import { Reg } from "../Registration/Registration";
import { CheckUser } from "../../services/node";
import Cookies from 'js-cookie';
import Navbars from "../NavigationPanel/Navbar";

export function CreateTestt()
{
    // Храним список элементов
  const [inputFields, setInputFields] = useState<{ id: number; value: string }[]>([]);
  const [visibleInputFields, setVisibleInputFieldsFields] = useState<{ id: number; value: string }[]>([]);
  const [nextId, setNextId] = useState(0);

  // Функция для добавления нового поля ввода
  const addInputField = () => {
    setInputFields([...inputFields, { id: nextId, value: '' }]);
    setNextId(nextId + 1);
  };

  // Функция для обновления значения поля ввода
  const handleInputChange = (id: number, value: string) => {
    setInputFields(inputFields.map(field => (field.id === id ? { ...field, value } : field)));
    setVisibleInputFieldsFields(inputFields.map(field => (field.id === id ? { ...field, value:"false" } : field)));
  };
    

    return (
        <form>
            {/* навигационная панель */}
         <div> <Navbars /></div>
         {/* отступы от краев и расположение формы */}
            <div className="mt-16 ml-8 h-screen justify-normal items-start">
                {/* форма отвечающая за описание и название теста */}
                <div className='w-1/2 h-40 p-0 border-solid border-0
            border-white-100 rounded-lg bg-white'>
                    
                    <div className="relative z-0 w-full mb-5 group">
                        <input type="text" name="floating_email" id="floating_email" className=" ml-8 mt-4 w-5/6 py-2 px-2 text-xl text-gray-900 bg-transparent border-0 border-b-2 border-gray-400 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Введи название теста" required /> 
                    </div>
                    <div className="group grid grid-cols-8">
                        <div className="relative z-0 w-full mb-5 col-span-5">
                        <input type="text" name="floating_email" id="floating_email" className=" ml-8 w-5/6 py-2 px-2 text-xl text-gray-900 bg-transparent border-0 border-b-2 border-gray-400 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Введи описание теста" required /> 
                        </div>
                        <div className="col-span-3 mt-2">
                        <input type="file" name="" id="" className="block w-full text-sm text-gray-500
            file:me-4 file:py-2 file:px-4
            file:rounded-lg file:border-0
            file:text-sm file:font-semibold
            file:bg-blue-600 file:text-white
            hover:file:bg-blue-700
            file:disabled:opacity-50 file:disabled:pointer-events-none
            dark:text-neutral-500
            dark:file:bg-blue-500
            dark:hover:file:bg-blue-400"/>
                        </div>
                            
                    </div>
                    
                </div>
                {/* новая форма */}
                <div className='mt-16 w-5/6 h-40 p-0 border-solid border-0
            border-white-100 rounded-lg bg-white'>
                    
                    <div className="relative z-0 w-full mb-5 group">
                        <input type="text" name="question" id="question" className=" ml-8 mt-4 w-5/6 py-2 px-2 text-xl text-gray-900 bg-transparent border-0 border-b-2 border-gray-400 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Введи название вопроса" required /> 
                    </div>
                    <div className="group grid grid-cols-8">
                        <div className="relative z-0 w-full mb-5 col-span-5">
                        <input type="text" name="option" id="option" className=" ml-8 w-5/6 py-2 px-2 text-xl text-gray-900 bg-transparent border-0 border-b-2 border-gray-400 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Введи описание теста" required /> 
                        </div>                  
                        </div>
                          
                    </div>
                {/* тестовая штука */}
                <div>
      <button onClick={addInputField}>Добавить поле ввода</button>
      
            {inputFields.map(field => (
                <div key={field.id} className='mt-16 w-5/6 h-40 p-0 border-solid border-0
                border-white-100 rounded-lg bg-white'>
                    <div className="relative z-0 w-full mb-5 group">
                        <input
                        className=" ml-8 mt-4 w-5/6 py-2 px-2 text-xl text-gray-900 bg-transparent border-0 border-b-2 border-gray-400 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
                        placeholder="Введи название вопроса"
                    type="text"
                    value={field.value}
                    onChange={(e) => handleInputChange(field.id, e.target.value)
                        
                    }
                />
                </div>
                
                </div>
      ))}
    </div>
    <div className="grid grid-cols-6 gap-2 place-items-end">
                <button className="col-start-5 bg-blue-500 px-20 py-2 text-white rounded-lg">Сохранить тест</button>
            </div>
            </div>

            
        </form>
        
    );

}