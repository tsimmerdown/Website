import React from 'react';
import styled from 'styled-components';


import { Card } from '@material-ui/core';


const Cards = styled(Card)`
    display: flex;
    align-items: flex-end;
    background-size: cover;
    width: 80vh;
    min-height: 40vh; 
`

const TextCont = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 5vh;
    width: 100%;
    background-color: #000000B3;
    text-align: center;
    color: white;
`

const CarouselSlide = ({content}) => {

    return (
        <Cards style={{backgroundImage: content.backgroundImage}}>
           <TextCont>{content.title}</TextCont>
        </Cards>
    );
}
export default CarouselSlide;