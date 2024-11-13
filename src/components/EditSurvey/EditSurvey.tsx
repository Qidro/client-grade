import { useEffect, useState } from "react"
import { BrowserRouter, Route, Link, useNavigate, useLocation  } from 'react-router-dom';
import { Reg } from "../Registration/Registration";
import { ChangeSurvey, ChangeSurveyAnswer, ChangeSurveyQuestion, CheckUser, CreateSurveys, Editurveys } from "../../services/node";
import Cookies from 'js-cookie';
import Navbars from "../NavigationPanel/Navbar";

export function EditSurvey()
{
    const location = useLocation();
    const IdSurvey = location.state?.variable;


    const [loading, setLoading] = useState(true);
    //перменная для названия опроса и описания
    const [Survey, setSurvey] = useState<{titleSurvey: string; description: string}[]>([]);
    // Храним список элементов формы вопроса
  const [inputFields, setInputFields] = useState<{ id: number; titleQuestion: string; description: string; level: number; stateButton: boolean }[]>([]);
    //список ответов
  const [questions, setQuestions] = useState<{ id: number; idQuestion: number; question: string; comment: string; points: number;  stateButton: boolean }[]>([]);
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
        return [...updatedFields, { id: nextId, titleQuestion: '',description: '', level: 1 , stateButton: true }];
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

   // Функция для обновления значения поля "Левел вопроса"
   const levelInputChange = (id: number, level: number) => {
    setInputFields(inputFields.map(field => (field.id === id ? { ...field, level} : field)));
    console.log(inputFields);
    
  };

  // Функция для обновления значения поля "Описание вопроса"
  const handleInputChangee = (id: number, description: string) => {
    setInputFields(inputFields.map(field => (field.id === id ? { ...field, description} : field)));
    console.log(inputFields);
    
    // setVisible(visibleInputFields.map(field => (field.id === id ? { ...field, value: false } : field)));


    
  };

  const navigate = useNavigate();
  const CreateSurvey = async() =>
    {   
       
        // const posts = [
        //     {login: login, firstName: firstName, lastName: lastName, patronymic:Patronymic, email: email, password:password  }
        //   ];
        let surveyInformation = 
            {   
                Id: IdSurvey,
                title: title,
                description: description,
                idQ: inputFields.map(field => field.id),
                titleQuestion: inputFields.map(field => field.titleQuestion),
                descriptionQuestion: inputFields.map(field => field.description),
                level: inputFields.map(field => field.level),
                idQuestion: questions.map(field => field.idQuestion), 
                question: questions.map(field => field.question),
                comment: questions.map(field => field.comment),
                points: questions.map(field => field.points)
            }
        
        // let question =
        // {
        //     titleQuestion: inputFields.map(field => field.titleQuestion),
        //     description: inputFields.map(field => field.description)

        // }

        // let answers = 
        // {
        //     idQuestion: questions.map(field => field.idQuestion), 
        //     question: questions.map(field => field.question),
        //     comment: questions.map(field => field.comment),
        //     points: questions.map(field => field.points)
        // }

          let mess = await Editurveys(surveyInformation);
          console.log(mess);
          navigate("/home");
          
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
    console.log("id", id, "QId", idQuestion);
    setQuestions(prevFields => {
        
        const updatedFields = prevFields.map(field => (field.id === idQuestion  ? { ...field, stateButton } : field));
        // Добавляем новое поле с инкрементированным id
        return [...updatedFields, {id: nextIdAnswer, idQuestion: id, question: '', comment: '', points: 0, stateButton: true  }];
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

// Функция для обновления значения поля "Ответа"
const handleInputComment = (id: number,  comment: string) => {
    setQuestions(questions.map(field => (field.id === id ? { ...field, comment} : field)));
    console.log(questions);

};

// Функция для обновления значения поля "Баллы"
const handleInputPoint = (id: number,  points: number) => {
    setQuestions(questions.map(field => (field.id === id ? { ...field, points} : field)));
    console.log(questions);

};


//удаление варианта ответа
const deleteAnswer = (id: number) => { 
    if (questions.length > 1) {
        setQuestions(prevQuestions => {
            // Фильтруем вопросы и создаем новый массив без удаляемого элемента
            const newQuestions = prevQuestions.filter(item => item.id !== id);
            const deletedQuestion = prevQuestions.find(item => item.id === id);
            
            // Проверяем, был ли удаленный элемент с stateButton равным true
            if (deletedQuestion && deletedQuestion.stateButton) {
                // Находим индекс элемента с меньшим idQuestion
                const smalleridQuestionIndex = newQuestions.findIndex(item => item.id < deletedQuestion.id);
                
                // Если такой элемент найден, создаем новый объект с обновленным stateButton
                if (smalleridQuestionIndex !== -1) {
                    const updatedSmallerItem = { 
                        ...newQuestions[smalleridQuestionIndex], 
                        stateButton: true 
                    };
                    
                    // Обновляем элемент в новом массиве
                    newQuestions[smalleridQuestionIndex] = updatedSmallerItem;
                }
            }

            return newQuestions;
        });
    }
};

//удаление вопроса
const deleteItem = (id: number) => {
    if (inputFields.length > 1)
    {
        setInputFields((prevFields) => {
            const newFields = [...prevFields];
        
            // Проверяем, есть ли элементы в массиве
            if (newFields.length > 0) {
              // Проверяем последний элемент
              const lastElement = newFields[newFields.length - 1];
        
              // Если последний элемент имеет stateButton === true
              if (lastElement.stateButton === true) {
                // Меняем stateButton предыдущего элемента на true, если он существует
                if (newFields.length > 1) {
                  newFields[newFields.length - 2].stateButton = true;
                }
              }
            }
        
            return newFields;
          });
          setQuestions(prevQuestions => {
            const newQuestions = prevQuestions.filter(item => item.id !== id);
            const deletedQuestion = prevQuestions.find(item => item.id === id);
            
            // Проверяем, был ли удаленный элемент с stateButton равным true
            if (deletedQuestion && deletedQuestion.stateButton) {
                // Находим элемент с меньшим idQuestion
                const smalleridQuestionIndex = newQuestions.findIndex(item => item.idQuestion < deletedQuestion.idQuestion);
                
                // Если такой элемент найден, создаем новый массив с обновленным stateButton
                if (smalleridQuestionIndex !== -1) {
                    const updatedSmallerItem = { ...newQuestions[smalleridQuestionIndex], stateButton: true };
                    newQuestions[smalleridQuestionIndex] = updatedSmallerItem;
                }
            }

            return newQuestions;
        });
          
        const updatedItems = inputFields.filter(item => item.id !== id);
        setInputFields(updatedItems);

    }
    
};

const duplication = (id: number) => 
{
        const newQuestions = questions.filter(item => item.idQuestion !== id);
        const updatedQuestions = newQuestions.map(question => ({
            ...question,
            id: question.id + 1,
            idQuestion: question.idQuestion +1,
          }));
        setQuestions(questions.map(field => ({ ...field, updatedQuestions})));
     
        const newInputFields = inputFields.filter(item => item.id !== id);
        const updatedInputFields = newInputFields.map(fields => ({
            ...fields,
            id: fields.id + 1,
          }));
        setInputFields(inputFields.map(field => (field.id === id ? { ...field, updatedInputFields} : field)));


        

}

//создани епервых строк
useEffect( () =>{
     //редактирование опроса
   const ChangeSurveys = async(id: number) =>
    {   
       
        // const posts = [
        //     {login: login, firstName: firstName, lastName: lastName, patronymic:Patronymic, email: email, password:password  }
        //   ];
        let posts = 
        {
            Id: id
        }
        // Ожидаем выполнения обоих запросов
        const [inputFields, questions, Survey] = await Promise.all([
            ChangeSurveyQuestion(posts),
            ChangeSurveyAnswer(posts),
            ChangeSurvey(posts),
        ]);

        // Обновляем состояния
        setInputFields(inputFields);
        setQuestions(questions);
        setSurvey(Survey);
        // console.log(Survey);
        setTitle(Survey[0].titleSurvey)
        setDescription(Survey[0].description)
        // Устанавливаем nextId после получения данных
        setNextId(inputFields.length > 0 ? inputFields[inputFields.length - 1].id + 1 : 1);
        setNextIdAnswer(questions.length > 0 ? questions[questions.length - 1].id + 1 : 1);
        hui();
        
    };
    const hui = () =>
        {   
            const matches = inputFields.filter(inputField =>
                questions.some(question => question.idQuestion === inputField.id)
            );
            
            if (matches.length > 0) {
                console.log("Да");
            } else {
                console.log("Нет");
            }
            
        };
    
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
    ChangeSurveys(IdSurvey);
    
}
, [])

    return (
        <div>
        {loading ? 
        <div className="loader-container">
            <div className="spinner"></div>
        </div> :
        <form>
            {/* навигационная панель */}
         <div> <Navbars access = {true}/></div>
         {/* отступы от краев и расположение формы */}
            <div className="mt-12 ml-8 h-screen justify-normal items-start">
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
                        className=" ml-8 mt-4 w-3/4 py-2 px-2 text-xl text-gray-900 bg-transparent border-0 border-b-2 border-gray-400 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
                        placeholder="Введи название вопроса"
                    type="text"
                    value={field.titleQuestion}
                    onChange={(e) => handleInputChange(field.id, e.target.value)}        
                         />
                    <input
                                        className=" ml-4 w-28 py-2 px-2 text-xl text-gray-900 bg-transparent border-0 border-b-2 border-gray-400 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                        placeholder="Уровень"
                                        type="number"
                                        value={field.level}
                                        onChange={(e) => levelInputChange(field.id, Number(e.target.value))} />
                         
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
                            <ul className="list-none">
                            {questionMap.idQuestion == field.id  ?<><><>
                                    <li className="ml-12 list-disc"><input
                                        className=" mt-4 w-5/6 py-2 px-2 text-xl text-gray-900 bg-transparent border-0 border-b-2 border-gray-400 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                        placeholder="Введите вариант ответа"
                                        type="text"
                                        value={questionMap.question}
                                        onChange={(e) => handleInputQuestion(questionMap.id, e.target.value)} /><button type="button" onClick={(e) => deleteAnswer(questionMap.id)}><img src="\icon\trash\trash.png" alt="Иконка" width="30" height="30"/></button> </li>
                                    <li className="ml-12 list-disc"><input
                                        className=" mt-4 w-5/6 py-2 px-2 text-xl text-gray-900 bg-transparent border-0 border-b-2 border-gray-400 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                        placeholder="Введите комментарий"
                                        type="text"
                                        value={questionMap.comment}
                                        onChange={(e) => handleInputComment(questionMap.id, e.target.value)} /></li></>
                                    <li className="ml-12 list-disc"> <input
                                        className=" mt-4 w-5/6 py-2 px-2 text-xl text-gray-900 bg-transparent border-0 border-b-2 border-gray-400 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                        placeholder="Введите количество баллов за ответ"
                                        type="number"
                                        value={questionMap.points}
                                        onChange={(e) => handleInputPoint(questionMap.id, Number(e.target.value))} /></li></>
                                        {/* <li> <button className="ml-8 mt-4 col-start-6 bg-red-500  w-64 h-10 text-white rounded-lg" onClick={(e) => deleteAnswer(questionMap.id)} type="button">Удалить ответ</button>
                                         </li> */}
                                         </>   
                                : null}</ul>
                            
                        

                    
                        {questionMap.stateButton ?<button className="ml-8 mt-4 col-start-6 bg-blue-500  w-64 h-10 text-white rounded-lg" onClick={(e) => addInputChange(field.id, questionMap.id, false)} type="button">Добавить вариант ответа</button>: null}
                        </div>
                        
                    ))}


                    <div className="flex justify-end">
                    <button className="mr-4 mb-4 col-start-6 bg-red-500  w-64 h-10 text-white rounded-lg" onClick={(e) => deleteItem(field.id)} type="button">Удалить вопрос</button>
                {field.stateButton ?  <button className="mr-4 mb-4 col-start-6 bg-blue-500  w-64 h-10 text-white rounded-lg" onClick={(e) => addInputField(field.id, false)} type="button">Дублировать вопрос</button>: null}
                {field.stateButton ? <button className="mr-4 mb-4 col-start-6 bg-blue-500  w-64 h-10 text-white rounded-lg" onClick={(e) => addInputField(field.id, false)} type="button">Добавить вопрос</button> : null}
                {!field.stateButton ?  <button className="mr-4 mb-4 col-start-6 bg-blue-500  w-64 h-10 text-white rounded-lg" onClick={(e) => addInputField(field.id, false)} type="button">Дублировать вопрос</button>: null}
                   </div>
                </div>
      ))}
    </div>
    <div className="mt-4 grid grid-cols-6 gap-2 place-items-end">
                <button type="button" className="col-start-5 bg-blue-500 h-10 px-20 py-0 text-white rounded-lg" onClick={CreateSurvey}>Изменить опрос</button>
            </div>
            </div>

            
        </form>}
        </div>
        
    );

}