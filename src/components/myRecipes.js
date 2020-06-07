import React, { useState, useEffect } from "react";
import axios from "axios";
import RecipeLayout from "./recipeLayout";
import { useCookies } from "react-cookie";




export default function(props){
    const [cookies, setCookie, removeCookie] = useCookies(["myCookies"]);
    const [data, setData] = useState("");


    useEffect((token) => {
        const config = {
            headers: {
              Authorization: cookies["auth-token"],
            },
          };

      axios
      .get("https://dry-harbor-57855.herokuapp.com/get-saved-recipes", config)
            
            .then((result) => setData(result.data)) 
            .catch((error) => console.log(error))
        },[]);



    return(
        <div className="masonry-wrapper">
        
        {data &&
          data.map((element, index) => (
            <RecipeLayout
              key={element.index}
              name={element.name}
              imgUrl={element.img_url}
              description={element.description}
              author={element.author}
              
            />
            
          ))}
          
      </div>
    );}