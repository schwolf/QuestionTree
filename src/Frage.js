import React, { Component } from 'react';
import Auswahlliste from './Auswahlliste';
import JaNeinRadioBtns from './JaNeinRadioBtns';
import Freitext from './Freitext';

export default class Frage extends Component {
    render() {
        // todo remove
        const divStyle = { marginLeft: 50, marginTop: 20 },
            frage = this.props.frage;

        let control;
         
        switch(frage.type) {
            case 'bool':
                control = <JaNeinRadioBtns frage={frage} onChangeAntwort={this.props.onChangeAntwort} />
                break;
            case 'select':
                control = <Auswahlliste frage={frage} onChangeAntwort={this.props.onChangeAntwort} />
                break;
            case 'text':
                control = <Freitext frage={frage} onChangeAntwort={this.props.onChangeAntwort} />
                break;
            default:
                break;
        }

        return (
            <div style={ divStyle }>
                { frage.fragenText }
                { control }
            </div>
        );
    }
}