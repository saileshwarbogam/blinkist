import { Button } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import AddIcon from "@mui/icons-material/Add";
import useStyle from '../../../Theme';

const AddToLibraryButton = () => {
    const classes = useStyle();
  return (
    <Link to="/bookdetails" style={{ textDecoration: "none" }}>
    <Button
      variant="text"
      startIcon={<AddIcon />}
      className={classes.addToLibBtn}
      data-testid = "AddToLibrary"
    >
      Add to Library
    </Button>
  </Link>
  );
};

export default AddToLibraryButton;
