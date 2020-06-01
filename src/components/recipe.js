import React, { useState, useEffect } from "react";
import RecipeLayout from "./recipeLayout";

export default function() {
  const [data, setData] = useState("");

  useEffect(() => {
    fetch("https://dry-harbor-57855.herokuapp.com/recipe-with-ingredients")
    .then((res) => res.json())
    .then((result) => setData(result)) 
    
    .catch((error) => console.log(error))
},[]);

  return (
    <div className="masonry-wrapper">
        

      {data &&
        data.map((element, index) => (
          <RecipeLayout
            key={index}
            name={element.name}
            imgUrl={element.img_url}
            description={element.description}
            author={element.author}
          />
        ))}
    </div>
  );
}
