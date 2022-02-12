import { cleanup, render, screen } from "@testing-library/react";
import FooterHighlight from "./FooterHighlight";

afterEach(cleanup);
test("Testing FooterHighlight",()=>{
    render(<FooterHighlight />);
    expect(screen.getByTestId("highlight")).toBeInTheDocument();
});