import {render,cleanup,screen} from '@testing-library/react';
import Timer from './Timer';
import React from 'react';
afterEach(cleanup);
test("Testing Timer",()=>{
   render(<Timer />);
   expect(screen.getByTestId("Timer")).toBeInTheDocument();
});