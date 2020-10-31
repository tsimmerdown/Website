import React from 'react';
import styled from 'styled-components'
import { motion } from "framer-motion";

import { Typography, Breadcrumbs, Link, TextField} from '@material-ui/core';


const LargeCont = styled(motion.div)`

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

const ContactForm = styled.form`
    margin-right: 5vh;
`
const ContactList = styled.div`
    margin-top: 10vh;
`
const TextSpan = styled.p`
    color: grey;
`
const Submit = styled.input`
  height: 5vh;
  margin-top: 2vh;
  background-color: #CD853F;
  border-radius: 5px;
  font-size: 14px;
  padding: 1vh;
  font-weight: 600;
  text-shadow: none;
`

const Contact = () => {
    return <LargeCont>
        <Banner>
            <motion.div initial={{y: -20, opacity: 0}} animate={{y: 0, opacity: 1}} transition={{ duration: 0.5}}><Header variant="h3">Contact Me</Header></motion.div>
            <Breadcrumbs aria-label="breadcrumb" style={{ margin: "2vh" }}>
                <Link color="inherit" href="/#Home" style={{ color: "#CD853F" }}> Home</Link>
                <Typography color="textPrimary">Contact</Typography>
            </Breadcrumbs>
        </Banner>
        <ContactCont>
        <motion.div initial={{y: -20, opacity: 0}} animate={{y: 0, opacity: 1}} transition={{delay: 0.2, duration: 0.5}}>
            <ContactForm action="/ajax/send" method="POST" onSub enctype="multipart/form-data" name="EmailForm" role="form" autoComplete>
                <Typography variant="h4">Get in touch</Typography>
                <div style={{ display: "flex", flexDirection: "column" }}>
                    <div>
                        <TextField label="Name" name="name" variant="outlined" style={{ margin: "5vh 2vh 2vh 0", width: "30vh" }} required/>
                        <TextField label="Email" name="email" variant="outlined" style={{ marginTop: "5vh", width: "30vh" }} required/>
                    </div>
                    <TextField label="Subject" name="subject" variant="outlined" style={{ marginBottom: "2vh" }} />
                    <TextField
                        id="outlined-multiline-static"
                        label="Message"
                        name="message"
                        multiline
                        rows={4}
                        variant="outlined" 
                        required
                        />
                </div>
                <Submit type="submit" value="SEND MESSAGE"/>
            </ContactForm>
            </motion.div>
            <motion.div initial={{y: -20, opacity: 0}} animate={{y: 0, opacity: 1}} transition={{delay: 0.5, duration: 0.5}}>
            <ContactList>
                <Typography variant="h5">My Number</Typography>
                <TextSpan>(416) 409-7637</TextSpan>
                <Typography variant="h5">My Email</Typography>
                <TextSpan>stephentsim096@gmail.com</TextSpan>
               {/*  <Typography variant="h5">Contact Number</Typography>
                <TextSpan>+1 (123) 456 7890</TextSpan> */}
            </ContactList>
            </motion.div>
        </ContactCont>
    </LargeCont>
}

export default Contact;