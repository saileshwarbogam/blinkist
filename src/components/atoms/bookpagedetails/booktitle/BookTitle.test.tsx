import { render ,screen} from "@testing-library/react";
import BookTitle from "./BookTitle";
import React from 'react';
import "@testing-library/jest-dom"
it("Testing BannerOne",()=>{
    render(<BookTitle/>);
    expect(screen.getByText("Beyond Entrepreneurship 2.0")).toBeInTheDocument();
})