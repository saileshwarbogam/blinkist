import {cleanup, render,screen} from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import BookDetailsGrid from "./BookDetailsGrid";
import React from 'react';
import "@testing-library/jest-dom"

afterEach(cleanup);
test("Checking Book Details Rendering",()=>{
  render(<MemoryRouter><BookDetailsGrid btn={true} handleFinish={()=>console.log("Hello")} /></MemoryRouter>);
  expect(screen.getByText("Finished Reading")).toBeInTheDocument();
});