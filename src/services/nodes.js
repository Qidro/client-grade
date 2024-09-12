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