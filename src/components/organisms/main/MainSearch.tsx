import { TextField,InputAdornment } from '@mui/material';
import React from 'react';
import useStyle from '../../../Theme';
import SearchIcon from '../../atoms/search-icon/SearchIcon';

interface Handle{
    search:(item:string)=>void;
  }
  

const MainSearch = (props: Handle) => {
    const classes = useStyle();
  return (
      <TextField
        variant = "standard"
        placeholder="Search by title or author"
        data-testid="TextField"
        InputProps={{
            classes :{
                input : classes.resize,
            },
            style: {
              paddingBottom: 12
            },
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        className={classes.textField}
        onChange ={(e)=>{
            props.search(e.target.value.toLowerCase());
        }}
      />
  );
};

export default MainSearch;
