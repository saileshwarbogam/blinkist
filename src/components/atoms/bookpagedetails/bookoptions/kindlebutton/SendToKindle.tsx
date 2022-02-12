import React from 'react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Button } from '@mui/material';
import useStyle from '../../../../../Theme';

const SendToKindle = () => {
    const classes = useStyle();
  return (
    <Button
    endIcon={ <ArrowForwardIcon />}
    variant="text"
    component="button"
    className={classes.sendToKindle}
  >
   Send to Kindle
  </Button>
  );
};

export default SendToKindle;