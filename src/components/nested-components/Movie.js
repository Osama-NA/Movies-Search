import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { bookmarkMovie, removeBookmark } from '../../actions/bookmarkedMoviesActions';


export const Movie = ({id,title, image, year, staring, rank, bookmarked} ) => {
    const bookmarkedMovie = { id, title, image, year, staring, rank };

    const dispatch = useDispatch();

    //Controls bookmark button
    const [ isBookmarked, setIsBookmarked ] = useState(bookmarked);

    const dispatchAction = () => {
        if (!isBookmarked) {
            setIsBookmarked(!isBookmarked);
            dispatch(bookmarkMovie(bookmarkedMovie));
        } else {
            setIsBookmarked(!isBookmarked);
            dispatch(removeBookmark(bookmarkedMovie));
        }
    }


    return (
        <div className="Movie">
            <p style={{display: "none"}}>{id}</p>
            <img src={image} alt={image}/>
            <ul>
                <li className="title"><b>{title}</b></li>
                <li><b>Year: </b><span>{year}</span></li>
                <li><b>Staring: </b><span>{staring}</span></li>
                <li><b>Rank: </b><span>{rank}</span></li>
                {!isBookmarked?
                    <li className="bookmark"><button onClick={dispatchAction}>Bookmark</button></li>:
                    <li className="bookmark"><button onClick={dispatchAction}>Remove bookmark</button></li>
                }
            </ul>
        </div>
    )
}

