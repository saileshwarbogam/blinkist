import { render, screen } from "@testing-library/react";
import FinishedBar from "./FinishedBar";
import React from 'react';
it('Checking the FinishedBar',()=>{
    render(<FinishedBar />);
    expect(screen.getByTestId("FinishedBar")).toBeInTheDocument();
 });