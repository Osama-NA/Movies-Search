
export const bookmarkMovie = (movie) => {
    return{
        type: 'BOOKMARK_MOVIE',
        movie: movie
    }
}

export const removeBookmark = (movie) => {
    return{
        type: 'REMOVE_BOOKMARK',
        id: movie.id
    }
}