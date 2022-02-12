import {cleanup, render,screen} from "@testing-library/react";
import FooterNavListOne from "./FooterNavListOne";


afterEach(cleanup);
test("Checking Footer Nav List One Rendering",()=>{
  render(<FooterNavListOne />);
  expect(screen.getByTestId("FooterNavList1")).toBeInTheDocument();
});