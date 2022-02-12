import { cleanup, render, screen } from "@testing-library/react";
import Heading from "./Heading";
import React from 'react';
afterEach(cleanup);
test("Testing Heading",()=>{
   render(<Heading />);
   expect(screen.getByText("Trending blinks")).toBeInTheDocument();
});