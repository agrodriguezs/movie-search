import React from 'react'
import { ButtonBackToHome } from '../components/ButtonBackToHome'
import ImageNoFound  from '../assets/images/nofound.png'

export const NotFound = () => (

  <div className="NoFound">
    <h2>Sorry! the page is not found</h2>
    <figure>
      <img src={ ImageNoFound } alt= '404' />
    </figure>
    <ButtonBackToHome />

  </div>
)
