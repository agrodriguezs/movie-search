import React, { Component } from 'react'
import PropTypes from  'prop-types'
import { ButtonBackToHome } from '../components/ButtonBackToHome'


const API_KEY = '81d5a02e';

export class Detail extends Component {
static propTypes = {
  match: PropTypes.shape({
    params: PropTypes.object,
    isExact: PropTypes.bool,
    path: PropTypes.string,
    url: PropTypes.string
  })
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
   console.log(this.props);
   const { movieId } = this.props.match.params
   this._fetchMovie({ id: movieId })
 }

  render () {
    const {Title, Poster, Actors, imdbRanting, Plot, Runtime, Year, Language, Genre, Country } = this.state.movie
    return (
      <div>
        <ButtonBackToHome />
        <h1>{Title}</h1>
        <img src={Poster} alt={Title} className="poster-detail"/>
        <h3>Ranting: {imdbRanting}, Genre: {Genre}</h3>
        <p>{Plot}</p>
        <p>Actors: {Actors}</p>
        <p>Country: {Country}, Year:  {Year}</p>
        <p>Language: {Language}, Duration: {Runtime}</p>
      </div>
    )
  }
}
