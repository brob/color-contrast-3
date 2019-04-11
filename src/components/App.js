import React, { Component } from 'react';

import { Router } from "@reach/router"

import Chooser from './chooser'
import Pallete from './pallete'

import { createGlobalStyle } from 'styled-components';

import firebase from '../firebase-config'
const palettes = firebase.database().ref('palettes')

const GlobalStyle = createGlobalStyle`
	*,
	*:before,
	*:after {
		box-sizing: border-box;
	}

	body {
		margin: 0;
		padding: 0;
		font-size: 12px;
		font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen";
	}
`


class App extends Component {

	constructor() {
		super();
		this.state = {
			palletes: []
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
				<GlobalStyle />
				<Router>
					<Chooser path="/" palletes={this.state.palletes} />
					<Pallete path="/:id" />
				</Router>
			</main>
		);
	}
}

export default App;
