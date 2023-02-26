import styled from 'styled-components';

export const TshirtImg= styled.img`
    height: 150px;
    width: 150px;
`

export const InfoTshirtDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const AddCartButtonStyle = styled.button`
    height: 30px;
    width: 100px;
    border-radius: 10%;
    border-style: none;
    &:hover{
        transform: scale(1.10);
        transition: .3s;
        background-color: #ffd6bc;
    }

`
export const ImageWithInfoDiv = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    &:hover{
        transform: scale(1.10);
        transition: .3s;
        opacity: 80%;
    }
`

export const OverImageDiv = styled.div `
    position: absolute;
    top: 10%;
    left: 32%;
    color: white;
    text-shadow: black 3px 3px 3px;
`