import { cleanup, render,screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import HeaderLeft from "./HeaderLeft";
import React from 'react';
import "@testing-library/jest-dom"

afterEach(cleanup);
test("Checking header left Rendering", () => {
  render(<MemoryRouter>
    <HeaderLeft
        icon={true}
        handleChange={()=>console.log("hello from header Left")}
    /></MemoryRouter>
  );
  expect(screen.getByTestId("HeaderLeft")).toBeInTheDocument();
});