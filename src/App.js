import React, { Component } from 'react';
import fragen from './fragen';
import Frage from './Frage';
//import './App.css';
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
        <button onClick={() => console.log(this.state)}>Log state</button>
      </div>
    );
  }

  handleChangeAntwort(frage, antwort) {

    // das triggert zukünftig lediglich die action ANTWORT_CHANGE
    // die saga hört auf ANTWORT_CHANGE actions und feuert eine UNTERFRAGEN_FETCH_REQUESTED action
    //    yield put({ type: 'UNTERFRAGEN_FETCH_REQUESTED', frage.id })
    // die saga holt die unterfrage via fetch-api
    //    try { const unterfragen = yield call(Api.fetch, '/4711/unterfragen')
    // die saga feuert die UNTERFRAGEN_FETCH_SUCCEEDED bzw. die UNTERFRAGEN_FETCH_FAILED action
    //    yield put({ type: 'UNTERFRAGEN_FETCH_SUCCEEDED', unterfragen })
    // reducer: 
    // ANTWORT_CHANGE => setzt die antwort
    // UNTERFRAGEN_FETCH_REQUESTED => aktiviert das loading-flag
    // UNTERFRAGEN_FETCH_SUCCEEDED => hängt die unterfrage an und deaktivert das loading-flag 

    const newState = changeAntwort(this.state, frage.id, antwort)

    this.setState(newState)

    this.getUnterfragenDummy(frage.id)

  }

  getUnterfragenDummy(parentFrageId) {
    console.log('requesting Unterfrage...')
    // setTimeout simulates the ajax request
    // think about extracting this to a container component
    window.setTimeout(() => {
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