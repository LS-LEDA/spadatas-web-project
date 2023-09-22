import React from 'react';
import { useState } from 'react';
import './CardItem.css'

function CardItem(props) {
    
    const[expanded, setExpanded] = useState(0);

    const toggle = () => {
        if (expanded == 1) {
            return setExpanded(0);
        }
        setExpanded(1);
    }
    

    return (
        <>
            <div className={expanded ? 'card-item-container show' : 'card-item-container'}>
                <h1 className='card-item-title'>{props.title}</h1>
                <p className='card-item-author'> By: {props.author == null || props.author == ''? 'Unknown' : props.author } </p>
                <p className={expanded ? 'card-item-description-show' : 'card-item-description'}> {props.description} </p>
                <div className='card-item-buttons-container'>
                    <a className='card-item-link-button' href={props.link}><img className='card-item-link-button' src='./images/url.png' alt='A URL icon'></img></a>
                    <img className={expanded ? 'card-item-plus-button-show' : 'card-item-plus-button'} onClick={() => toggle()} src='./images/plus_sign.png' alt='A plus icon'></img>
                </div>

            </div>
        </>
    )
}

export default CardItem;