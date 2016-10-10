import React, { Component } from 'react';
import Frage from './Frage';

// todo stateless
export default class Auswahlliste extends Component {
    render() {
        const frage = this.props.frage,
            selectedMoeglichkeit = frage.moeglichkeiten.find((item) => { return frage.antwort === item.value });
        
        // Unterfrage nur anzeigen wenn für die ausgewählte Antwort eine Unterfrage existiert
        let frageComponent = selectedMoeglichkeit && selectedMoeglichkeit.unterfrage
            ? <Frage frage={selectedMoeglichkeit.unterfrage} onChangeAntwort={this.props.onChangeAntwort} />
            : null;

        return (
            <div>
                <select value={frage.antwort || ''} onChange={ev => { this.props.onChangeAntwort(frage, ev.target.value); }}>
                    <option value=''>bitte wählen</option>
                    { frage.moeglichkeiten.map((moeglichkeit, i) => {
                        return (
                            <option value={moeglichkeit.value} key={i}>{moeglichkeit.text}</option>
                        );
                    }) }
                </select>
                {frageComponent}
            </div>
        )
    }
}