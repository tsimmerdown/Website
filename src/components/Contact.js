import React from 'react';
import styled from 'styled-components'

import { Typography, Breadcrumbs, Link, TextField, Button } from '@material-ui/core';


const LargeCont = styled.div`

`
const Banner = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;    
    justify-content: center;    
    position: relative;
    bottom: 10vh;
    background-image: url("./Images/coffee2.jpg");
    height: 70vh;
    width: 100%;
`
const Header = styled(Typography)`
   color: white;
`
const ContactCont = styled.div`
    display: flex;
    align-items: center;    
    justify-content: center;    
    margin-bottom: 10vh;
`

const ContactForm = styled.div`
    margin-right: 5vh;
`
const ContactList = styled.div`
    margin-top: 10vh;
`
const TextSpan = styled.p`
    color: grey;
`

const Contact = () => {
    return <LargeCont>
        <Banner>
            <Header variant="h3">Contact Me</Header>
            <Breadcrumbs aria-label="breadcrumb" style={{ margin: "2vh" }}>
                <Link color="inherit" href="/#Home" style={{ color: "#CD853F" }}> Home</Link>
                <Typography color="textPrimary">Contact</Typography>
            </Breadcrumbs>
        </Banner>
        <ContactCont>
            <ContactForm>
                <Typography variant="h4">Get in touch</Typography>
                <div style={{ display: "flex", flexDirection: "column" }}>
                    <div>
                        <TextField label="Name" variant="outlined" style={{ margin: "5vh 2vh 2vh 0", width: "30vh" }} />
                        <TextField label="Email" variant="outlined" style={{ marginTop: "5vh", width: "30vh" }} />
                    </div>
                    <TextField label="Subject" variant="outlined" style={{ marginBottom: "2vh" }} />
                    <TextField
                        id="outlined-multiline-static"
                        label="Message"
                        multiline
                        rows={4}
                        variant="outlined" />
                </div>
                <Button variant="contained" style={{ height: '5vh', marginTop: "2vh", backgroundColor: "#CD853F" }}>Send Message</Button>
            </ContactForm>
            <ContactList>
                <Typography variant="h5">Contact Number</Typography>
                <TextSpan>+1 (123) 456 7890</TextSpan>
                <Typography variant="h5">Contact Email</Typography>
                <TextSpan>stephentsim096@gmail.com</TextSpan>
                <Typography variant="h5">Contact Number</Typography>
                <TextSpan>+1 (123) 456 7890</TextSpan>
            </ContactList>
        </ContactCont>
    </LargeCont>
}

export default Contact;