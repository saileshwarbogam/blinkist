import { Grid } from '@mui/material';
import React from 'react';
import BannerOne from '../../../atoms/banner-one/BannerOne';
import BannerTwo from '../../../atoms/banner-two/BannerTwo';

export const BannerItems = () => {
  return (
    <Grid container direction='column' rowSpacing='15px'>
    <Grid item>
        <BannerOne />
    </Grid>
    <Grid item>
        <BannerTwo />
    </Grid>
</Grid> 
  );
};
