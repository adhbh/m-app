import React, { Component } from 'react';
import { Link } from 'react-router-dom';
export default class ActorContainer extends Component {

  renderActors() {
    return this.props.actors.map(actor => {
      const percentRating = actor.Rating * 20
      return (
          <div className="Actor-item" key={actor.Id}>
            <div><Link to={{ pathname: `/actor/${actor.Id}`, query: { name: actor.Name } }} >{actor.Name}</Link></div>
            <div className="Rating-stars">
              <div className="Grey-stars"></div>
              <div className="Filled-stars" style={ { width: `${percentRating}%` } }></div>
            </div>
            <div className="Rating-num">{actor.Rating}</div>
          </div>
        )
    })
  }

  renderActress() {
    return this.props.actress.map(actor => {
      const percentRating = actor.Rating * 20
      return (
          <div className="Actor-item" key={actor.Id}>
            <div><Link to={`/actor/${actor.Id}`}>{actor.Name}</Link></div>
            <div className="Rating-stars">
              <div className="Grey-stars"></div>
              <div className="Filled-stars" style={ { width: `${percentRating}%` } }></div>
            </div>
            <div className="Rating-num">{actor.Rating}</div>
          </div>
        )
    })
  }

  render() {
    return (
        <div className="Actors-container">
          <div className="Actors-list">
            <div className="Actor-list-header">
              Male actors
            </div>
            { this.renderActors() }
          </div>
          <div className="Actors-list">
            <div className="Actor-list-header">
              Female actors
            </div>
            { this.renderActress() }
          </div>
        </div>
      )
  }
}