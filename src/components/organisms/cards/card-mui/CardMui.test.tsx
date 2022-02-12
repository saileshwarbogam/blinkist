import { cleanup, render,screen} from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import book1 from "../../../atoms/assets/book1.png";
import CardMui from "./CardMui";
import React from 'react';
import "@testing-library/jest-dom"

afterEach(cleanup);
test("Checking card Mui Rendering", () => {
  render(<MemoryRouter>
    <CardMui
      details={[
        { image: book1, name: "Harry", author: "Potter", time: "24 minutes" ,finished:true},
      ]}
      handleReadAgain={()=>console.log("hello from card mui")}
      handleFinish={()=>console.log("hello from card mui")}
    /></MemoryRouter>
  );
  expect(screen.getByTestId("CardMui")).toBeInTheDocument();
});