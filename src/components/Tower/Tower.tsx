import styled from "styled-components"
import { Player } from "../Player/Player"

export const Tower = () => {
    return (
        <TowerContainer>
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