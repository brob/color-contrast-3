import React from 'react'

import styled from 'styled-components'

const Block = (props) => {

    return (
            <div className={props.className}>
                hey
            </div>
    )
}

const StyledBlock = styled(Block)`
    background: ${props => props.color.value};
    height: ${props => `calc((100vh / ${props.colors.length + 1}) - 4vh)`};
    width: ${props => `calc((100vh / ${props.colors.length + 1}) - 4vh)`};
    margin: 2vh 1vh;
    &:first-child {margin-left: 2vh}
    &:last-child {margin-right: 2vh}
`

export default StyledBlock