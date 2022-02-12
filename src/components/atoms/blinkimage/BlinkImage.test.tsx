import { render ,screen} from "@testing-library/react";
import BlinkImage from "./BlinkImage";
import React from 'react';
it("Testing BannerOne",()=>{
    render(<BlinkImage></BlinkImage>);
    expect(screen.getByAltText("appname")).toBeInTheDocument();
})