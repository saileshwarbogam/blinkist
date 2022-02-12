import { render, screen } from "@testing-library/react";
import FinishedBar from "./FinishedBar";

it('Checking the FinishedBar',()=>{
    render(<FinishedBar />);
    expect(screen.getByTestId("FinishedBar")).toBeInTheDocument();
 });