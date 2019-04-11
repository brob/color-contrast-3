import React from 'react'

import firebase from '../firebase-config'

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
            <div>
                {/* {Object.values(data).map((color, index) => {
                    return(
                            <div key={index}
                                style={{
                                    height: '100px',
                                    width: '100px',
                                    background: color
                                }}
                            >
                                {color}
                            </div>
                    )
                })}  */}
            </div>
        </div>
    )
}

export default Pallete