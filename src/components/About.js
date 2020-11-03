import React from 'react';
import styled from 'styled-components'

import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import GetAppIcon from '@material-ui/icons/GetApp';
import GitHubIcon from '@material-ui/icons/GitHub';
import IconButton from '@material-ui/core/IconButton';
import LinkedInIcon from '@material-ui/icons/LinkedIn';


const AboutCont = styled(Container)`
    position: relative;
    top: 70vh;
    padding: 5vh 5vh 0 5vh;
`

const Image = styled.div`
    background-image: url("./Images/stephen.jpg");
    height: 60vh;
    width: 100vh;
    background-size:     cover;                      /* <------ */
    background-repeat:   no-repeat;
    background-position: center center;  

`
const Quote = styled(Typography)`
    text-align: center;
    margin: 10vh;
`
const OverviewCont = styled(Container)`
    display: flex;
    
`
const Heading = styled(Typography)`
    margin-top: 1vh;
`
const Resume = styled(Button)`
    background-color: #CD853F;
    width: 100%;
`
const ContactIcons = styled.div`
    display: flex;
    margin: 2vh 5vh;
`
const About = () => {
    return <AboutCont>
        <Quote variant="h4">"Just don't give up trying to do what you really want to do. Where there is INSPIRATION I don't think you can go wrong"</Quote>
        <OverviewCont>
            <Image />
            <Container style={{fontSize: "20px"}}>
                <Heading variant="h5" style={{ color: "#CD853F", }}>ABOUT</Heading>
                <Heading variant="h2">Stephen Tsim</Heading>

                <p>My favourite things to do are building scalable applications that cater to vast number of users and designing beautiful UI to support such applications.</p>
                <p>I love crafting software that has an impact on the world and leaves a mark for generations to come.</p>
                <p style={{ marginBottom: "5vh" }}>I am a Computer Engineering graduate who specializes in web development and backend development.</p>
                <a href="./Stephen's Resume.pdf" download style={{textDecoration: "none"}}><Resume><GetAppIcon />Download Resume</Resume></a>
                <ContactIcons>
                    <IconButton color="inherit" aria-label="menu" style={{flexGrow: "1"}} >
                        <a href="https://github.com/tsimmerdown" target="blank" style={{width:"23vh"}}><GitHubIcon/></a>
                    </IconButton>
                    <IconButton color="inherit" aria-label="menu" style={{flexGrow: "1"}}>
                        <a href="https://www.linkedin.com/in/stephen-tsim" target="blank" style={{width:"23vh"}}><LinkedInIcon/></a>
                    </IconButton>
                </ContactIcons>
            </Container>
        </OverviewCont>
    </AboutCont>
}

export default About;