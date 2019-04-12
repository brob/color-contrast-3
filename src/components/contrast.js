import React from 'react'
import styled from 'styled-components'

const Contrast = (props) => {

    console.log(props)

    return (
        <div className={props.className}>
            {props.ratio}
        </div>
    )
}

const StyledContrast = styled(Contrast)`
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${props => props.blackContrast === 'pass' ? 'black' : 'white'}
`

export default StyledContrast