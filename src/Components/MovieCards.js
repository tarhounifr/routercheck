import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import MovieCard from './MovieCard';
const MovieCards = ({ movies }) => {

    return (

        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={movies.img} />
<Link to='/Movie'>
                <Button variant="primary" onClick={()=><MovieCard movies={movies} key={movies.id}/>} >Detaille</Button>
</Link>
            </Card>
        </div>
    )
}

export default MovieCards