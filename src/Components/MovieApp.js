import React from 'react'
import MovieCards from './MovieCards'
import MovieListe from './MoviesData'

const MovieApp = () => {


    return (
        <div>

            {MovieListe.map(el => <MovieCards movies={el} key={el.id} />)}
        </div>
    )
}

export default MovieApp
