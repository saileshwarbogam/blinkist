import { cleanup, render ,screen} from "@testing-library/react";
import AuthorName from "./AuthorName";
import React from 'react';

afterEach(cleanup);
it("Testing AuthorName",()=>{
    render(<AuthorName authName="Sailesh"></AuthorName>);
    expect(screen.getByText("Sailesh")).toBeInTheDocument();
})