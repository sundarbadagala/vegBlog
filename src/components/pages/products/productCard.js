import React from 'react'
import './productCard.css'

function Card(props) {
    return (
        <div className='card-main'>
            <img src={props.banner} alt='' className='card-image'/>
            <div className='card-details'>
                <div className='card-title'>{props.title}</div>
                <div className='card-price'>Price: {props.price}</div>
            </div>
        </div>
    )
}

export default Card
