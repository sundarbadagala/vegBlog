import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import {menuItems} from './menuItems'
import './navbar.css'

function Navbar() {
    const [clicked, setClicked]= useState(false)
    return (
        <div className='nav-main'>
            <div className='nav-logo'>
                Veg Market <i class="fas fa-carrot"></i>
            </div>
            <div className='nav-menu-logo' onClick={()=>setClicked(!clicked)}>
                <i class={clicked? "fas fa-times":'fas fa-bars'}></i>
            </div>
            <div className={clicked? 'nav-menu active':'nav-menu'}>
            <ul className='menu-list'>
            {
                menuItems.map((item, index )=> <li key={index} className='menu-items' onClick={()=>setClicked(false)}><Link to={item.url} className={item.cName}>{item.title}</Link></li>)
            }
            </ul>
            </div>
        </div>
    )
}

export default Navbar
