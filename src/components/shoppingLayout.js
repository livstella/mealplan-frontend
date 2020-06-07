import React, { useState, useEffect } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";
import './styles/shopping.css'





export default function(props){
    const [cookies, setCookie, removeCookie] = useCookies(["myCookies"]);
    const [data, setData] = useState("");

    useEffect((token) => {
        const config = {
            headers: {
              Authorization: cookies["auth-token"],
            },};

      axios
      .get("https://dry-harbor-57855.herokuapp.com/shopping", config)
            .then((result) => setData(result.data)) 
            .catch((error) => console.log(error))
        },[]);

    

return(
    <div>
         {data &&
            data.map((element, index) => (
             <ul>
                 <li><input type="checkbox"></input>{element.ingredient}- {element.amount}{element.unit}</li>
  
            </ul>
           ))}
    </div>
)

}