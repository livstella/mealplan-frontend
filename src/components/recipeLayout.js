import React from 'react';
import { Box, Button, Text } from "grommet";
import { Add } from "grommet-icons";
import './styles/recipeLayout.css'



export default function(props){
    const { imgUrl, name, author,  description, saveFunction } = props;
    return(
        
        <div className="masonry-item">
        <div className="masonry-content">
            <img src={imgUrl} alt={name}/>
            <h3 className="masonry-title">{name}</h3>
            <p className="masonry-description">{description} from {author}</p>
            <div className="button-div2">
            <Button hoverIndicator="light-1" onClick={saveFunction}>
             <Box pad="small" direction="row" align="center" gap="small">
              <Add />
              <Text>Add to my recipes</Text>
             </Box>
           </Button>
           </div>
        </div>
        </div>
    )}

