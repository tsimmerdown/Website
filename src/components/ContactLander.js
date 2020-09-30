import React from 'react';
import styled from 'styled-components';

import { Typography, Button } from '@material-ui/core'
import { Link } from 'react-router-dom';

const Bar = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    top: 70vh;
    height: 30vh;
    align-items: center;
    background-image: url("./Images/coffee2.jpg");
`

const TextCont = styled.div`
    display: flex;
    position: relative;
    padding-top: 10vh;
    text-align: center;
    color: white;
`

const ContactButton = styled(Button)`
    margin: 3vh;
    background-color: black;
    color: #CD853F;
`
const Layer = styled.div`
    background-color: rgba(205,133,63, 0.7);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
`

const ContactLander = () => {
    return <Bar>
        <Layer />
        <TextCont>
            <Typography variant="h2">Interested in working with me?</Typography>
        </TextCont>
        <Link to="/Contact" style={{textDecoration: "none"}}><ContactButton variant="contained" >Contact me</ContactButton></Link>

    </Bar>
}

export default ContactLander;