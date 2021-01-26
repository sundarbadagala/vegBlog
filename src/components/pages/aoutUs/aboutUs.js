import React from 'react'
import {items} from './aboutUsData'
import { CardView } from 'react-card-with-image'
import 'react-card-with-image/dist/index.css'
 
const App = () => {
  
  return (
    <CardView
      items={items}
      activeColor='#000'
      imageHeight='650px'
      imageWidth='800px'
    />
  )
}
 
export default App