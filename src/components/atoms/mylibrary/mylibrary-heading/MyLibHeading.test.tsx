import {cleanup, render,screen} from "@testing-library/react";
import MyLibHeading from "./MyLibHeading";
import React from 'react';
import "@testing-library/jest-dom"
afterEach(cleanup);
test("Checking MyLibraryHeading",()=>{
   render(<MyLibHeading />);
   expect(screen.getByText("My Library")).toBeInTheDocument();
});