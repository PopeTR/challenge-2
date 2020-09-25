import React from 'react';

const char = (props) => {

    const style = {
        backgroundColor: 'white',
        font: 'inherit',
        border: '1px solid blue',
        padding: '8px',
        cursor: 'pointer',
        display: 'inline-block',
        textAlign: 'center',
        margin: '16px'
      };

    return (
        <div style={style} onClick={props.clicked}>
            <p>{props.character}</p>
        </div>
    )
};




export default char;