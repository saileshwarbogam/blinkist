import {cleanup, render,screen} from "@testing-library/react";
import { MemoryRouter } from 'react-router-dom';
import BlinkHighlight from "./BlinkHighlight";
import React from 'react';
import "@testing-library/jest-dom"


afterEach(cleanup);
test("Checking BlinkHighlight",()=>{
   render(<MemoryRouter> <BlinkHighlight /> </MemoryRouter>);
   expect(screen.getByTestId("blinkHighlight")).toBeInTheDocument();
});