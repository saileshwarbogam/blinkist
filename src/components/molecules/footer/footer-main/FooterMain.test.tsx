import {cleanup, render,screen} from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import FooterMain from "./FooterMain";


afterEach(cleanup);
test("Checking FooterMain",()=>{
  render(<MemoryRouter><FooterMain /></MemoryRouter>);
  expect(screen.getByTestId("FooterMain")).toBeInTheDocument();
});