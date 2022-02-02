import React, { FunctionComponent, useContext } from "react"
import styled from "styled-components"
import { PlayerDynamicsContext } from "../../views/GameView"


interface Props {
    x?: number 
    y?: number 
}

export const Player = ():JSX.Element => {


    return (
        <PlayerDynamicsContext.Consumer>
            {context => (
                <PlayerIcon x={context?.playerDynamics.position.x || 0} y={context?.playerDynamics.position.y || 0}>
            
                </PlayerIcon>
            )}
        </PlayerDynamicsContext.Consumer>
        
        
    )
}

const PlayerIcon = styled.div<Props>`
    position: absolute;
    bottom: ${props => props.y}px;
    left: ${props => props.x}px;
    width: 30px;
    height: 30px;
    background-color: #555;
`