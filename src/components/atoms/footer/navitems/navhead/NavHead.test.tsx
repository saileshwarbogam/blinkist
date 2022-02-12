import { cleanup, render, screen } from "@testing-library/react";
import NavHead from "./NavHead";

afterEach(cleanup);
test("Testing NavHead",()=>{
   render(<NavHead name="testing" />);
   expect(screen.getByText("testing")).toBeInTheDocument();
});