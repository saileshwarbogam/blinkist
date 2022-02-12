import { render, screen } from "@testing-library/react";
import CurrentBar from "./CurrentBar";
import React from 'react';
it('Checking the CurrentBar',()=>{
    render(<CurrentBar />);
    expect(screen.getByTestId("CurrentBar")).toBeInTheDocument();
 });