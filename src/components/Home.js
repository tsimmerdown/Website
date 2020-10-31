import React from 'react';
import styled from 'styled-components'
import Typography from '@material-ui/core/Typography';
import { motion } from 'framer-motion';

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
const BigText = styled(motion.span)`
    font-size: 70px;
`

const Home = () => {
    return <Div>
        <Text>
        <Typography variant="h3">My name is <BigText initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: "1"}}>Stephen</BigText>
        <br></br>and I’m a <BigText initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: "0.75", delay:"0.5"}}>Web Developer</BigText></Typography><br></br>
        Enjoy all the website content, most importantly check out my skills and projects. Cheers!!!
        </Text>
    </Div>
}

export default Home;