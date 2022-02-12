import {cleanup, render,screen} from "@testing-library/react";
import ReadTime from "./ReadTime";


afterEach(cleanup);
test("Checking Read Time Rendering",()=>{
  render(<ReadTime time="24 minutes" />);
  expect(screen.getByText("24 minutes")).toBeInTheDocument();
});