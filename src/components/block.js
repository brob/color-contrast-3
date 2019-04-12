import React, { useState, useEffect } from 'react'
import Contrast from './contrast'
import styled from 'styled-components'
import axios from 'axios'
let contrast = require('wcag-contrast');
// https://webaim.org/resources/contrastchecker/?fcolor=FF0000&bcolor=FFFFFF&api

const Block = (props) => {

    let {
        color,
        background
    } = props

    const [data, setData] = useState({})
    color = color.value.replace("#", "")
    background = background.value.replace("#", "")

    useEffect(() => {
        let ratio = contrast.hex(color, background).toFixed(2);
        let score = contrast.score(ratio);
        let blackRatio = contrast.score(contrast.hex(color, "#000"));

        
        if (blackRatio == "") {
            blackRatio = false
        } else {
            blackRatio = "pass"
        }

        setData({
            ratio,
            score,
            blackRatio
        });

        
    }, [])

    return (
            <div className={props.className}>
                <Contrast {...data} />
            </div>
    )
}

const StyledBlock = styled(Block)`
    background: ${props => props.color.value};
    height: ${props => `calc((100vh / ${props.colors.length + 1}) - 4vh)`};
    width: ${props => `calc((100vh / ${props.colors.length + 1}) - 4vh)`};
    margin: 2vh 1vh;
    &:first-child {
        margin-left: 2vh;
    }
    &:last-child {
        margin-right: 2vh;
    }
`

export default StyledBlock