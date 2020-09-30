import React from 'react'

import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';


const ArrowComp = ({direction, clickFunction}) =>{

    const icon = direction === 'left' ? <ArrowBackIosIcon /> : <ArrowForwardIosIcon />;

    return <div onClick={clickFunction}>{icon}</div>;
}

export default ArrowComp;