import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import MovieCard from './MovieCard';
import './MovieCards.css'
const MovieCards = ({ movies }) => {

    return (

        <div className="affcards">
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={movies.img} />
<Link  to={{pathname:`/Movie/:id` , state:{movies:movies}}}>
                <Button variant="primary" onClick={()=><MovieCard movies={movies} key={movies.id}/>} >Detaille</Button>
</Link>
            </Card>
        </div>
    )
}

export default MovieCards