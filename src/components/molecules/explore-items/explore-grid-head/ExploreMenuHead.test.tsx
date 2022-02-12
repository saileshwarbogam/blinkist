import {cleanup, render,screen} from "@testing-library/react";
import ExploreMenuHead from "./ExploreMenuHead";


afterEach(cleanup);
test("Checking ExploreMenuHead",()=>{
  render(<ExploreMenuHead />);
  expect(screen.getByText("Explore by category")).toBeInTheDocument();
});