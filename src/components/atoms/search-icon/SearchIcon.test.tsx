import {render,cleanup,screen} from '@testing-library/react';
import SearchIcon from './SearchIcon';
import React from 'react';
afterEach(cleanup);
test("Testing SearchIcon",()=>{
   render(<SearchIcon />);
   expect(screen.getByTestId("SearchIcon")).toBeInTheDocument();
});