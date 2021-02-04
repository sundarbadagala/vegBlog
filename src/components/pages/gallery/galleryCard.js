import React from 'react'
import './galleryCard.css'
import {images} from './imagesData'
import {SRLWrapper} from 'simple-react-lightbox'

function Card() {
    return (
        <div>
            <SRLWrapper>
                <div className='gallery-card'>
                    {
                        images.map((item, index) => <img key={index} src={item.banner} alt='' className='gallery-banner'/>)
                    }
                </div>
            </SRLWrapper>
        </div>
    )
}

export default Card
