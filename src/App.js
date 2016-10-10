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
    // hier könnte man die Angaben des Anwenders auch noch an der Service posten.
    frage.antwort = antwort;
    this.setState(this.state);
  }

  render() {
    return (
      <div>
        { this.state.fragen.map((frage) => {
          return (
            <Frage key={frage.id} frage={frage} onChangeAntwort={(f, a) => this.handleChangeAntwort(f, a) }  />
          )
        })}
        <br/>
        <button onClick={ () => { console.log(this.state) }}>Log state</button>
      </div>
    );
  }
}
