import React, {useState} from 'react';
import Card from '../Card';
import './index.css';

export  const MainContainter = function(){
    const [setlectedCard, setSelectedCard] = useState('');
    return (
        <div className="main-container">
            <Card imgPath={"/img/apple.jpg"} title="apple" onChoose={() => setSelectedCard('apple1')} />
            <Card imgPath={"/img/apple.jpg"} title="apple" onChoose={() => setSelectedCard('apple2')} />
        {console.log(setlectedCard)}
        </div>
    );
}

export default MainContainter;