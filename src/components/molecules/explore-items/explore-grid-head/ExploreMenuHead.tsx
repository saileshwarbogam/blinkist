import { Grid, Typography } from '@mui/material';
import React from 'react';
import useStyle from '../../../../Theme';

const ExploreMenuHead = () => {
    const classes = useStyle();
  return (
    <Grid container sx={{paddingTop:'30px',paddingBottom:'24px'}}  >
    <Grid item xs={4}>
      <Typography
        variant="subtitle2"
        className={classes.exploreHeadTypoOne}
      >
        Explore by category
      </Typography>
    </Grid>

    <Grid item xs={4}>
      <Typography
        variant="subtitle2"
        className={classes.exploreHeadTypoTwo}
      >
        See recently added titles
      </Typography>
    </Grid>

    <Grid item xs={4}>
      <Typography
        variant="subtitle2"
        className={classes.exploreHeadTypoTwo}
      >
        See popular titles
      </Typography>
    </Grid>
  </Grid>
  );
};

export default ExploreMenuHead;
