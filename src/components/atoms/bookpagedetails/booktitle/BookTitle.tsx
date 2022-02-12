import { Typography } from '@mui/material';
import React from 'react';
import useStyle from '../../../../Theme';

const BookTitle = () => {
    const classes = useStyle();
  return (
    <Typography
        className={classes.bookTitle}
        variant="h1"
      >
        Beyond Entrepreneurship 2.0
      </Typography>
  );
};

export default BookTitle;
