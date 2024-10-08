//тесовый файл TS


import axios from "axios"

export const feact = async () => {
   try{
    var respone = await axios.get("http://localhost:5281/Registration");
    console.log(respone);
    }
   catch(e)
   {
    console.error(e);   
   }
}

// export const CreateUser = async (posts) => {
//    try{
//       console.log("Массив: ", posts);
//     var respone = await axios.post("http://localhost:5281/Registration", posts);
//     console.log(respone);
//     }
//    catch(e)
//    {
//     console.error("Бывает:", e);
//    }
// }

//функция по создани юзера
export const CreateUser = async (posts: any) => {
   try{
      console.log("Массив: ", posts);
      const respone = await fetch("http://localhost:5281/Registration", {
      method: "POST",
      headers:{
         "content-type": "application/json",
      },
      body: JSON.stringify(posts),
   })
   const data = await respone.text();
   return(data);
    }
   catch(e)
   {
    console.error("Бывает:", e);
    return("Ошибка регистрации");
   }
}

//функция по проверки юзера
export const CheckUser = async (posts: any) => {
   try{
      console.log("Массив: ", posts);
      const respone = await fetch("http://localhost:5281/Authorization", {
      method: "POST",
      headers:{
         "content-type": "application/json",
      },
      body: JSON.stringify(posts),
   })
   const data = await respone.text();
   return(data);
    }
   catch(e)
   {
    console.error("Бывает:", e);
    return("Ошибка");
   }
}

//функция по Восстановление пароля
export const RecoveryPassword = async (posts: any) => {
   try{
      console.log("Массив: ", posts);
      const respone = await fetch("http://localhost:5281/RecoveryPassword", {
      method: "POST",
      headers:{
         "content-type": "application/json",
      },
      body: JSON.stringify(posts),
   })
   const data = await respone.text();
   return(data);
    }
   catch(e)
   {
    console.error("Бывает:", e);
    return("Ошибка");
   }
}




export const UserAuthentication = async (posts: any) => {
   try{
      console.log("Массив: ", posts);
      const respone = await fetch("http://localhost:5281/CheckJWT", {
      method: "POST",
      headers:{
         "content-type": "application/json",
      },
      body: JSON.stringify(posts),
   })
   //const data = await respone.text();
   return(respone);
    }
   catch(e)
   {
    console.error("Бывает:", e);
    return(false);
   }
}