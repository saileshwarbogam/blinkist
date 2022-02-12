import { cleanup, render, screen } from "@testing-library/react";
import Heading from "./Heading";
afterEach(cleanup);
test("Testing Heading",()=>{
   render(<Heading />);
   expect(screen.getByText("Trending blinks")).toBeInTheDocument();
});