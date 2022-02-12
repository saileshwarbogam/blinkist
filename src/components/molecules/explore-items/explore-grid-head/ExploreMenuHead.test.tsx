import {cleanup, render,screen} from "@testing-library/react";
import ExploreMenuHead from "./ExploreMenuHead";
import React from 'react';
import "@testing-library/jest-dom"

afterEach(cleanup);
test("Checking ExploreMenuHead",()=>{
  render(<ExploreMenuHead />);
  expect(screen.getByText("Explore by category")).toBeInTheDocument();
});