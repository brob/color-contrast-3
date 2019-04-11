import React from 'react'

import { Link } from "@reach/router"

import styled from 'styled-components'

const Chooser = (props) => {
    return (
        <div className={props.className}>
            {props.palletes.map((pallete, index) => {
                return (
                    <Link className="link" to={pallete.id} key={index}>
                        <header>{pallete.id}</header>
                        <div className="colors">
                            {Object.keys(pallete.value).map((color, index) => (
                                <div className="color" key={index} style={{color:`${color}`}}></div>
                            ))}
                        </div>
                    </Link>
                )
            })}
        </div>
    )
}

const StyledChooser = styled(Chooser)`
    min-height: 100vh;
    display: flex;
    align-items: center;
    flex-wrap: wrap;

    .link {
        display: block;
        font-size: 2rem;
        position: relative;
        width: 100%;
        height: 5em;
        cursor: pointer;

        &:before {
            content: '';
            display: block;
            height: 100%;
            width: 100%;
            position: absolute;
            z-index: 1;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            background-color: #000000;
            opacity: 0;
            transition: .25s;
        }

        header {
            font-size: 1.5em;
            text-transform: uppercase;
            text-decoration: none;
            color: #ffffff;
            text-shadow: 0 0 .125em #000000;
            position: absolute;
            z-index: 2;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);

            &:after {
                content: '»';
                font-size: 1.25em;
                line-height: 1;
                opacity: 0;
                margin-left: -.5em;
                transition: .25s;
            }
        }

        .colors {
            height: 100%;
            width: 100%;
            display: flex;
        }

        .color {
            flex: 1;
            height: 100%;
            background-color: currentColor;
            display: inline-block;
        }

        &:hover {
            &:before {
                opacity: .25;
            }

            header:after {
                opacity: 1;
                margin-left: .125em;
            }
        }
    }
`

export default StyledChooser