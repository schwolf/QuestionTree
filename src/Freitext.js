import React from 'react';

const Freitext = props =>
    <input type='text' value={props.frage.antwort || ''} onChange={ev => { props.onChangeAntwort(props.frage, ev.target.value); } } />


export default Freitext
