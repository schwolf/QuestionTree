import React from 'react';

const Freitext = props =>
    <input type='text' value={props.frage.antwort || ''} onChange={e => { props.onChangeAntwort(props.frage, e.target.value); } } />


export default Freitext
