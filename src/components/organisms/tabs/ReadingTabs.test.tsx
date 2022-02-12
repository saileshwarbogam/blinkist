import { cleanup, render,screen } from "@testing-library/react";
import book1 from "../../atoms/assets/book1.png"
import ReadingTabs from "./ReadingTabs";
import React from 'react';
import "@testing-library/jest-dom"
afterEach(cleanup);
test("Checking reading tabs Rendering", () => {
  render(
    <ReadingTabs
    currentReading={[
        { image: book1, name: "Harry", author: "Potter", time: "24 minutes" ,finished:true},
      ]}
      finishedReading={[
        { image: book1, name: "Harry", author: "Potter", time: "24 minutes" ,finished:true},
      ]}
      handleReadAgain={()=>console.log("hello from tabs")}
      handleFinish={()=>console.log("hello from tabs")}
    />
  );
  const text = screen.getByText("Harry");
  expect(text).toBeInTheDocument();
});