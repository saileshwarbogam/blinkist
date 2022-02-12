import {render,cleanup,screen} from '@testing-library/react';
import NavUp from './NavUp';
import React from 'react';
import "@testing-library/jest-dom"

afterEach(cleanup);
test("Testing NavUp",()=>{
   render(<NavUp />);
   screen.getByTestId("navup")
   expect(screen.getByTestId("navup")).toBeInTheDocument();
});
