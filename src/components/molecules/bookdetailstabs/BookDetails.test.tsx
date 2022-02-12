import {cleanup, render,screen} from "@testing-library/react";
import BookDetailsTabs from "./BookDetailsTabs";
import React from 'react';
import "@testing-library/jest-dom"

afterEach(cleanup);
test("Checking BookDetailsTabs",()=>{
  render(<BookDetailsTabs />);
  expect(screen.getByText("Synopsis")).toBeInTheDocument();
});