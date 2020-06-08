import React, { useState, useEffect } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";
import SavedRecipeLayout from "./savedRecipeLayout";
import ShoppingLayout from "./shoppingLayout";




export default function(props){
    const [cookies, setCookie, removeCookie] = useCookies(["myCookies"]);
    const [data, setData] = useState("");


    useEffect((token) => {
        const config = {
            headers: {
              Authorization: cookies["auth-token"],
            },};

      axios
      .get("https://dry-harbor-57855.herokuapp.com/get-saved-recipes", config)
            .then((result) => setData(result.data)) 
            .catch((error) => console.log(error))
        },[]);




        function deleteFunction(recipe,token){
     
              axios
                .delete("https://dry-harbor-57855.herokuapp.com/user/delete-recipe", {
                    headers: {
                      Authorization: token
                    },
                    data: {
                        id: recipe
                    }
                  })
                .then(function (response) {
                  console.log(response);
                })
                .catch(function (error) {
                  console.log(error);
                });
        
        }
        



    return(
        <div>
            <ShoppingLayout />
            <div className="masonry-wrapper">
            
            {data &&
            data.map((element, index) => (
                <SavedRecipeLayout
                key={element.index}
                name={element.name}
                imgUrl={element.img_url}
                description={element.description}
                author={element.author}
                deleteFunction={()=>deleteFunction(element.savedid, cookies["auth-token"])}
                
                />
                
            ))}
            
        </div>
      </div>
    );}