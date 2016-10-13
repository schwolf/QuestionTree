import React from 'react';
import Auswahlliste from './Auswahlliste';
import JaNeinRadioBtns from './JaNeinRadioBtns';
import Freitext from './Freitext';

export default function Frage(props) {
    let control;

    switch (props.frage.type) {
        case 'bool':
            control = <JaNeinRadioBtns {...props} />
            break;
        case 'select':
            control = <Auswahlliste {...props} />
            break;
        case 'text':
            control = <Freitext {...props} />
            break;
        default:
            break;
    }

    return (
        <div className='frage'>
            {props.frage.fragenText}
            {control}
        </div>
    );
}