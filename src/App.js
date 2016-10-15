import React, { Component } from 'react';
import fragen from './fragen';
import Frage from './Frage';
import './App.css';
import { changeAntwort } from './stateFunctions'

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

    const newState = changeAntwort(this.state, frage.id, antwort)

    this.setState(newState)
  }

  render() {
    return (
      <div>
        {this.state.fragen.baum.map((frage) => {
          return (
            <div key={frage.id} className='fragecontainer'>
              <Frage frage={frage} onChangeAntwort={(f, a) => this.handleChangeAntwort(f, a)} />
            </div>
          )
        })}
        <br />
        <button onClick={() => { console.log(this.state) } }>Log state</button>
      </div>
    );
  }
}