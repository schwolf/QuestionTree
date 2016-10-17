import React from 'react';
import Frage from './Frage';

// stateless func
export default function Auswahlliste(props) {
    const frage = props.frage,
        selectedMoeglichkeit = frage.moeglichkeiten.find((item) => { return frage.antwort === item.value });

    // Unterfrage nur anzeigen wenn für die ausgewählte Antwort eine Unterfrage existiert
    const unterFrage = selectedMoeglichkeit && selectedMoeglichkeit.unterfrage
        ? <Frage frage={selectedMoeglichkeit.unterfrage} onChangeAntwort={props.onChangeAntwort} />
        : null;

    return (
        <div>
            <select value={frage.antwort || ''} onChange={ev => { props.onChangeAntwort(frage, ev.target.value); } }>
                <option value=''>bitte wählen</option>
                {frage.moeglichkeiten.map((moeglichkeit, i) => {
                    return (
                        <option value={moeglichkeit.value} key={i}>{moeglichkeit.text}</option>
                    );
                })}
            </select>

            {unterFrage}

        </div>
    )
}