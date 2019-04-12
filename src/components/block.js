import React, { useState, useEffect } from 'react'
import Contrast from './contrast'
import styled from 'styled-components'
import axios from 'axios'

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
        axios.all([
            axios.get(`https://webaim.org/resources/contrastchecker/?fcolor=${color}&bcolor=${background}&api`),
            axios.get(`https://webaim.org/resources/contrastchecker/?fcolor=000000&bcolor=${color}&api`)
        ])
        .then(axios.spread((colorsResponse, labelResponse) => {
            setData({
                ...colorsResponse.data,
                blackContrast: labelResponse.data.AA
            })
        }))
        .catch(error => {
            console.log(error);
            setData('error')
        })
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