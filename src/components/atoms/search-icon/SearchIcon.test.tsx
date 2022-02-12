import {render,cleanup,screen} from '@testing-library/react';
import SearchIcon from './SearchIcon';
import React from 'react';
import "@testing-library/jest-dom"
afterEach(cleanup);
test("Testing SearchIcon",()=>{
   render(<SearchIcon />);
   expect(screen.getByTestId("SearchIcon")).toBeInTheDocument();
});