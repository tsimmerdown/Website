import React from 'react';
import styled from 'styled-components'

import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import LanguageIcon from '@material-ui/icons/Language';

const Logo = styled.div`
    background-repeat: no-repeat;
    background-position: center center;
    background-size: contain;
`
const SkillPage = styled.div`
    position: relative;
    top: 70vh;
    display: flex;
    flex-direction: column;
    background-color: #f7f7f7;
    padding: 10vh 10vh;
`
const Heading = styled(Typography)`
    margin-top: 1vh;
    text-align: center;
`

const Papers = styled(Paper)`
    padding: 2vh;
    text-align: center;
    align-content: center;
`


const Skills = () => {
    return <SkillPage>
        <Heading variant="h5" style={{ color: "#CD853F" }}>SKILLS</Heading>
        <Heading variant="h2" style={{ marginBottom: "5vh" }}>Technical Skills I am proficient at</Heading>
        <Grid container spacing={3}>
            <Grid item xs={3}>
                <Papers elevation={5}><Logo style={{ height: "7vh", backgroundImage: "url(./Images/react.svg)" }} /> <Typography variant="h5">React</Typography></Papers>
            </Grid>
            <Grid item xs={3}>
                <Papers elevation={5}><LanguageIcon style={{ height: "7vh", width: "7vh" }} /> <Typography variant="h5">NodeJS</Typography></Papers>
            </Grid>
            <Grid item xs={3}>
                <Papers elevation={5}><Logo style={{ height: "7vh", backgroundImage: "url(./Images/js.svg)" }} /> <Typography variant="h5">JavaScript</Typography></Papers>
            </Grid>
            <Grid item xs={3}>
                <Papers elevation={5}><Logo style={{ height: "7vh", backgroundImage: "url(./Images/java.svg)"}} /> <Typography variant="h5">Java</Typography></Papers>
            </Grid>
            <Grid item xs={3}>
                <Papers elevation={5}><Logo style={{ height: "7vh", backgroundImage: "url(./Images/python.svg)" }} /> <Typography variant="h5">Python</Typography></Papers>
            </Grid>
            <Grid item xs={3}>
                <Papers elevation={5}><Logo style={{ height: "7vh", backgroundImage: "url(./Images/html-5.svg)"}} /> <Typography variant="h5">HTML</Typography></Papers>
            </Grid>
            <Grid item xs={3}>
                <Papers elevation={5}><Logo style={{ height: "7vh", backgroundImage: "url(./Images/css-3.svg)"}} />  <Typography variant="h5">CSS</Typography></Papers>
            </Grid>
        </Grid>
    </SkillPage>
}


export default Skills