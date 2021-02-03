import React, { useEffect, useState } from 'react'
import './products.css'
import Card from './productCard'
import {menuItems} from './menuItems'
import Button from '../../button/button'

function Products() {
    const [category, setCategory]= useState('all')
    const [items, setItems]= useState([])
    const [buttonSize, setButtonSize]= useState('btn--medium')
    useEffect(()=>{
        category === 'all'? setItems(menuItems): setItems(menuItems.filter(cat=> cat.category===category))
    },[category])
    const adjustButtonSize=()=>{
        if(window.innerWidth <=960){
            setButtonSize('btn--small')
        }else{
            setButtonSize('btn--medium')
        }
    }
    useEffect(()=>{
        adjustButtonSize()
    },[])
    window.addEventListener('resize', adjustButtonSize)
    return (
        <div>
            <div className='product-btns'>
                <Button 
                    buttonStyle='btn--outlineLite' 
                    buttonSize={buttonSize} 
                    handleClick={()=>setCategory('all')} 
                    btnActive={category==='all'?true:false}
                >
                    ALL
                </Button>
                <Button 
                    buttonStyle='btn--outlineLite' 
                    buttonSize={buttonSize} 
                    handleClick={()=>setCategory('kaya')} 
                    btnActive={category==='kaya'?true:false}
                >
                    KAYA
                </Button>
                <Button 
                    buttonStyle='btn--outlineLite' 
                    buttonSize={buttonSize} 
                    handleClick={()=>setCategory('root')} btnActive={category==='root'?true:false}
                >
                    ROOT
                </Button>
                <Button 
                    buttonStyle='btn--outlineLite' 
                    buttonSize={buttonSize} 
                    handleClick={()=>setCategory('nuts')} btnActive={category==='nuts'?true:false}
                >
                    NUTS
                </Button>
                <Button 
                    buttonStyle='btn--outlineLite' 
                    buttonSize={buttonSize} 
                    handleClick={()=>setCategory('fruit')} btnActive={category==='fruit'?true:false}
                >
                    FRUITS
                </Button>
                <Button 
                    buttonStyle='btn--outlineLite' 
                    buttonSize={buttonSize} 
                    handleClick={()=>setCategory('leaves')} btnActive={category==='leaves'?true:false}
                >
                    LEAVES
                </Button>
                <Button 
                    buttonStyle='btn--outlineLite' 
                    buttonSize={buttonSize} 
                    handleClick={()=>setCategory('flower')} btnActive={category==='flower'?true:false}
                >
                    FLOWER
                </Button>
                <Button 
                    buttonStyle='btn--outlineLite' 
                    buttonSize={buttonSize} 
                    handleClick={()=>setCategory('stem')} btnActive={category==='stem'?true:false}
                >
                    STEM
                </Button>

            </div>
            <div className='product-container'>
                {
                    items.map(item => 
                        <Card 
                            banner={item.banner}
                            title={item.title}
                            price={item.price}
                        />)
                }
            </div>
        </div>
    )
}

export default Products
