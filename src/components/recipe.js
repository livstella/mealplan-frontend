import React, { useState, useEffect } from "react";
import axios from "axios";
import RecipeLayout from "./recipeLayout";

export default function() {
  const [data, setData] = useState("");

  useEffect(() => {
    fetch("https://dry-harbor-57855.herokuapp.com/recipe-with-ingredients")
    .then((res) => res.json())
    .then((result) => setData(result)) 
    .catch((error) => console.log(error))
},[]);

/*  function saveFunction(recipe){
    console.log(recipe)
  }
*/

  function saveFunction(recipe) {
  
    axios
      .post("http://localhost:3001/user/save-recipe", {
        id: recipe
      })
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
            saveFunction={()=> saveFunction(element.id)}
          />
          
        ))}
        
    </div>
  );
}
