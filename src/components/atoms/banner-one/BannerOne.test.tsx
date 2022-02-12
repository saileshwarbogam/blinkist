import { render ,screen} from "@testing-library/react";
import BannerOne from "./BannerOne";
import React from 'react';
import "@testing-library/jest-dom"
it("Testing BannerOne",()=>{
    render(<BannerOne></BannerOne>);
    expect(screen.getByText("Explore Books on entrepreneurship")).toBeInTheDocument();
})