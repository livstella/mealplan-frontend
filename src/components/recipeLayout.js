import React from 'react';
import './recipeLayout.css'
import { Box, Button, Grommet, Text } from "grommet";
import { grommet } from "grommet/themes";
import { Add } from "grommet-icons";



export default function(props){
    const { imgUrl, name, author,  description, saveFunction } = props;
    return(
        
        <div className="masonry-item">
        <div className="masonry-content">
            <img src={imgUrl} alt={name}/>
            <h3 class="masonry-title">{name}</h3>
            <p className="masonry-description">{description} from {author}</p>
            <Button hoverIndicator="light-1" onClick={saveFunction}>
        <Box pad="small" direction="row" align="center" gap="small">
          <Add />
          <Text>Add to my recipes</Text>
        </Box>
      </Button>
        </div>
        </div>
    )}

