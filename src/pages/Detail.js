import React, { Component } from 'react'
import PropTypes from  'prop-types'
import { ButtonBackToHome } from '../components/ButtonBackToHome'
import ImgDefault  from '../assets/images/imgNoFound.jpg'

import { MdLocalActivity,  MdLanguage } from 'react-icons/md';
import { IoIosPeople } from 'react-icons/io';
import { RiTimerLine } from 'react-icons/ri';
import { FaTrophy } from 'react-icons/fa';
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
    const {Title,Poster,Actors,imdbRating,Plot,Rated,
           Runtime,Year,Language,Genre,Country,Director,
           Writer,Awards,BoxOffice,Production
          } = this.state.movie

           var posterImg = ''

           if ( Poster === 'N/A')
             posterImg = ImgDefault
           else
             posterImg =  Poster

    return (

      <div className= 'MoviesList'>

          <div class="column is-half  has-text-center">
            <div className="ImgDetail">
              <img src={posterImg} alt={Title} className="poster-detail"/>
            </div>
          </div>

          <div class="column has-text-left">
                <ul id="description">
                  <li><strong>{Title}</strong>. {Year}.</li>
                  <li>
                    <span className="icon"><MdLocalActivity /> </span> { Genre }
                    <span className="tag is-warning">{Rated}</span>
                    <span className="tag is-warning">Rating: {imdbRating }</span>
                  </li>
                  <li>{Plot}</li>
                  <li><span className="icon"><IoIosPeople/></span>Actors: { Actors }, director: { Director }, writer: { Writer }. { Production } </li>

                  <li><span className="icon"><FaTrophy /></span>{ Awards }. Box Office: { BoxOffice }</li>
                  <li><span className="icon"><RiTimerLine /></span>{Runtime}.
                      <span className="icon"> <MdLanguage /></span>{ Language }. Country: { Country } </li>
                </ul>
                <div class="has-text-right">
                    <ButtonBackToHome />
                </div>
          </div>
      </div>



    )
  }
}
