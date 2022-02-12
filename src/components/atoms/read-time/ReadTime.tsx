import { Grid, Typography } from '@mui/material';
import React from 'react';
import useStyle from '../../../Theme';
import Timer from '../timer/Timer';

interface Handle{
    time : string;
}

const ReadTime = (props : Handle) => {
    const classes = useStyle();
  return (
    <Grid container className={classes.readTimeTopography} columnSpacing="10px">
    <Grid item  >
        <Timer />  
    </Grid > 
    <Grid item >
        <Typography 
        variant='caption'
         >
            {props.time}
        </Typography>
    </Grid>
    
</Grid>
  );
};

export default ReadTime;
