import React from 'react';
import { Movie } from './nested-components/Movie';
import { useSelector } from 'react-redux';

export const MoviesList = ({ moviesList, bookmarked}) => {
    
    const bookmarkedMovies = useSelector(state => state.bookmarkedMovies);

    return (
        <div className="MoviesList">
            {moviesList.map(movie => {
                const getBookmarked = () => {
                    const newBookmarkedMovies = bookmarkedMovies.filter(curr => curr.id !== movie.id);
                    if (newBookmarkedMovies.length !== bookmarkedMovies.length) {
                        return true;
                    } else {
                        return bookmarked;
                    }
                }
                return (<Movie
                key={movie.id} 
                id={movie.id} 
                title={movie.title}
                image={movie.image}
                year={movie.year}
                staring={movie.staring}
                rank={movie.rank}
                bookmarked={getBookmarked()}
                />)
            })}
        </div>
    )
}
