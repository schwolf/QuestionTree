import React, { Component } from 'react';
import fragen from './fragen';
import Frage from './Frage';

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
          return (
            <Frage key={frage.id} frage={frage} onChangeAntwort={(f, a) => this.handleChangeAntwort(f, a) }  />
          )
        }) }
        <br/>
        <button onClick={ () => { console.log(this.state) } }>Log state</button>
      </div>
    );
  }
}
