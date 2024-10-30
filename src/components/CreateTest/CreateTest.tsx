import { useEffect, useState } from "react"
import { BrowserRouter, Route, Link, useNavigate  } from 'react-router-dom';
import { Reg } from "../Registration/Registration";
import { CheckUser, CreateSurveys } from "../../services/node";
import Cookies from 'js-cookie';
import Navbars from "../NavigationPanel/Navbar";

export function CreateTestt()
{
    // Храним список элементов формы вопроса
  const [inputFields, setInputFields] = useState<{ id: number; titleQuestion: string; description: string; stateButton: boolean }[]>([]);
    //список ответов
  const [questions, setQuestions] = useState<{ id: number; IdQuestion: number; question: string; comment: string; points: string;  stateButton: boolean }[]>([]);
  const [nextId, setNextId] = useState(0);

  const [nextIdAnswer, setNextIdAnswer] = useState(0);

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  // Функция для добавления нового поля ввода
  const  addInputField = (id: number, stateButton: boolean) => {
    setInputFields(prevFields => {
        // Обновляем существующее поле, если id совпадает
        const updatedFields = prevFields.map(field => (field.id === id ? { ...field, stateButton } : field));
        
        // Добавляем новое поле с инкрементированным id
        return [...updatedFields, { id: nextId, titleQuestion: '',description: '' , stateButton: true }];
    });
  
    // Обновляем следующий id
    setNextId(prevId => prevId + 1);

    // setInputFields(inputFields.map(field => (field.id === field.id ? { ...field, id: nextId, valueb: false} : field)));
  };


  // Функция для обновления значения поля "Название вопроса"
  const handleInputChange = (id: number, titleQuestion: string) => {
    setInputFields(inputFields.map(field => (field.id === id ? { ...field, titleQuestion} : field)));
    console.log(inputFields);
    
  };

  // Функция для обновления значения поля "Описание вопроса"
  const handleInputChangee = (id: number, description: string) => {
    setInputFields(inputFields.map(field => (field.id === id ? { ...field, description} : field)));
    console.log(inputFields);
    
    // setVisible(visibleInputFields.map(field => (field.id === id ? { ...field, value: false } : field)));


    
  };


  const CreateSurvey = async() =>
    {   
       
        // const posts = [
        //     {login: login, firstName: firstName, lastName: lastName, patronymic:Patronymic, email: email, password:password  }
        //   ];
        let posts = 
            {
                title: title,
                description: description
            }
        console.log("Все прошло успешно");
          let mess = await CreateSurveys(posts);
          console.log(mess);
          
          
    };

    //записывает название опроса
    const checkTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
        
        setTitle(e.target.value)
        };
    
    //записывает описание опроса
    const checkDescription = (e: React.ChangeEvent<HTMLInputElement>) => {
        
        setDescription(e.target.value)
        };

 // Функция для добавления нового поля вопроса
 const  addInputChange = (id: number, idQuestion: number, stateButton: boolean) => {
    setQuestions(prevFields => {
        
        const updatedFields = prevFields.map(field => (field.id === idQuestion ? { ...field, stateButton } : field));
        // Добавляем новое поле с инкрементированным id
        return [...updatedFields, {id: nextIdAnswer, IdQuestion: id, question: '', comment: '', points: '', stateButton: true  }];
    });
    console.log(nextIdAnswer);
    // Обновляем следующий id
    setNextIdAnswer(prevId => prevId + 1);
    
    // setInputFields(inputFields.map(field => (field.id === field.id ? { ...field, id: nextId, valueb: false} : field)));
  };
//при октрытии страницы создает первое поле опроса


// Функция для обновления значения поля "Ответа"
const handleInputQuestion = (id: number,  question: string) => {
    setQuestions(questions.map(field => (field.id === id ? { ...field, question} : field)));
    console.log(questions);

};
useEffect( () =>{
        
    setInputFields([...inputFields, { id: nextId, titleQuestion: '', description: '', stateButton: true }]);
    setQuestions([...questions, {id: nextIdAnswer, IdQuestion: nextId, question: '', comment: '', points: '' , stateButton: true }]);
    setNextId(nextId + 1);
    setNextIdAnswer(nextIdAnswer + 1);

}
, [])

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
                        <input type="text" name="title" value={title} onChange={e => checkTitle(e)} className=" ml-8 mt-4 w-5/6 py-2 px-2 text-xl text-gray-900 bg-transparent border-0 border-b-2 border-gray-400 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Введи название теста"  /> 
                    </div>
                    <div className="group grid grid-cols-8">
                        <div className="relative z-0 w-full mb-5 col-span-5">
                        <input type="text" name="description"  value={description} onChange={e => checkDescription(e)} className=" ml-8 w-5/6 py-2 px-2 text-xl text-gray-900 bg-transparent border-0 border-b-2 border-gray-400 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Введи описание теста"  /> 
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
                {/* <div className='mt-16 w-5/6 h-40 p-0 border-solid border-0
            border-white-100 rounded-lg bg-white'>
                    
                    <div className="relative z-0 w-full mb-5 group">
                        <input type="text" name="question" id="question" className=" ml-8 mt-4 w-5/6 py-2 px-2 text-xl text-gray-900 bg-transparent border-0 border-b-2 border-gray-400 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Введи название вопроса" required /> 
                    </div>
                    <div className="group grid grid-cols-8">
                        <div className="relative z-0 w-full mb-5 col-span-5">
                        <input type="text" name="option" id="option" className=" ml-8 w-5/6 py-2 px-2 text-xl text-gray-900 bg-transparent border-0 border-b-2 border-gray-400 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="Введи описание теста" required /> 
                        </div>                  
                        </div>
                          
                    </div> */}
                {/* тестовая штука */}
                <div>
 
      {/* форма вопроса */}
            {inputFields.map(field => (
                <div key={field.id} className='mt-16 w-5/6 h-fit p-0 border-solid border-0
                border-white-100 rounded-lg bg-white'>
                    <div className="relative z-0 w-full mb-5 group">
                        <input
                        className=" ml-8 mt-4 w-5/6 py-2 px-2 text-xl text-gray-900 bg-transparent border-0 border-b-2 border-gray-400 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
                        placeholder="Введи название вопроса"
                    type="text"
                    value={field.titleQuestion}
                    onChange={(e) => handleInputChange(field.id, e.target.value)}        
                         />
                    </div>

                    <div className="relative z-0 w-full mb-5 group">
                        <input
                        className=" ml-8 mt-4 w-5/6 py-2 px-2 text-xl text-gray-900 bg-transparent border-0 border-b-2 border-gray-400 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
                        placeholder="Введи описание вопроса"
                    type="text"
                    value={field.description}
                    onChange={(e) => handleInputChangee(field.id, e.target.value)}        
                         />
                    </div>
                    {/* поля ответа на вопрос*/}
                    {questions.map(questionMap => (

                        
                        <div key={questionMap.id} className="relative z-0 w-full mb-5 group">
                            {questionMap.IdQuestion == field.id  ?<input
                            className=" ml-8 mt-4 w-5/6 py-2 px-2 text-xl text-gray-900 bg-transparent border-0 border-b-2 border-gray-400 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
                            placeholder="Введите вариант ответа"
                            type="text"
                            value={questionMap.question}
                            onChange={(e) => handleInputQuestion(questionMap.id, e.target.value)}        
                                />: null}
                        

                    
                        {questionMap.stateButton ?<button className="mr-4 mb-4 col-start-6 bg-blue-500  w-64 h-10 text-white rounded-lg" onClick={(e) => addInputChange(field.id, questionMap.id, false)} type="button">Добавить поле ввода</button>: null}
                        </div>
                        
                    ))}


                    <div className="grid grid-cols-6 gap-2 place-items-end">
                {field.stateButton ? <button className="mr-4 mb-4 col-start-6 bg-blue-500  w-64 h-10 text-white rounded-lg" onClick={(e) => addInputField(field.id, false)} type="button">Добавить поле ввода</button> : null}
                    </div>
                </div>
      ))}
    </div>
    <div className="mt-4 grid grid-cols-6 gap-2 place-items-end">
                <button className="col-start-5 bg-blue-500 h-10 px-20 py-0 text-white rounded-lg" onClick={CreateSurvey}>Сохранить тест</button>
            </div>
            </div>

            
        </form>
        
    );

}