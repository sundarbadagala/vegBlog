import React from 'react';
import { Zoom } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import './slideShow.css'
import {images} from './imageData'

const Slideshow = () => {
  const zoomOutProperties = {
    indicators: true,
    scale: 0.4
  }
  return (
    <div>
      <Zoom {...zoomOutProperties}>
        {images.map((each, index) => (
          <div key={index} style={{width: "100%"}}>
            <img style={{ objectFit: "cover", width: "100%" }} src={each} alt='' className='banner' />
          </div>
        ))}
      </Zoom>
    </div>
  )
}

export default Slideshow;