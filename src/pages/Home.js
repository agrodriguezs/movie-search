import React, { Component } from 'react'
import { MovieList } from '../components/MovieList'
import { SearchForm } from '../components/SearchForm';
import { Title } from '../components/Title';
import ImageHome  from '../assets/images/cinema.png'

export class Home extends Component {
  state = { usedSearch: false, results: [] }

  _handleResults =  (results) => {
    this.setState({ results, usedSearch: true })
  }

  _renderResults () {
    return this.state.results.length === 0
        ? <p>Sorry!, Results no found!</p>
        : <MovieList movies={this.state.results} />
  }

  render () {
    return(
      <div className="page-wrap">
        <Title >Search Movie</Title>
        <div className="SearchForm-wrapper">
          <SearchForm onResults={this._handleResults} />
        </div>
        {this.state.usedSearch
          ? this._renderResults()
          : <small>Use the form to search a movie </small>
        }
        <div>
          <figure>
            <img
              src={ ImageHome }
              alt= 'movies'
              className = "image-home"
            />
          </figure>
        </div>
      </div>
    )
  }
}
