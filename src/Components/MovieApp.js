import React from 'react';
import MovieCards from './MovieCards';
import MovieListe from './MoviesData'
;
import './MovieApp.css';
const MovieApp = () => {


    return (
        <div className="affiche">

            {MovieListe.map(el => <MovieCards movies={el} key={el.id} />)}
        </div>
    )
}

export default MovieApp
