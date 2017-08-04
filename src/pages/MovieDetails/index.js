import React, { Component } from 'react';
import Service from '../../service'
const client = new Service()

class MovieDetailsPage extends Component {

  state = {
    movie: {}
  }

  componentDidMount() {
    client.fetchMovieById(this.props.match.params.movieId)
      .then(res => res.json())
      .then(data => {
        this.setState({
          movie: data
        })
      })
      .catch(err => {
        console.log('Error getting movie list', err)
      })
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>{this.state.movie.Title}</h2>
        </div>
        <div className="Movie-details-container">
          <div className="Details-item"> 
            <div>
              Title
            </div>
            <div>
              {this.state.movie.Title}
            </div>
          </div>
          <div className="Details-item"> 
            <div>
              Release date
            </div>
            <div>
              {this.state.movie.ReleaseDate}
            </div>
          </div>
          <div className="Details-item"> 
            <div>
              Trailer link
            </div>
            <div>
              <a href={this.state.movie.TrailerLink}>{this.state.movie.TrailerLink}</a>
            </div>
          </div>
          <div className="Details-item"> 
            <div>
              Description
            </div>
            <div style={{ textJustify: 'inter-word' }}>
              {this.state.movie.Description}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MovieDetailsPage;
