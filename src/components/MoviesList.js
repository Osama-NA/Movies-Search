import React from 'react';
import { Movie } from './nested-components/Movie';

export const MoviesList = ({moviesList}) => {
    return (
        <div className="MoviesList">
            {moviesList.map(movie => (
                <Movie 
                key={movie.id} 
                title={movie.title}
                image={movie.image}
                year={movie.year}
                staring={movie.staring}
                rank={movie.rank}
                />
            ))}
        </div>
    )
}
