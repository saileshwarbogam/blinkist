import { cleanup, render,screen } from "@testing-library/react";
import MainSearchIcon from "./MainSearchIcon";
import React from 'react';
import "@testing-library/jest-dom"
afterEach(cleanup);
test("Testing SearchIcon",()=>{
   render(<MainSearchIcon />);
   expect(screen.getByTestId("MainSearchIcon")).toBeInTheDocument();
});