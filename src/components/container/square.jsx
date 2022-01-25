import React, { useState } from 'react';



const Square = () => {

    const [squareStyle, setSquareStyle] = useState({height: '255px', width: '255px', backgroundColor: 'black'});

    function changeState(value){
        var red = Math.random() * 255;
        var green = Math.random() * 255;
        var blue = Math.random() * 255;
        setSquareStyle({height: '255px', width: '255px', backgroundColor: `rgb(${red},${green},${blue})`});

        if(value === 'salida'){
            setSquareStyle({height: '255px', width: '255px', backgroundColor: 'black'});
        }
        if(value === 'doubleClick'){
            setSquareStyle({height: '255px', width: '255px', backgroundColor: 'black'});
        }
    }

    return (
        <div>
            <div id='miDiv'
                onMouseEnter={ () => changeState('entrada') } 
                onMouseLeave={ () => changeState('salida') }
                onDoubleClick={ () => changeState('doubleClick')}
                style={ squareStyle }>
            </div>
        </div>
    );
}


export default Square;
