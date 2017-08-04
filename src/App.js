import React, { Component } from 'react';
import ActorList from './pages/ActorList';
import MovieList from './pages/MovieList';
import MovieDetails from './pages/MovieDetails';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return (
    	<Router>
	      <div className="App">
	        <Switch>
			  <Route exact path="/" component={ActorList}/>
			  <Route path="/actor/:actorId" component={MovieList}/>
			  <Route path="/movie/:movieId" component={MovieDetails}/>
			</Switch>
	      </div>
	    </Router>
    );
  }
}

export default App;
