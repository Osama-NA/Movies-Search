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

    //Remove movie loader when movie current image is done loading
    const removeLoader = (e) => {
        const loader = e.target.parentNode.childNodes[0];
        loader.classList.add("done-loading");
    }

    return (
        <div className="Movie">
            <div className="Loading">
                <div className="circle"></div>
            </div>
            <p style={{display: "none"}}>{id}</p>
            <img src={image} alt={image} onLoad={removeLoader}/>
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

