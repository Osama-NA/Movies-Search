const bookmarkMovie = (movie) => {
    return{
        type: 'BOOKMARK_MOVIE',
        movie: movie
    }
}

const removeBookmark = (id) => {
    return{
        type: 'REMOVE_BOOKMARK',
        id: id
    }
}

export default {
    bookmarkMovie,
    removeBookmark
}