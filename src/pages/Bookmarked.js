import React from 'react';
import { useSelector } from 'react-redux';
import { MoviesList } from '../components/MoviesList';

export const Bookmarked = () => {

    const bookmarkedMovies = useSelector(state => state.bookmarkedMovies);
    
    return (
        <div className="Bookmarked">
            {bookmarkedMovies.length > 0?
                <MoviesList moviesList={bookmarkedMovies} bookmarked={true} />:
                <h2>No movies bookmarked, search a movie and bookmark it</h2>
            }
            
        </div>
    )
}
