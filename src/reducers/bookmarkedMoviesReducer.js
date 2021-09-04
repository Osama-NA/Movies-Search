const bookmarkedMoviesReducer = (state = [], action) => {
    switch(action.type){
        case 'BOOKMARK_MOVIE':
            let newState = [...state];
            let bookmarkedMovie = action.movie;
            //Filtering the bookmarkedMovies in case the movie is already bookmarked
            newState = newState.filter(movie => {
                return movie.id !== bookmarkedMovie.id
            });
            return [...newState, bookmarkedMovie];
        case 'REMOVE_BOOKMARK':
            return [...state].filter(movie => movie.id !== action.id);
        default:
            return state;
    }
}

export default bookmarkedMoviesReducer;