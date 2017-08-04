import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Service from '../../service'
const client = new Service()

class MovieListPage extends Component {

  state = {
    movies: [],
    actor: {}
  }

  componentDidMount() {
    client.fetchMovieByActorId(this.props.match.params.actorId)
      .then(res => res.json())
      .then(data => {
        this.setState({
          movies: data
        })
      })
      .catch(err => {
        console.log('Error getting movie list', err)
      })

    client.fetchActorById(this.props.match.params.actorId)
      .then(res => res.json())
      .then(data => {
        console.log(data)
        this.setState({
          actor: data
        })
      })
  }

  renderMovies() {
    return this.state.movies.map(movie => {
      const percentRating = movie.Rating * 20
      return (
          <div className="Movie-item" key={movie.Id}>
            <div><Link to={`/movie/${movie.Id}`}>{movie.Title}</Link></div>
            <div>{movie.ReleaseDate}</div>
            <div className="Rating-stars">
              <div className="Grey-stars"></div>
              <div className="Filled-stars" style={ { width: `${percentRating}%` } }></div>
            </div>
          </div>
        )
    })
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Movies of {this.state.actor ? this.state.actor.Name : ""}</h2>
        </div>
        <div className="Movies-container">
          { this.renderMovies() }
        </div>
      </div>
    );
  }
}

export default MovieListPage;
