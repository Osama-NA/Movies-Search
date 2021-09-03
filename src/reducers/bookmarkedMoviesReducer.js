const bookmarkedMoviesReducer = (state = [], action) => {
    switch(action.type){
        case 'BOOKMARK_MOVIE':
            return [...state, action.movie];
        case 'REMOVE_BOOKMARK':
            return [...state].filter(id => id !== action.id);
        default:
            return state;
    }
}

export default bookmarkedMoviesReducer;