import { cleanup, render ,screen} from "@testing-library/react";
import AvatarLogin from "./AvatarLogin";
import "@testing-library/jest-dom"
import React from 'react';
afterEach(cleanup);
it("Testing AvatarLogin",()=>{
    render(<AvatarLogin></AvatarLogin>);
    expect(screen.getByTestId("AvatarLogin")).toBeInTheDocument();
})