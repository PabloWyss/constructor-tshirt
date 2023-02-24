import styled from 'styled-components';

export const HeaderDiv = styled.div `
    display: flex;
    justify-content: space-between;
    height: 5vh;
    min-height: 40px;
    background-color: #00bcd475;
`

export const HeaderInsideDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    gap: 3vw;
    padding-left: 1vw;
    padding-right: 1vw;
`

export const CartImg = styled.svg`
    height: 25px;
    aspect-ratio: 1/1;
    &:hover{
        transform: scale(1.20);
        border: black solid 1px;
        transition: .3s;
    }
`

export const DivCartNumber = styled.div `
    display: flex;
    align-items: center;
`

export const HeaderButton = styled.button `
    background-color: #e4d6d6;
`

export const HeaderLinks = styled.p `
    &:hover{
        transform: scale(1.20);
        transition: .3s;
        border-bottom: solid 1px black;
    }
`

