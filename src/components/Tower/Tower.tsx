import styled from "styled-components"
import { Player } from "../Player/Player"

type PushArrFn = (param: string[]) => string[]

interface Props {
    setPressedKeys: (param: PushArrFn) => void 
}

export const Tower = ({setPressedKeys}:Props) => {

    const HandleKeyDown = (param: string):void => {
        setPressedKeys((oldState: string[]) => {
            console.log(param)
            if (oldState.includes(param)) {
                return oldState 
            }
            const newArr: string[] = oldState;
            newArr.push(param)
            console.log(newArr)
            return newArr 
        })
    }

    const HandleKeyUp = (param: string):void => {
        setPressedKeys((oldState: string[]) => {
            const newArr: string[] = oldState;
            if (newArr.includes(param)) {
                const i = newArr.indexOf(param);
                newArr.splice(i, 1);
            }
            console.log(newArr)
            return newArr 
        })
    }

    return (
        <TowerContainer 
                tabIndex={-1} 
                onKeyPress={(e) => HandleKeyDown(e.locale)}
                onKeyUp={(e) => HandleKeyUp(e.key)}>
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