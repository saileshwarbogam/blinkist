import {cleanup, render,screen} from "@testing-library/react";
import FooterNavListThree from "./FooterNavListThree";
import React from 'react';
import "@testing-library/jest-dom"

afterEach(cleanup);
test("Checking Footer Nav List Three Rendering",()=>{
 render(<FooterNavListThree />);
  expect(screen.getByTestId("FooterNavList3")).toBeInTheDocument();
});