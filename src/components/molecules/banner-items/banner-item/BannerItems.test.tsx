
import {cleanup, render,screen} from "@testing-library/react";
import { BannerItems } from "./BannerItems";


afterEach(cleanup);
test("Checking BannerItems",()=>{
  render(<BannerItems />);
  expect(screen.getByText("Explore Books on entrepreneurship")).toBeInTheDocument();
});