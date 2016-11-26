import React from 'react';

export default Freitext = props =>
    <input type='text' value={props.frage.antwort || ''} onChange={e => { props.onChangeAntwort(props.frage, e.target.value); } } />

