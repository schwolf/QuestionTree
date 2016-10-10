import React, {Component} from 'react';

export default class Freitext extends Component {
    render() {
        const frage = this.props.frage;
        return (
            <input type='text' value={frage.antwort || ''} onChange={ev => { this.props.onChangeAntwort(frage, ev.target.value); }} />
        )
    }
}
