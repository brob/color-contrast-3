import React from 'react'

import { Link } from "@reach/router"
import Pallete from './pallete'

import styled from 'styled-components'

const Chooser = (props) => {
    return (
        <div className={props.className}>
            {console.log(props)}
            {props.palletes.map((pallete, index) => {
                console.log(pallete)
                return (
                    <Link to={pallete.id} key={index}>
                        test
                    </Link>
                )
            })}
        </div>
    )
}

const StyledChooser = styled(Chooser)`
    background: red;
`

export default StyledChooser