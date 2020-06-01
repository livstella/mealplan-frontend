import React from 'react';
import './recipeLayout.css'

export default function(props){
    const { imgUrl, name, author,  description } = props;
    return(
        
        <div className="masonry-item">
        <div className="masonry-content">
            <img src={imgUrl} alt={name}/>
            <h3 class="masonry-title">{name}</h3>
            <p className="masonry-description">{description} from {author}</p>
        </div>
        </div>
    )}

