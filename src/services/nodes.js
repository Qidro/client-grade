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
export const CreateUser = async (posts) => {
   try{
      console.log("Массив: ", posts);
    var respone = await fetch("http://localhost:5281/Registration", {
      method: "POST",
      headers:{
         "content-type": "application/json",
      },
      body: JSON.stringify(posts),
   });
    console.log(respone);
    }
   catch(e)
   {
    console.error("Бывает:", e);
   }
}