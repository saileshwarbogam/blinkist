import { render, screen } from "@testing-library/react";
import BookTitle from "./BookTitle";
import React from 'react';
it('Checking the KeyIdeas',()=>{
    render(<BookTitle bookName="Harry potter" />);
    expect(screen.getByText("Harry potter")).toBeInTheDocument();
 });