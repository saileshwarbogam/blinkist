import { render, screen } from "@testing-library/react";
import FinishedBar from "./FinishedBar";
import React from 'react';
import "@testing-library/jest-dom"
it('Checking the FinishedBar',()=>{
    render(<FinishedBar />);
    expect(screen.getByTestId("FinishedBar")).toBeInTheDocument();
 });