import React, { Component } from 'react';
import fragen from './fragen';
import Frage from './Frage';
import './App.css';
import { changeAntwort } from './stateFunctions'

export default class App extends Component {
  constructor(props) {
    // todo initial load via ajax
    super(props);
    this.state = { fragen: fragen };
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

  handleChangeAntwort(frage, antwort) {

    // do not do it like this: seems to works only at first glance... 
    // frage.antwort = antwort;
    // this.setState(this.state);

    const newState = changeAntwort(this.state, frage.id, antwort)

    // hier könnte man auch noch:
    // - die Angaben des Anwenders auch noch an den Service posten.
    // - den Fragenbaum mit Unterfragen ergänzen (ggf. mit wait-control)
    // Dann sollte man evtl. mit Container und Presentational Komponenten arbeiten.

    this.setState(newState)
  }
}