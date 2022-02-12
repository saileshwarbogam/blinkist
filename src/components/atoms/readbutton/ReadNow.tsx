import { Button } from '@mui/material';
import React from 'react';
import useStyle from '../../../Theme';

const ReadNow = () => {
    const classes = useStyle();
  return (
    <Button
    className={classes.readNow}
    variant="outlined"
    component="button"
  >
   Read now
  </Button>
  );
};

export default ReadNow;
