import React from 'react'

import firebase from '../firebase-config'

import Stripe from './stripe'

const Pallete = props => {

    const pallete = firebase.database().ref(`palettes/${props.id}`)

    const colors = []

    pallete.on('value', snapshot => {
        snapshot.forEach(child => {
            const color = {name: child.key, value: child.val()};
            colors.push(color)
        })
    })

    console.log(colors)

    return (
        <div>
            {colors.map((color, index) => <Stripe key={index} background={color} colors={colors}/> )}
        </div>
    )
}

export default Pallete