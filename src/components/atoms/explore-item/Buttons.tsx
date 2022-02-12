import { Button} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import useStyle from "../../../Theme";

interface ButtonType {
  itemname: string;
  itemicon: React.ReactElement;
  handleChange: () => void;
}

const Buttons = (props: ButtonType) => {
    const classes = useStyle();
  return (
    <Link to="/explore" style={{textDecoration:"none"}}>
      <Button
        variant="text"
        className={classes.buttons}
        startIcon = {props.itemicon}
        onClick = {()=>props.handleChange()}
      >
    {props.itemname}
    </Button>
    </Link>
  );
};

export default Buttons;
