import React from "react";
import { useScrollTrigger } from "@material-ui/core";

const ScrollHandler = props => {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 700,
    target: props.window ? window() : undefined
  });

  return React.cloneElement(props.children, {
    style: {
      backgroundColor: trigger ? "#CD853F" : "transparent",
      color: trigger ? "white" : "black",
      transition: trigger ? "0.5s" : "0.5s",
      boxShadow: "none",
      padding: "10px 0px"
    }
  });
};

const ScrollChange = props => {
  return <ScrollHandler {...props}>{props.children}</ScrollHandler>;
};

export default ScrollChange;
