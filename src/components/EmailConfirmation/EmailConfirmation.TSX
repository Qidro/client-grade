import { useEffect, useState } from "react"
import { BrowserRouter, Route, Link, useNavigate, useParams  } from 'react-router-dom';
import Navbars from "../NavigationPanel/Navbar";
import { Console } from "console";
import Cookies from "js-cookie";
import { ChangeSurvey, CheckRole, DeleteSurvey, DeleteUser, SetSurveysList } from "../../services/node";
import './loader.css'; // Импортируем стили
import React from "react";

export function Home()
{


    const [surveys, setSurveys] = useState<{ id: number; title: string; description: string}[]>([]);

    const [loading, setLoading] = useState(false);
    const [result, setResult]  = useState(true);
    useEffect ( ()=>{
        const { Token } = useParams();

        setLoading(true);
        const ConFirmEmail = async() =>
        {
            let posts = 
            {
              token: Cookies.get('user')
            }
            setResult(await CheckRole(posts));
        };

        const SetListSurveys = async() =>
            {
               
                setSurveys(await SetSurveysList());
                console.log("Получение массива ", surveys);
            };
        SetListSurveys()
    },[])
    
    const navigate = useNavigate();
   const CreateTest = () =>
   {
    console.log('маршрут перестраивается');
    navigate("/create");
   }

  
  
    return (
        <div>
             {loading ? 
        <div className="loader-container">
            <div className="spinner"></div>
        </div> :
        <div></div>
}
        </div>
    );

}