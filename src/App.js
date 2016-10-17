import React, { Component } from 'react';
import fragen from './fragen';
import Frage from './Frage';
import './App.css';
import { changeAntwort, extendFragenbaum } from './stateFunctions'

export default class App extends Component {
  constructor(props) {
    // todo initial load via ajax
    super(props);
    this.state = { fragen: fragen };

    this.getUnterfragenDummy = this.getUnterfragenDummy.bind(this)
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

    const newState = changeAntwort(this.state, frage.id, antwort, () => this.getUnterfragenDummy(frage.id))

    this.setState(newState)
  }

  getUnterfragenDummy(parentFrageId) {
    console.log('requesting Unterfrage...')
    // setTimeout simulates the ajax request
    // think about extracting this to a container component
    window.setTimeout(() => {
      console.log('requested Unterfrage...')

      const neueFrage = {
        id: '4be1fdb3-cd8d-4527-b273-0b3341df4e2c',
        type: 'bool',
        fragenText: 'Schmeckt ihnen Schnitzel mit Pommes?',
        antwort: null,
        moeglichkeiten: [
          {
            text: 'Ja',
            value: true,
          },
          {
            text: 'Nein',
            value: false
          }]
      }

      const newState = extendFragenbaum(this.state, neueFrage, parentFrageId)
      this.setState(newState)

    }, 2000)
  }

}