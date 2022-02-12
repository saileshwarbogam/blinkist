import { Grid } from '@mui/material';
import React from 'react';
import useStyle from '../../../Theme';
import AvatarLogin from '../../atoms/avatar/AvatarLogin';
import AvatarLogout from "../../atoms/avatar/AvatarLogout"
import MainNavDown from '../../atoms/nav/mainnavdown/MainNavDown';
interface Handle {
  handleClick: (event: React.MouseEvent<HTMLElement>) => void;
  isAuthenticated : boolean;
}

 const AvatarDrop = (props : Handle) => {
     const classes = useStyle();
  return (
    <Grid container  className={classes.avatarDrop} data-testid="avatarDrop">
    <Grid item>
    {
        props.isAuthenticated ? <AvatarLogin/> : <AvatarLogout/>
      }
    </Grid>
    <Grid item className={classes.avatarNavDown}>
    <MainNavDown handleClick={props.handleClick}/>
    </Grid>
  </Grid>
  );
};

export default AvatarDrop;
