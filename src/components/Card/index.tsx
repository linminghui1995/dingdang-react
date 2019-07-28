import React, { useState, FC } from 'react';
import './index.css';

interface CardProps{
    imgPath: string;
    title: string;
    onChoose: Function;
}

export const Card: FC<CardProps> = function(param){
    const { imgPath, title, onChoose } = param;
    const [shake, setShake] = useState(false);
    const [bigger, setBigger] = useState(false);


    function onClick(){
        onChoose();
        setBigger(true);
    }

    return (
        <div className="card" onClick={onClick}>
            <div 
                className={`card-container ${shake?'card-container-shake':''} ${bigger?'card-container-bigger':''}`} 
                onMouseOver={() => setShake(true)} 
                onMouseLeave={() => setShake(false)} 
            >
                <div className="card-img-container">
                    <img className="card-img" src={imgPath} />
                </div>
                <div className="card-title-container">
                    <span className="card-title-title">{title}</span>
                </div>
            </div>
        </div>
    );
}

export default Card;