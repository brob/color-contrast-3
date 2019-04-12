import React from 'react'
import Block from './block'
import styled from 'styled-components'

const Stripe = (props) => {

    const {background, colors} = props
    
    const blocks = colors.filter(color => color.name !== background.name )

    return (
            <section className={props.className}>
                <header>
                    <span>{background.name}</span>
                    <span>{background.value}</span>
                </header>
                <div className="background">
                    {blocks.map((color, index) => <Block key={index} background={background} color={color} colors={colors}/>)}
                </div>
            </section>
    )
}

const StyledStripe = styled(Stripe)`
    width: 100vw;
    display: flex;
    align-items: center;

    header {
        width: 15vw;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        padding: 1vw

        span {
            display: block;
            width: 100%;
        }
    }

    .background {
        width: 85vw;
        background: ${props => props.background.value};
        display: flex;
        ${props => `height: calc(100vh / ${props.colors.length + 1});`}
    }
`

export default StyledStripe