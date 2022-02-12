import { cleanup, render ,screen} from "@testing-library/react";
import BannerImage from "./BannerImage";

import React from 'react';
afterEach(cleanup);
it("Testing AvatarLogin",()=>{
    render(<BannerImage/>);
    expect(screen.getByTestId("BannerImage")).toBeInTheDocument();
})