import { Button } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import useStyle from '../../../../../Theme';


interface Handle {
    handleFinish: (item: string) => void;
    bookName: string;
    btn: boolean;
  }
const FinishReading = (props: Handle) => {

    const classes = useStyle();
  return (
    <Link to="/" style={{ textDecoration: "none" }}>
    <Button
      onClick={()=>{props.handleFinish(props.bookName)}}
      className={classes.finishReading}
      sx={{
        display: props.btn ? "none" : "",
        "&:hover": {
          backgroundColor: "#2CE080",
        },
      }}
      variant="contained"
      component="button"
    >
      Finished Reading
    </Button>
  </Link>
  );
};
export default FinishReading;