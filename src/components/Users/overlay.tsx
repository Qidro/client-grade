// src/Overlay.tsx
import React, { useState } from 'react';
import './Overlay.css'; // Импортируем стили

interface OverlayProps {
  isVisible: boolean;
  onClose: () => void;
}

const Overlay: React.FC<OverlayProps>= ({ isVisible, onClose}) => {
  const [jobTitle, setjobTitle] = useState('')
  const [divisions, setDivisions] = useState('')
  
  const [styleButton, setStyleButton] = useState('col-span-2 col-end-9 bg-blue-500 text-white rounded-lg w-full h-10')

  const [styleJogTitle, setStyleJogTitle] = useState('col-span-3 shadow appearance-none border rounded w-full px-1 text-gray-400 leading-tight focus:outline-none focus:shadow-outline')
  const [styleDivisions, setStyleDivisions] = useState('col-span-3 shadow appearance-none border rounded w-full px-1 text-gray-400 leading-tight focus:outline-none focus:shadow-outline')
     
  if (!isVisible) return null;


  // const ClodeOverlay = () =>
  //   {   
  //     isVisible = false;
  //   };
//функция проверки выбора должности

const jogTitleHander = (e: React.ChangeEvent<HTMLSelectElement>) => {
  setjobTitle(e.target.value)
  if(jobTitle === "Выберите должность")
  {
      setStyleJogTitle('col-span-3 shadow appearance-none border rounded w-full px-1 text-gray-400 leading-tight focus:outline-none focus:shadow-outline');
  }
  else{
      setStyleJogTitle('col-span-3 shadow appearance-none border rounded w-full px-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline');
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
          <input type="text" className='px-1 col-span-3 h-6 shadow appearance-none border rounded w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline' />
          
          {/* поле логина */}
          <div className='col-end-6'>Логин</div>
          <input type="text" className='px-1 col-span-3 h-6 shadow appearance-none border rounded w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline' />
          
          {/* поле имени */}
          <div>Имя</div>
          <input type="text" className='px-1 col-span-3 h-6 shadow appearance-none border rounded w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline' />
          
          {/* поле почты */}
          <div className='col-end-6'>Почта</div>
          <input type="text" className='px-1 col-span-3 h-6 shadow appearance-none border rounded w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline' />
          
          {/* поле отчества */}
          <div>Отчество</div>
          <input type="text" className='px-1 col-span-3 h-6 shadow appearance-none border rounded w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline' />
          
          {/* поле пароля */}
          <div className='col-end-6'>Пароль</div>
          <input type="text" className='px-1 col-span-3 h-6 shadow appearance-none border rounded w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline' />

          {/* поле выбора должности */}
          <div className=''>Должность</div>
          <select className={styleJogTitle} onChange={e => jogTitleHander(e)}>
            <option >Выберите должность</option>
            <option >Cотрудник подразделения УГМУ</option>
            <option >Руководитель подразделения УГМУ (АУП)</option>
          </select>
          
           {/* поле выбора подразделения */}
          <div className='col-end-6'>Подразделение</div>
            <select className={styleDivisions} onChange={e => divisionsHander(e)}>
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
          
          <button className={styleButton} type="button">Изменить данные</button>
        </div>

      </div>
    </div>
  );
};

export default Overlay;