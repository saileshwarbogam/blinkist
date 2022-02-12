import {cleanup, render,screen} from "@testing-library/react";
import MainBanner from "./MainBanner";
import React from 'react';
import "@testing-library/jest-dom"
afterEach(cleanup);
test("Checking MainBanner",()=>{
  render(<MainBanner />);
  expect(screen.getByText("Explore Books on entrepreneurship")).toBeInTheDocument();
});