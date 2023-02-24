import styled from 'styled-components';

export const TshirtImg= styled.img`
    height: 150px;
    width: 150px;
    &:hover{
        transform: scale(1.10);
        transition: .3s;
    }
`

export const InfoTshirtDiv = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
`

export const AddCartBurton = styled.button`
    height: 30px;
    width: 100px;
    
`