import React from 'react';
import { Box, Button, Text } from "grommet";
import { FormSubtract } from "grommet-icons";
import './styles/savedRecipeLayout.css'


export default function(props){
    const { imgUrl, name, author,  description, deleteFunction } = props;
    return(
        <div className="wrapper">
            <div className="masonry-item">
            <div className="masonry-content">
                <img src={imgUrl} alt={name}/>
                <h3 className="masonry-title">{name}</h3>
                <p className="masonry-description">{description} from {author}</p>
                <Button hoverIndicator="light-1" onClick={deleteFunction}>
                    <Box pad="small" direction="row" align="center" gap="small">
                    <FormSubtract />
                    <Text>Delete from My Recipes</Text>
                    </Box>
                </Button>

                
            </div>
            </div>
        </div>    
    )}

