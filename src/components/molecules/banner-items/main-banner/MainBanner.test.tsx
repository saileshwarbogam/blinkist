import {cleanup, render,screen} from "@testing-library/react";
import MainBanner from "./MainBanner";

afterEach(cleanup);
test("Checking MainBanner",()=>{
  render(<MainBanner />);
  expect(screen.getByText("Explore Books on entrepreneurship")).toBeInTheDocument();
});