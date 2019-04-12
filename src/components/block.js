import React from 'react'
import Contrast from './contrast'
import styled from 'styled-components'

const Block = (props) => {

    const {
        color,
        background
    } = props

    return (
            <div className={props.className}>
                <Contrast foreground={color.value} background={background.value} />
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