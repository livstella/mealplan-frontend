import React from 'react';
import { Box, Button, Text } from "grommet";
import { FormSubtract } from "grommet-icons";
import './styles/savedRecipeLayout.css'


export default function(props){
    const { imgUrl, name, author,  description, deleteFunction, source } = props;
    return(
        <div className="wrapper">
            <div className="masonry-item">
            <div className="masonry-content">
                <img src={imgUrl} alt={name}className="saved-img"/>
                <h3 className="masonry-title">{name}</h3>
                <p className="masonry-description">{description} from {author}<br/><a href={source}> Go to the recipe</a></p>
                    <div className="button-div">
                    <Button hoverIndicator="light-1" onClick={deleteFunction} className="test-button">
                        <Box pad="small" direction="row" align="center" gap="small">
                        <FormSubtract />
                        <Text>Delete from My Recipes</Text>
                        </Box>
                    </Button>
                    </div>                
            </div>
            </div>
        </div>    
    )}

