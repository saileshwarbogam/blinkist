import { cleanup, render, screen } from "@testing-library/react";
import NavItem from "./NavItem";

afterEach(cleanup);
test("Testing NavItem",()=>{
   render(<NavItem name="testing"/>);
   expect(screen.getByText("testing")).toBeInTheDocument();
});