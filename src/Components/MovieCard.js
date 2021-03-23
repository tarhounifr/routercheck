import React from 'react';
import { Card ,ListGroup} from 'react-bootstrap';
import './MovieCard.css'

const MovieCard = ( {location} ) => {
const movies = location.state.movies ;
    return (
        
        <div className='affcard'>
           <div>
          <Card style={{ width: '20rem' }}>
    <Card.Img variant="top" src={movies.img} />
   
  </Card>
  </div>
  <div className="desc">
  <Card style={{ width: '20rem' }}>
  <Card.Header><a href="https://rema.egybest.ink/trending/">From Egybest</a> </Card.Header>
  <ListGroup variant="flush">
    <ListGroup.Item>Name of Movie :</ListGroup.Item>
    <ListGroup.Item>{movies.title}</ListGroup.Item>
    <ListGroup.Item>Rating :</ListGroup.Item>
    <ListGroup.Item>{movies.rating}</ListGroup.Item>
     <a  href="/" class="btn btn-primary stretched-link">Go Back</a>
  </ListGroup>
</Card>
</div>
        </div>
    )
}

export default MovieCard
