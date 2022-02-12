import { render, screen } from "@testing-library/react";
import FooterCopyRight from "./FooterCopyRight";
import React from 'react';
import "@testing-library/jest-dom"
it('Checking the footercopyright',()=>{
    render(<FooterCopyRight/>);
    expect(screen.getByTestId("copyright")).toBeInTheDocument();
 });