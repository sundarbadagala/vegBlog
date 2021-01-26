import React from 'react'
import './button.css'
import {Link} from 'react-router-dom'

const STYLES=['btn--lite', 'btn--dark','btn--outlineLite', 'btn--outlineDark']
const SIZES=['btn--medium','btn--large','btn--small']
function Button({children, buttonStyle, buttonSize, handleClick, path, btnActive}) {
    const checkButtonStyle= STYLES.includes(buttonStyle)? buttonStyle : STYLES[0]
    const checkButtonSize= SIZES.includes(buttonSize)? buttonSize : SIZES[0]
    return (
        <Link to={path}>
            <button className={`btn ${checkButtonStyle} ${checkButtonSize} ${btnActive? 'active':null}`} onClick={handleClick}>
                {children}
            </button>
        </Link>
    )
}

export default Button
