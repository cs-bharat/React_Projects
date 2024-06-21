/* create custom hooks 
 syntax: function customHooks(){
             return []
        } 
*/

import { useEffect , useState } from "react";

// create custom hook //
function useCurrencyInfo(currency){
    const [data , setData] = useState({});
    // dependencie hook //
      useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        .then((res)=> res.json())
        .then((res) => setData(res[currency])) // object se data access
        console.log(data);

      } , [currency])
      console.log(data);
      return data
}

export default useCurrencyInfo;