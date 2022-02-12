import { Typography } from '@mui/material';
import React from 'react';
import useStyle from '../../../Theme';

const BannerTwo = () => {
    const classes = useStyle();
  return (
    <Typography
    variant="subtitle2"
    width="461px"
    className={classes.bannerTwo}
  >
   Everything you need to know about thriving on a shoestring budget, making your first million, and hiring right from the start.
  </Typography>
  );
};
export default BannerTwo;
