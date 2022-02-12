import { cleanup, render, screen } from "@testing-library/react";
import NavHead from "./NavHead";
import React from 'react';
import "@testing-library/jest-dom"
afterEach(cleanup);
test("Testing NavHead",()=>{
   render(<NavHead name="testing" />);
   expect(screen.getByText("testing")).toBeInTheDocument();
});