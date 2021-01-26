import React from 'react'
import Card from './galleryCard'
import SimpleReactLightBox from 'simple-react-lightbox'

function Gallery() {
    return (
        <div>
            <SimpleReactLightBox>
                <Card/>
            </SimpleReactLightBox>
        </div>
    )
}

export default Gallery
