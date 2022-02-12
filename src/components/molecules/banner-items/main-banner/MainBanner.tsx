import { Grid } from '@mui/material';
import React from 'react';
import useStyle from '../../../../Theme';
import BannerImage from '../../../atoms/banner-image/BannerImage';
import { BannerItems } from '../banner-item/BannerItems';

const MainBanner = () => {
    const classes = useStyle();
  return (
      <Grid container className={classes.mainBanner}>
          <Grid item className={classes.mainBannerItem}>
            <BannerItems/>
          </Grid>
          <Grid item>
            <BannerImage/>
          </Grid>
      </Grid>
  );
};

export default MainBanner;
