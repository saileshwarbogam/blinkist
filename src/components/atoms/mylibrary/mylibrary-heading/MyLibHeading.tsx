import { Typography } from '@mui/material';
import useStyle from '../../../../Theme';

const MyLibHeading = () => {
    const classes = useStyle();
  return (
      <Typography variant='h1' className={classes.myLibraryHead}>
          My Library
      </Typography>
  );
};

export default MyLibHeading;
