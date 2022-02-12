import {cleanup, render,screen} from '@testing-library/react';
import CardHead from './CardHead';
import book1 from "../../atoms/assets/book1.png";
import React from 'react';
import "@testing-library/jest-dom"

afterEach(cleanup);
it('Checking the Card Head rendering',()=>{
    render(<CardHead image={book1}
        bookName="Harry"
        authorName="potter"
        time="24 minutes" />);
    expect(screen.getByTestId("CardHead")).toBeInTheDocument();
});