import React, { useState, useEffect } from "react";
import axios from "axios";
import { CheckBox } from 'grommet';
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
    <div className="shopping-body">
         {data &&
            data.map((element, index) => (
             <ul>
                 <li><input type="checkbox" id={element.id} /> <label for={element.id}>{element.ingredient} - {element.amount}{element.unit}</label></li>
                
            </ul>
           ))}
    </div>
)

}