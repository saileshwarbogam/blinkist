
import {cleanup, render,screen} from "@testing-library/react";
import { BannerItems } from "./BannerItems";
import React from 'react';
import "@testing-library/jest-dom"

afterEach(cleanup);
test("Checking BannerItems",()=>{
  render(<BannerItems />);
  expect(screen.getByText("Explore Books on entrepreneurship")).toBeInTheDocument();
});