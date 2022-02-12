import {cleanup, render,screen} from "@testing-library/react";
import FooterNavListThree from "./FooterNavListThree";


afterEach(cleanup);
test("Checking Footer Nav List Three Rendering",()=>{
 render(<FooterNavListThree />);
  expect(screen.getByTestId("FooterNavList3")).toBeInTheDocument();
});