import { cleanup, fireEvent, render,screen } from "@testing-library/react";
import MainSearch from "./MainSearch";
import React from 'react';
import "@testing-library/jest-dom"

afterEach(cleanup);
test("Checking main serach Rendering", () => {
 render(
    <MainSearch search={() => console.log("hello from toolbar header ")} />
  );
  expect(screen.getByTestId("TextField")).toBeInTheDocument();
});
test("Checking OnChange main search", () => {
  render(
    <MainSearch search={() => console.log("hello from toolbar header ")} />
  );
  fireEvent.change( screen.getByTestId("TextField"));
});