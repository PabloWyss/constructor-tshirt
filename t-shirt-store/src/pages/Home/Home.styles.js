import styled from 'styled-components';


export const GridDiv = styled.div `
    display: grid;
    align-items: center;
    justify-content: center;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
    height: 90vh;
    aspect-ratio: 1/1;
`

export const HomeDiv= styled.div `
    display: flex;
    justify-content: center;
`