import { render, screen } from "@testing-library/react";
import BookTitle from "./BookTitle";

it('Checking the KeyIdeas',()=>{
    render(<BookTitle bookName="Harry potter" />);
    expect(screen.getByText("Harry potter")).toBeInTheDocument();
 });