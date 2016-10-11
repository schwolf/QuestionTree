import React, { Component } from 'react';
import Frage from './Frage';

export default class JaNeinRadioBtns extends Component {

    render() {
        const frage = this.props.frage;
        return (
            <div>
                { frage.moeglichkeiten.map((moeglichkeit, i) => {
                    
                    // Unterfrage nur anzeigen wenn existent und der Antwort entspricht
                    
                    const unterFrage = moeglichkeit.unterfrage && frage.antwort === moeglichkeit.value
                            ? <Frage frage={moeglichkeit.unterfrage} onChangeAntwort={this.props.onChangeAntwort} />
                            : null;
                    
                    return (
                        <div key={i}>
                            <input type="radio"
                                name={frage.id}
                                checked={ frage.antwort === moeglichkeit.value }
                                onChange={() => this.props.onChangeAntwort(frage, moeglichkeit.value) } />

                            <label>{moeglichkeit.text}</label>
                            
                            {unterFrage}

                        </div>
                    )
                })
                }

            </div>
        )
    }
}