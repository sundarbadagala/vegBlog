import React from 'react'
import Slideshow from './slideShow/slideShow'
import './home.css'
import Button from '../../button/button'

function Home() {
    return (
        <div className='home-main'>
            <Slideshow/>
            <div className='home-container'>
                <div className='home-title'>Hello Vegan</div>
                <div className='home-tag'>Be a Vegan, Proud to be Vegan</div>
                <div className='home-btns'>
                    <Button
                        buttonStyle='btn--outlineLite'
                        buttonSize='btn--large'
                        path='/products'
                    >
                    Get Started
                    </Button>
                    <Button
                        buttonStyle='btn--lite'
                        buttonSize='btn--large'
                        path='/sign'
                    >
                    Enroll Here
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Home
