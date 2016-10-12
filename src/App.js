import React, { Component } from 'react';
import fragen from './fragen';
import Auswahlliste from './Auswahlliste';
import JaNeinRadioBtns from './JaNeinRadioBtns';
import Freitext from './Freitext';

import './App.css';

export default class App extends Component {
  constructor(props) {
    // todo this must be a container component which performs an ajax request and passes the result to its child
    super(props);
    this.state = { fragen: fragen };
  }

  handleChangeAntwort(frage, antwort) {
    // hier könnte man die Angaben des Anwenders auch noch an den Service posten.

    // do not do it like this: works, but 
    // frage.antwort = antwort;
    // this.setState(this.state);

    const newState = Object.assign({}, this.state);

    this.setAntwort(newState.fragen, frage.id, antwort);

    this.setState(newState);

  }

  setAntwort(fragenBaum, id, antwort) {
    for (let i = 0; i < fragenBaum.length; i++) {
      const frage = fragenBaum[i];
      if (frage.id === id) {
        frage.antwort = antwort;
      }
      else {
        for (let j = 0; j < frage.moeglichkeiten.length; j++) {
          const unterfrage = frage.moeglichkeiten[j].unterfrage;
          if (unterfrage) {
            this.setAntwort([unterfrage], id, antwort);
          }
        }
      }
    }
  }

  render() {
    return (
      <div>
        { this.state.fragen.map((frage) => {
          let control;
          
          switch (frage.type) {
            case 'bool':
              control = <JaNeinRadioBtns />
              break;
            case 'select':
              control = <Auswahlliste />
              break;
            case 'text':
              control = <Freitext />
              break;
            default:
              break;
          }
          control = React.cloneElement(control, { frage: frage, onChangeAntwort: (f,a ) => this.handleChangeAntwort(f, a) });

          return (
            <div key={frage.id} className='frage'>
              { frage.fragenText }
              { control }
            </div>
          )
        }) }
        <br/>
        <button onClick={ () => { console.log(this.state) } }>Log state</button>
      </div>
    );
  }
}
