import { cleanup, render, screen } from "@testing-library/react";
import ReadNow from "./ReadNow";
import React from 'react';
afterEach(cleanup);
it('Checking the ReadNow',()=>{
    render(<ReadNow />);
    const btn=screen.getByRole("button");

    expect(btn).toBeInTheDocument();
});