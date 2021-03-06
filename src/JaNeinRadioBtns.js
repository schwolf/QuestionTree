import React from 'react';
import Frage from './Frage';

export default function JaNeinRadioBtns({frage}) {
    return (
        <div>
            {frage.moeglichkeiten.map((moeglichkeit, index) => {
                // Unterfrage nur anzeigen wenn existent und der Antwort entspricht

                const unterFrage = moeglichkeit.unterfrage && frage.antwort === moeglichkeit.value
                    ? <Frage frage={moeglichkeit.unterfrage} onChangeAntwort={props.onChangeAntwort} />
                    : null;

                return (
                    <div key={index}>
                        <input type="radio"
                            name={frage.id}
                            checked={frage.antwort === moeglichkeit.value}
                            onChange={() => props.onChangeAntwort(frage, moeglichkeit.value)} />

                        <label>{moeglichkeit.text}</label>

                        {unterFrage}

                    </div>
                )
            })}
        </div>
    )
}