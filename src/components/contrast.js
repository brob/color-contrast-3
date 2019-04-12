import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import axios from 'axios'

// https://webaim.org/resources/contrastchecker/?fcolor=FF0000&bcolor=FFFFFF&api

const Contrast = (props) => {

    let {
        foreground,
        background
    } = props

    const [data, setData] = useState()

    foreground = foreground.replace("#", "")
    background = background.replace("#", "")

    useEffect(() => {
        axios.get(`https://webaim.org/resources/contrastchecker/?fcolor=${foreground}&bcolor=${background}&api`)
        .then(function (response) {
            setData(response.data)
        })
        .catch(function (error) {
            console.log(error);
            setData('error')
        })
    }, [])

    // TODO determind contrast against black and white

    return (
        <div className={props.className}>
            {!!data ? data.ratio : 'loading'}
        </div>
    )
}

const StyledContrast = styled(Contrast)`
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`

export default StyledContrast