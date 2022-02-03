import { useEffect, useState } from 'react';
import { Tower } from '../components/Tower/Tower';
import React from 'react';

type Coordinates = {
    x: number
    y: number
}

export interface PlayerDynamics {
    velocity: Coordinates
    position: Coordinates
    on_ground: boolean
}

const INITIAL_PLAYER_POSITION:PlayerDynamics = {
    velocity: {
        x: 0,
        y: 0,
    },
    position: {
        x: 50,
        y: 10,
    },
    on_ground: true,
}

interface ContextPlayer {
    playerDynamics: PlayerDynamics,
    setPlayerDynamics: (param: PlayerDynamics) => void
}

export interface PressedKeys {
    "ArrowUp": boolean,
    "ArrowLeft": boolean,
    "ArrowRight": boolean,
    " ": boolean,
}

export const PlayerDynamicsContext = React.createContext<ContextPlayer | null>(null);


export const GameView = () => {

    const [playerDynamics, setPlayerDynamics] = useState<PlayerDynamics>(INITIAL_PLAYER_POSITION); 
    const [pressedKeys, setPressedKeys] = useState<PressedKeys>({
        ArrowUp: false,
        ArrowLeft: false,
        ArrowRight: false,
        " ": false,
    });

    useEffect(()=>{
        let animationFrameID: number;
        const animation = () => {
            

            animationFrameID = requestAnimationFrame(animation);
        }

        animation();

        return () => cancelAnimationFrame(animationFrameID);
    }, [])
    

    const PlayerDynamicsContextObject = {
        playerDynamics,
        setPlayerDynamics
    }

    return (
        <PlayerDynamicsContext.Provider value={PlayerDynamicsContextObject}>
            <Tower setPressedKeys={setPressedKeys}/>
        </PlayerDynamicsContext.Provider>
    )
}