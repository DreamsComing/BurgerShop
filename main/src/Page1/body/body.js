/* eslint-disable jsx-a11y/alt-text */

import React  from 'react'
import './body.css'
import Header from '../header/header'
import Salad from '../images/bacground/salad.png'
import Text from '../text/text'
import Footer from '../footer/footer'
function Body() {

  return (
    <div className='mainBody'>
      <Header />

      <aside>
        <div className='wrapperBody'>
          <div className='shadow' />
          <img className='typeOfOrder' src={Salad} />
          <div class="block_under_img">
            <p> Salad <span class="stars"> 4.7</span></p>
            <div class="time___block">
                <p> 10-18 mins </p>
            </div>
          </div>
        </div>
      </aside> 
      <Text />
      <Footer />
    </div>

  )
}

export default Body
