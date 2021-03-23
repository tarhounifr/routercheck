import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import MovieApp from './Components/MovieApp';
import NavBar from './Components/Navbar';
import MovieCard from './Components/MovieCard';
import About from './Components/About';
import Error from './Components/Error'
const App = () => {



  return (

    <Router>
      <div className="App">
          <NavBar />
        <Switch>
          <Route exact path="/" component={MovieApp} />
          <Route path="/Movie/:id" component={MovieCard} />
          <Route path="/About" component={About} />
          <Route path="/*" component={Error}/>
        </Switch>
      </div>
    </Router>


  );
}

export default App;
