import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ImgDefault  from '../assets/images/imgNoFound.jpg'

import { Link } from "react-router-dom";

export class Movie extends Component {
  static propTypes = {
    id: PropTypes.string,
    title: PropTypes.string,
    year: PropTypes.string,
    poster: PropTypes.string
  }

  render () {
    const { id, poster, title, year } = this.props
    var posterImg = ''

    if ( poster === 'N/A')
      posterImg = ImgDefault
    else
      posterImg =  poster

    return (
      <Link to={`/detail/${id}`}>
      <div className="Movie-item">
        <span>
          <figure className="image">
            <img
              src={ posterImg }
              alt={ title }
              className = "poster-home"
            />
          </figure>
        </span>
        <span className="title is-6"> { title } </span>
        <span className="subtitle is-6"> ({ year }) </span>
      </div>
      </Link>
    )
  }
}
