import React from 'react';
import styled from 'styled-components'
import Typography from '@material-ui/core/Typography';

const Div = styled.div`
    background-image: url("./Images/coffee2.jpg");

  /* Set a specific height */

  /* Create the parallax scrolling effect */
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 80vh;
    width: 100%;
    top: 0px;
    position: absolute;

    display: flex;
    align-items: center;
`

const Text = styled.div`
    color: white;
    margin-left: 15vh;
`
const BigText = styled.b`
    font-size: 70px;
`

const Home = () => {
    return <Div>
        <Text>
        <Typography variant="h3">My name is <BigText>Stephen</BigText> <br></br>and I’m a <BigText>Web Developer</BigText></Typography><br></br>
        Enjoy all the website content, most importantly check out my skills and courses. Cheers!!!
        </Text>
    </Div>
}

export default Home;