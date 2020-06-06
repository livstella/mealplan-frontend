import React, { useState, useEffect } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";
import RecipeLayout from "./recipeLayout";

export default function() {
  const [data, setData] = useState("");
  const [cookies, setCookie, removeCookie] = useCookies(["myCookies"]);

  useEffect(() => {
    fetch("https://dry-harbor-57855.herokuapp.com/recipe-with-ingredients")
    .then((res) => res.json())
    .then((result) => setData(result)) 
    .catch((error) => console.log(error))
},[]);




  function saveFunction(recipe,token) {
    var postData={
      id: recipe
    }
    const config = {
      headers: {
        Authorization: token,
      },
    } 
    axios
      .post("https://dry-harbor-57855.herokuapp.com/user/save-recipe", postData, config)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  


  return (
    <div className="masonry-wrapper">
        
      {data &&
        data.map((element, index) => (
          <RecipeLayout
            key={element.id}
            name={element.name}
            imgUrl={element.img_url}
            description={element.description}
            author={element.author}
            saveFunction={()=> saveFunction(element.id, cookies["auth-token"])}
          />
          
        ))}
        
    </div>
  );
}
