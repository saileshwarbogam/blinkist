import { cleanup, render, screen } from "@testing-library/react";
import NavItem from "./NavItem";
import React from 'react';
afterEach(cleanup);
test("Testing NavItem",()=>{
   render(<NavItem name="testing"/>);
   expect(screen.getByText("testing")).toBeInTheDocument();
});