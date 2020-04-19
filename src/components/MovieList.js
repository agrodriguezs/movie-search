import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Movie } from './Movie'

export class MovieList extends Component {

  static propTypes = {
    movies: PropTypes.array
  }

  render () {
      const { movies } = this.props
      return (
        <div className= 'MoviesList'>
        {
          movies.map(movie => {
            return (
              <div key={movie.imdbID}
                   className= 'MoviesList-item'>
                    <Movie
                        key={ movie.imdbID }
                        title= { movie.Title }
                        poster={ movie.Poster }
                        year={ movie.Year }
                     />
              </div>
            )
          })

        }
        </div>
      )
    }
}
