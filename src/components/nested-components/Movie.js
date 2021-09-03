import React from 'react';

export const Movie = ({title, image, year, staring, rank}) => {

    let mainTitle = title;
    if(mainTitle.length > 15){
        mainTitle = mainTitle.substring(0,16) + "...";
    }
    return (
        <div className="Movie">
            <img src={image} alt={image}/>
            <ul>
                <li className="title"><b>{title}</b></li>
                <li><b>Year: </b>{year}</li>
                <li><b>Staring: </b>{staring}</li>
                <li><b>Rank: </b>{rank}</li>
                <li className="bookmark"><button>Bookmark</button></li>
            </ul>
        </div>
    )
}

