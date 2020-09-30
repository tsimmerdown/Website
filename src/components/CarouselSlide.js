import React from 'react';
import styled from 'styled-components';


import { Card } from '@material-ui/core';


const Cards = styled(Card)`
    text-align: center;
    background-size: cover;
    width: 80vh;
    min-height: 40vh; 
`

const CarouselSlide = ({content}) => {

    return (
        <Cards style={{backgroundImage: content.backgroundImage}}>
           {content.title}
        </Cards>
    );
}
export default CarouselSlide;