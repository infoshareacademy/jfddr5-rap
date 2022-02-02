import React, { FunctionComponent } from "react"
import styled from "styled-components"

interface Props {
    x?: number
    y?: number
}

export const Player = ({ x, y }: Props):JSX.Element => {
    return (
        <PlayerIcon x={300} y={300}>
            A
        </PlayerIcon>
    )
}

const PlayerIcon = styled.div<Props>`
    position: absolute;
    bottom: ${props => props.y}px;
    left: ${props => props.x}px;
    width: 100px;
    height: 100px;
    background-color: #555;
`