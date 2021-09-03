import React, { useState, useEffect } from "react";
import { MoviesList } from "../components/MoviesList";
import { useDispatch, useSelector } from 'react-redux';
import {setMovies} from '../actions/moviesActions';

export const Search = () => {
    const storedMovies = useSelector(state => state.movies);

    const dispatch = useDispatch();

    const [text, setText] = useState("");
    const [search, setSearch] = useState("");
    const [foundMovies, setFoundMovies] = useState([]);
    
    const handleChange = (e) => {
        setText(e.target.value);
    };

    const newSearch = () => {
        setSearch(text);
        setText("");
    };

    useEffect(() => {
        getMovies();
    }, [search]);

    const getMovies = async () => {
        if (search.length === 0) return;
        const newMovies = await getAPICallResult(search);

        const moviesList = [];
        if (newMovies === undefined) return;
        newMovies.map((movie) => {
            try {
                let newMovie = {
                    id: movie.id,
                    title: movie.l,
                    image: movie.i.imageUrl,
                    year: movie.y,
                    staring: movie.s,
                    rank: movie.rank
                };
                moviesList.push(newMovie);
            } catch (error) {
                console.log(error);
            }
        });

        if (moviesList != null) {
            setFoundMovies(moviesList);
            dispatch(setMovies(moviesList))
        }
        setSearch("");
    };

    const getAPICallResult = async (query) => {
        const API_Response = await fetch(
            `https://imdb8.p.rapidapi.com/auto-complete?q=${query}`,
            {
                method: "GET",
                headers: {
                    "x-rapidapi-host": "imdb8.p.rapidapi.com",
                    "x-rapidapi-key":
                        "cee880d775msh7252f7cd47bf76dp137c1ejsn5cc2eaf1c99b",
                },
            }
        );
        const API_Data = await API_Response.json();
        return API_Data.d;
    };

    return (
        <>
            <div className="Search">
                <div className="search-bar">
                    <input
                        type="text"
                        value={text}
                        onChange={handleChange}
                        placeholder="Search a movie or actor"
                    />
                    <button onClick={newSearch}>Search</button>
                </div>
            </div>
            <MoviesList moviesList={storedMovies ? storedMovies : foundMovies ? foundMovies: []} bookmarked={false} />
        </>
    );
};
