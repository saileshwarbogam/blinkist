import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import FinishedButton from "./FinishedButton";
import React from 'react';
afterEach(cleanup);
test("Checking FinishedButton",()=>{
    const fakeFunction=(item:string)=>{
        console.log("Fake Function");
    }
  render(<FinishedButton name="Harry" handleFinish={fakeFunction} />);
  const text=screen.getByRole("button");
  expect(text).toBeInTheDocument();
});
test("Checking OnCLick FinishedButton",()=>{
  const fakeFunction=()=>{
      console.log("Fake Function");
  }
render(<FinishedButton name="Harry" handleFinish={fakeFunction} />);
fireEvent.click(screen.getByRole("button"));
});