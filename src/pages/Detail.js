import React, { Component } from 'react'
import PropTypes from  'prop-types'

const API_KEY = '81d5a02e';

export class Detail extends Component {
static propTypes = {
  id: PropTypes.string
}
state = {  movie: {} }

_fetchMovie ({ id }) {
  fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&i=${ id }`)
    .then(res => res.json())
    .then(movie => {
        this.setState({ movie })
    })
}

_goBack () {
  window.history.back()
}

 componentDidMount () {
   const { id } = this.props
   this._fetchMovie({ id })
 }

  render () {
    const {Title, Poster, Actors, imdbRanting, Plot, Runtime, Year, Language, Genre, Country } = this.state.movie
    return (
      <div>
        <button onClick={this._goBack}> Volver </button>
        <h1>{Title}</h1>
        <img src={Poster} alt={Title} />
        <h3>Ranting: {imdbRanting}, Genre: {Genre}</h3>
        <p>{Plot}</p>
        <p>Actors: {Actors}</p>
        <p>Country: {Country}, Year:  {Year}</p>
        <p>Language: {Language}, Duration: {Runtime}</p>
      </div>
    )
  }
}
