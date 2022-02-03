import styled from "styled-components"
import { Player } from "../Player/Player"
import { PressedKeys } from "../../views/GameView"

type PushArrFn = (oldState: PressedKeys) => PressedKeys

interface Props {
    setPressedKeys: (param: PushArrFn) => void 
}



type StringKeys = Extract<keyof PressedKeys, string>

// function isKey(key: StringKeys | string): key is StringKeys {
//     return (key as StringKeys).ArrowUp !== undefined;
// }

export const Tower = ({setPressedKeys}:Props) => {

    const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
        const param: "ArrowUp" | "ArrowLeft" | "ArrowRight" | " " = e.key
        setPressedKeys((oldState) => {
            if (oldState[param]===true) {
                return oldState 
            }
            oldState[param] = true;
            return oldState 
        })
    }

    const handleKeyUp = (param: string):void => {
        setPressedKeys((oldState) => {
            if (param in oldState){
                if (oldState[param]===false) {
                    return oldState
                }
                oldState[param] = false;
                return oldState; 
            }
            return oldState
        })
    }

    return (
        <TowerContainer 
                tabIndex={-1} 
                onKeyDown={(e) => handleKeyDown(e)}
                onKeyUp={(e) => handleKeyUp(e.key)}>
            <h1>Tower frame</h1>
            <Player />
        </TowerContainer>
    )
}



const TowerContainer = styled.div`
    border:10px solid black;
    width: 100%;
    max-width: 500px;
    height: 100vh;
    max-height: 1000px;
`