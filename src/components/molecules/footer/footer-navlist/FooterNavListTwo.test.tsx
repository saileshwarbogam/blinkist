import {cleanup, render,screen} from "@testing-library/react";
import FooterNavListTwo from "./FooterNavListTwo";



afterEach(cleanup);
test("Checking Footer Nav List Two Rendering",()=>{
  render(<FooterNavListTwo />);
  expect(screen.getByTestId("FooterNavList2")).toBeInTheDocument();
});