import { render ,screen} from "@testing-library/react";
import BannerTwo from "./BannerTwo";
import React from 'react';
it("Testing BannerOne",()=>{
    render(<BannerTwo></BannerTwo>);
    expect(screen.getByText("Everything you need to know about thriving on a shoestring budget, making your first million, and hiring right from the start.")).toBeInTheDocument();
})