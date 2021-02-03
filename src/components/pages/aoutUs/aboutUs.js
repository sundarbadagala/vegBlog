import React, { useEffect, useState } from 'react'
import {items} from './aboutUsData'
import { CardView } from 'react-card-with-image'
import 'react-card-with-image/dist/index.css'
import './aboutUs.css'
 
const App = () => {
  const [height, setHeight]= useState('450px')
  const [width, setWidth]= useState('450px')
  const adjustSize=()=>{
        if(window.innerWidth<= 960){
            setHeight('200px')
            setWidth('200px')
        }
    }
   useEffect(()=>{
        adjustSize()
   },[])
   window.addEventListener('resize', adjustSize)
  return (
    <CardView
      items={items}
      activeColor='#000'
      imageHeight={height}
      imageWidth={width}
    />
  )
}
 
export default App