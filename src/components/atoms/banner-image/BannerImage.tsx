import { Card, CardMedia } from '@mui/material';
import React from 'react';
import useStyle from '../../../Theme';
import bannerimg from "../assets/bannerimg.png";

const BannerImage = () => {
    const classes =useStyle();
  return (
      <Card className={classes.bannerImage}>
          <CardMedia data-testid="BannerImage" component="img" image={bannerimg} alt ="main-image"/>
      </Card>
  );
};

export default BannerImage;