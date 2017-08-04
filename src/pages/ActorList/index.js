import React, { Component } from 'react';
import ActorContainer from './components/ActorContainer'
import Service from '../../service'
const client = new Service()

class ActorListPage extends Component {

  state = {
    actors: [],
    actress: []
  }

  componentDidMount() {
    Promise.all([client.fetchActors(), client.fetchActress()])
      .then(res => Promise.all(res.map(datum => datum.json())))
      .then(data => {
        this.setState({
          actors: data[0],
          actress: data[1]
        })
      })
      .catch(err => {
        console.log('Error fetching actors', err)
      }) 
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Best Actors in India</h2>
        </div>
        <p className="App-intro">
          List of top 10 male and female actors in India
        </p>
        <ActorContainer actors={this.state.actors} actress={this.state.actress}/>
      </div>
    );
  }
}

export default ActorListPage;
