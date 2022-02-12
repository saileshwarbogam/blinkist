import { Typography } from '@mui/material';
import React from 'react';
import useStyle from '../../../Theme';

const KeyIdeas = () => {
    const classes = useStyle();
  return (
    <Typography
        variant = "body2"
        className={classes.keyIdeas}
    >
        Get the key ideas from
    </Typography>
  );
};

export default KeyIdeas;
