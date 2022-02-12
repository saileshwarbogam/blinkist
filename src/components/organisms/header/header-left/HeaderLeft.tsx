import { Grid } from '@mui/material';
import React from 'react';
import useStyle from '../../../../Theme';
import BlinkImage from '../../../atoms/blinkimage/BlinkImage';
import Explore from '../../../atoms/explore/Explore';
import MainSearchIcon from '../../../atoms/main-search-icon/MainSearchIcon';
import MyLibrary from '../../../atoms/mylibrary/mylibrary-text/MyLibrary';


interface Handle{
  handleChange:()=>void;
  icon:boolean;
}

 const HeaderLeft = (props: Handle) => {
     const classes = useStyle();
  return (
      <Grid container data-testid="HeaderLeft" className={classes.headerLeftGridMain}>
          <Grid item className={classes.headerLeftGrid}>
            <BlinkImage/>
          </Grid>
          <Grid item className={classes.headerLeftGrid}>
            <MainSearchIcon/>
          </Grid>
          <Grid item className={classes.headerLeftGrid}>
            <Explore icon={props.icon} handleChange={props.handleChange}/>
          </Grid>
          <Grid item className={classes.headerLeftGrid}>
            <MyLibrary/>
          </Grid>
      </Grid>
  );
};

export default HeaderLeft;
