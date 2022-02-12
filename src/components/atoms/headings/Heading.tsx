import { Typography } from '@mui/material';
import React from 'react';
import useStyle from '../../../Theme';

const Heading = () => {
    const classes = useStyle();
  return (
    <Typography
    className={classes.head}
    variant="h3"
    >

      Trending blinks
    </Typography>
  );
};
export default Heading;