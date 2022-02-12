import { cleanup, render, screen } from "@testing-library/react";
import FooterHighlight from "./FooterHighlight";
import React from 'react';
afterEach(cleanup);
test("Testing FooterHighlight",()=>{
    render(<FooterHighlight />);
    expect(screen.getByTestId("highlight")).toBeInTheDocument();
});