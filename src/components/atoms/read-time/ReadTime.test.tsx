import {cleanup, render,screen} from "@testing-library/react";
import ReadTime from "./ReadTime";
import React from 'react';
afterEach(cleanup);
test("Checking Read Time Rendering",()=>{
  render(<ReadTime time="24 minutes" />);
  const text=screen.getByText("24 minutes");
  expect(text).toBeInTheDocument();
});