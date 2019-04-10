import React, { Component } from 'react';

import { Router } from "@reach/router"

import Chooser from './chooser'

import fire from '../firebase-config'
const palettes = fire.database().ref('palettes')


class App extends Component {

  constructor() {
    super();
    this.state = {
      palletes: [], 
    }
  }
  
  componentWillMount() {
    palettes.on('value', snapshot => {
      snapshot.forEach(child => {
        const palette = {id: child.key, value: child.val()};
        this.setState({palletes: [palette, ...this.state.palletes]})
      })
    })
  }

  render() {
    return (
      <main>
        <Router>
          <Chooser path="/" palletes={this.state.palletes} />
          {/* <Dash path="dashboard" /> */}
        </Router>
      </main>
    );
  }
}

export default App;
