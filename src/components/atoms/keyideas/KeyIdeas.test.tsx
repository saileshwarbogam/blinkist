import {render,screen} from '@testing-library/react';
import KeyIdeas from './KeyIdeas';
import React from 'react';
import "@testing-library/jest-dom"
it('Checking the KeyIdeas',()=>{
    render(<KeyIdeas />);
    expect(screen.getByText("Get the key ideas from")).toBeInTheDocument();
 });