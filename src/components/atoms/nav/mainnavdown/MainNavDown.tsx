import { Typography } from '@mui/material';
import React from 'react'
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';

interface NavDownProps {
    handleClick : (event: React.MouseEvent<HTMLElement>)=>void
  }
const MainNavDown = (props : NavDownProps) => {
  return (
    <Typography onClick={props.handleClick}>
      <KeyboardArrowDownOutlinedIcon
    sx={{backgroundBlendMode:'#042330',}}>
      
    </KeyboardArrowDownOutlinedIcon>
    </Typography>
  );
}

export default MainNavDown