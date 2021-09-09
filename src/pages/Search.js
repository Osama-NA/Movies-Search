import React, { useState, useEffect } from "react";
import { MoviesList } from "../components/MoviesList";
import { useDispatch, useSelector } from 'react-redux';
import { setMovies } from '../actions/moviesActions';
export const Search = () => {

    const storedMovies = useSelector(state => state.movies);

    const dispatch = useDispatch();

    const [text, setText] = useState("");
    const [search, setSearch] = useState("");
    const [foundMovies, setFoundMovies] = useState([]);
    const [loaderClass, setLoaderClass] = useState({display: "none"});

    const handleChange = (e) => {
        setText(e.target.value);
    };

    const newSearch = () => {
        setSearch(text);
        setText("");
    };

    //On every update on the 'search' state,
    //getMovies gets called to fetch movies from API 
    useEffect(() => {
        getMovies();
    }, [search]);

    //Setting search to empty string, to abort fetch 
    //request on component unmount to avoid memory leak
    useEffect(() => {
        return () => {
            setSearch("");
        }
    }, []);

    const getMovies = async () => {
        if (search.length === 0) return;
        setLoaderClass({display:"flex"}); // start search loader
        const newMovies = await getAPICallResult(search);

        //Mapping over newMovies data from API call results 
        //and storing required data in a movie object 
        //then adding the movie to the moviesList array
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

        //Setting the 'foundMovies' state to pass it to MoviesList component as a prop
        //Dispatching setMovies action to store moviesList in the redux store
        if (moviesList != null) {
            setFoundMovies(moviesList);
            dispatch(setMovies(moviesList));
        }
        setSearch("");
        setLoaderClass({ display: "none" }); //Hide search loader
    };

    //API CALL
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
            <div className={` movies-loader`} style={loaderClass}>
                <div className='circle1'></div>
                <div className='circle2'></div>
                <div className='circle3'></div>
            </div>
            {/* StoredMovies are passed as a prop if no foundMovies yet */}
            <MoviesList moviesList={storedMovies ? storedMovies : foundMovies ? foundMovies: []} bookmarked={false} />
        </>
    );
};
