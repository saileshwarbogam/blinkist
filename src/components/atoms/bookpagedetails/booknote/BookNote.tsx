import { Typography } from '@mui/material';
import React from 'react';
import useStyle from '../../../../Theme';

const BookNote = () => {
    const classes = useStyle();
  return (
  <Typography
    className={classes.bookNote}
    variant="subtitle2"
  >
      Turning Your Business into an Enduring Great Company
  </Typography>
);
};

export default BookNote;