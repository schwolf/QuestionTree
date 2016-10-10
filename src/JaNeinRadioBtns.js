import React, { Component } from 'react';
import Frage from './Frage';

export default class JaNeinRadioBtns extends Component {

    render() {
        const frage = this.props.frage;
        return (
            <div>
                { frage.moeglichkeiten.map((moeglichkeit, i) => {
                    
                    // Unterfrage nur anzeigen wenn existent und die ausgewählte möglichkeit der antwort entspricht
                    
                    const frageComponent = moeglichkeit.unterfrage && frage.antwort === moeglichkeit.value
                            ? <Frage frage={moeglichkeit.unterfrage} onChangeAntwort={this.props.onChangeAntwort} />
                            : null;
                    
                    return (
                        <div key={i}>
                            <input type="radio"
                                name={'grp' + frage.id}
                                defaultChecked={ frage.antwort === moeglichkeit.value }
                                onChange={() => this.props.onChangeAntwort(frage, moeglichkeit.value) } />

                            <label>{moeglichkeit.text}</label>
                            
                            {frageComponent}

                        </div>
                    )
                })
                }

            </div>
        )
    }
}