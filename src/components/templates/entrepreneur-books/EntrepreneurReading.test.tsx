import {render,screen} from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import EntrepreneurReading from './EntrepreneurReading';
import React from 'react';
import "@testing-library/jest-dom";

it('Checking the Enterprenur Reading',()=>{
    render(<MemoryRouter> <EntrepreneurReading value='to' /> </MemoryRouter>);
    const btn=screen.getByTestId("Enterprenur");
 
    expect(btn).toBeInTheDocument();
 });