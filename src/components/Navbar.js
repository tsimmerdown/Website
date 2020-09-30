import React from 'react';
import styled from 'styled-components'

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

import ScrollChange from './ScrollChange'
import { Link } from 'react-router-dom';

const Image = styled.div`
    background-image: url("./Images/me.svg");
    background-size: contain;
    background-repeat: no-repeat;
    height: 5vh;
    width: 5vh;
    `

const Navbar = () => {

    const navbarItems = ["About", "Skills","Projects"];

    return (
        <ScrollChange>
            <AppBar position="sticky" style={{ background: "transparent", boxShadow: "none", zIndex: "5" }}>
                <Toolbar>
                    <a href="#Home" style={{flexGrow:"1"}}><Image/></a>
                    {navbarItems.map((item, key) => <Button style={{ color: "white" }} href={`#${item}`} key={key}>{item}</Button>)}
                    <Link to="/Contact" style={{textDecoration: "none"}}><Button style={{ color: "white" }}>Contact</Button></Link>
                </Toolbar>
            </AppBar>
        </ScrollChange>
    );
}

export default Navbar;