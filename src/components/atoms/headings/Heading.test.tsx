import { cleanup, render, screen } from "@testing-library/react";
import Heading from "./Heading";
import React from 'react';
import "@testing-library/jest-dom"
afterEach(cleanup);
test("Testing Heading",()=>{
   render(<Heading />);
   expect(screen.getByText("Trending blinks")).toBeInTheDocument();
});