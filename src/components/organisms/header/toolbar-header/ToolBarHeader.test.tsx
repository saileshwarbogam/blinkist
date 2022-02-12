import { cleanup, render,screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import ToolBarHeader from "./ToolBarHeader";
import React from 'react';
import "@testing-library/jest-dom"

afterEach(cleanup);
test("Checking header left Rendering", () => {
  render(<MemoryRouter>
    <ToolBarHeader
        icon={true}
        handleChange={()=>console.log("hello from toolbar header ")}
        handleClick ={(event: React.MouseEvent<HTMLElement>)=>console.log("Test")}
        anchorEl = {null}
        open= {true}
        handleClose = {()=>console.log("Testing")}
        isAuthenticated = {true}
    /></MemoryRouter>
  );
  expect(screen.getByTestId("ToolBarHeader")).toBeInTheDocument();
});