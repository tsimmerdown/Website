import React from 'react';
import styled from 'styled-components';

import { Typography } from '@material-ui/core'
import Carousel from 'react-material-ui-carousel'

import CarouselSlide from './CarouselSlide';
import { SLIDE_INFO } from '../constant'


const ProjCont = styled.div`
    position: relative;
    top: 70vh;
    display: flex;
    flex-direction: row
`

const ImageSlider = styled(Carousel)`
    margin: 10vh; 
`

const Text = styled.div`
    margin: 20vh 10vh 20vh 20vh;
    position: relative;
    z-index: 10;
`

const Projects = () => {

    const contents = SLIDE_INFO;

    return (
        <ProjCont>
            <Text>
                <Typography variant="h5" style={{ color: "#CD853F" }}>Projects</Typography>
                <Typography variant="h2">Things I have worked on</Typography>
            </Text>
            <ImageSlider animation="fade">
                {
                contents.map((content, i) => <CarouselSlide content={content} key={i} />)
                }
            </ImageSlider>
        </ProjCont>
    );
}
export default Projects;