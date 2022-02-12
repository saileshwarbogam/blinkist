import {cleanup, render,screen} from "@testing-library/react";
import BookDetailsTabs from "./BookDetailsTabs";


afterEach(cleanup);
test("Checking BookDetailsTabs",()=>{
  render(<BookDetailsTabs />);
  expect(screen.getByText("Synopsis")).toBeInTheDocument();
});